<template>
	<div class="topology">
    <canvas class="canvas"></canvas>
    <div class="button-group">
      <el-switch
        style="display: block"
        v-model="value1"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="Link visibility"
      >
      </el-switch>
      <el-switch
        style="display: block"
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="Tunnel visibility"
      >
      </el-switch>
    </div>
	</div>
</template>

<script>
    export default {
        name: 'TopologyView',
        data() {
            return {
              stage:Object,
              scene:Object,
              links:Array,
              realLinks:Array,
              value1:true,
              value2:true
            }
        },
      props:{
        deviceList:Array,
        tunnelList:Array
      },
      methods: {
        drawCanvas (stage) {
          // let topologyElement = jQuery(".topology");
          // let canvasElement = jQuery(".canvas");
          // let width = topologyElement.css('width');
          // let height = topologyElement.css('height');
          // canvasElement.attr({'width':width,'height':height});
          //
          // let canvas = canvasElement.get(0);
          // let stage = new JTopo.Stage(canvas);
          stage.frames = 100;
          stage.wheelZoom = 1.2;
          let scene = new JTopo.Scene(stage);

          let nodes = [];                       //存放node对象
          let nodesIP = [];                     //存放node对应的ip
          let links = [];                       //存放link对象
          let realLinks = [];                   //存放设备与控制器间的连接
          let linksnodes = [];                  //存放所有非空闲的node对象
          let r = 300;                          //中心圆的半径
          let n = this.deviceList.length;       //中心圆的节点数
          let p = 750;                          //中心圆的坐标
          let q = 380;
          //draw center node
          let centerNode = new JTopo.CircleNode('ODL');
          centerNode.setLocation(p,q);
          centerNode.shadow = true;
          centerNode.fillColor = '235, 120, 34';
          centerNode.font = '.35rem arial';
          centerNode.textPosition = 'Middle_Center';
          centerNode.fontColor = '255,255,255';
          scene.add(centerNode);
          // console.log(this.deviceList.length);
          //draw device node
          this.deviceList.forEach((item,index) => {
            let x = p+r*Math.cos(2*Math.PI*(index-1)/n);
            let y = q+r*Math.sin(2*Math.PI*(index-1)/n);
            let ip = item.localDeviceIpList;
            let txt = "Device "+item.id;
            let node = new JTopo.Node(txt);
            node.fontColor = '48,48,48';
            node.font =  '.3rem arial';
            node.fillColor = '55, 138, 206';
            node.setLocation(x,y);
            node.shadow = true;
            node.ip = ip;
            node.id = item.id;
            scene.add(node);
            mouseHover(node,'IP: '+ip);
            nodes.push(node);
            nodesIP.push(ip);

          });

          //link between controller and node
          nodes.forEach( ( item,index) => {
            let link = newLink(centerNode,item,'openflow: '+(item.id),'100,100,100',null,'');
            realLinks.push(link);
            scene.add(link);
          });

          //link of tunnel
          this.tunnelList.forEach( (item,index) => {
            let indexSrc = nodesIP.indexOf(item.vtepSrcIp);
            let indexDes = nodesIP.indexOf(item.vtepDestIp);
            let link = newLink(nodes[indexSrc],nodes[indexDes],"VNI: "+ item.vni,'',null,'4');
            links.push(link);
          });
          this.realLinks = realLinks;
          this.links = links;
          this.scene = scene;

          function newLink(node1,node2,text,color,dashedPattern,width) {
            let link = new JTopo.Link(node1,node2,text);
            link.lineWidth = 1;
            link.dashedPattern = dashedPattern;//虚线
            link.bundleOffset = 60;//折线拐角处长度
            link.lineWidth = width;
            link.bundleGap = 20;//线条间间隔 为0时两条线合并为一条，加上每条的箭头，呈现出双向箭头
            link.textOffsetY = 0;//文本向下偏移3个像素
            link.textOffsetX = 25;
            link.strokeColor = color||'48,48,48'||JTopo.util.randomColor();
            link.fontColor = '100,100,100';
            link.font = '0.25rem arial';
            scene.add(link);
            return link;
          }

          function mouseHover(x,text){
            x.addEventListener('mouseover',function () {
              x.alarm = text || '255.255.255.255';
              x.alarmFont = '.32rem arial';
              x.alarmColor = '92,220,233';

              x.alarmAlpha =0.05;
              var interval = setInterval(function () {
                x.alarmAlpha += 0.03;
                if (x.alarmAlpha >= 0.6)
                  clearInterval(interval);
              },50);
            });
            x.addEventListener('mouseout',function () {
              this.alarm = null;
            });
            x.addEventListener('mousedown',function () {
              this.alarm = null;
            })
          }
        },
        hideLinks (val) {
          this.realLinks.forEach( item => {
            item.visible = val;
          });
        },
        hideTunnles (val) {
          this.links.forEach( item => {
            item.visible = val;
          })
        },

      },
      mounted() {
        setTimeout(() => {
          let topologyElement = jQuery(".topology");
          let canvasElement = jQuery(".canvas");
          let width = topologyElement.css('width');
          let height = topologyElement.css('height');
          canvasElement.attr({'width':width,'height':height});
          let canvas = canvasElement.get(0);
          this.stage = new JTopo.Stage(canvas);

          this.drawCanvas(this.stage);
        },1000);
      },
      watch: {
          deviceList: {
          handler: function (val,oldVal) {
            setTimeout(() => {
              this.stage.clear();
              this.drawCanvas(this.stage);
            },2000)
          }
        },
          tunnelList: {
            handler: function (val,oldVal) {
              setTimeout(() => {
                this.stage.clear();
                this.drawCanvas(this.stage);
              },1500)
            }
          },
          value1: function (val,oldVal) {
                this.hideLinks(val);
          },
          value2: function (val,oldVal) {
                this.hideTunnles(val);
          }
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topology{
  width: 99%;
  height: 17.5rem;
  margin-top: .3rem;
  background-color: #ebebeb;
}

.button-group{
  position: absolute;
  top:2rem;
  right: .5rem;
}

.el-switch{
  margin-top: .2rem;
}
</style>
