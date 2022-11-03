<template>
  <div class="container" v-loading="loading">
    <div class="page" id="page1" v-show="state!=3">
      <el-button type="primary" v-show="state==0" @click="start">开始仿真</el-button>
      <span v-show="state==1">正在仿真中，请等待...</span>
      <el-button type="success" v-show="state==2" @click="showdetail">仿真回放</el-button>
    </div>
    <div class="page" id="page2" v-show="state==3">
      <el-collapse v-model="activeName" accordion @change="resizeChart">
        <el-collapse-item title="mcs编码表配置性能展示" name="1">
          <div class="imgBox">
            <div class="imgStarmap" id="imgStarmap1">
              <p v-for="(val, index) in dataLog.SNR" :key="index">
                {{'SNR '+ dataLog.SNR[index] +': Channel BLER '+dataLog.BLER[index]}}
              </p>
            </div>
            <div class="imgStarmap" id="imgStarmap2">
              <div id="echarts_line1" style="width: 100%; height: 100%"></div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="编码可靠性配置性能展示" name="2">
          <div class="imgBox">
            <div class="imgStarmap" id="imgStarmap3">
              <div id="echarts_line2" style="width: 100%; height: 100%"></div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="footer">
        <el-button type="primary" @click="alive=false" style="margin-bottom: 20px" v-show="alive">结束仿真</el-button>
        <el-button type="primary" @click="state=0" style="margin-bottom: 20px" v-show="!alive">重新仿真</el-button>
        <el-button type="primary" @click="$router.push('settings2')" style="margin-bottom: 20px" v-show="!alive">编辑参数</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vueLC",
    data () {
      return {
        loading: false,
        state: 0,
        activeName: '1',
        alive: true,
        dataLog: [],
        dataLine1: [],
        dataLine2: [],
      }
    },
    mounted() {
      this.loading = false;
    },
    methods:{
      start() {
        this.state = 1;
        setTimeout(() => {
          this.state = 2;
        }, 200);
      },
      showdetail() {
        this.dataLog = {
          SNR: [18.0,18.2,18.4,18.6,18.8,19.0,19.2,19.4,19.6,19.8,20.0,20.2,20.4,20.6,20.8,21.0,21.2,21.4,21.6,21.8,22.0,22.2,22.4,22.6,22.8,23.0,23.2,23.4,23.6,23.8,24.0,24.2,24.4,24.6,24.8,25.0,25.2,25.4,25.6,25.8,26.0,26.2,26.4,26.6,26.8,27.0,27.2,27.4,27.6,27.8,28.0],
          BLER: [1.0000,1.0000,1.0000,1.0000,0.9999,1.0000,0.9996,0.9981,0.9957,0.9865,0.9704,0.9454,0.9067,0.8569,0.7886,0.7131,0.6364,0.5602,0.4743,0.3963,0.3416,0.2834,0.2334,0.1890,0.1505,0.1223,0.1057,0.0821,0.0675,0.0488,0.0425,0.0319,0.0277,0.0206,0.0162,0.0159,0.0116,0.0088,0.0067,0.0056,0.0040,0.0034,0.0029,0.0024,0.0018,0.0017,0.0009,0.0008,0.0006,0.0003,0.0001]
        }
        this.dataLine1 = {
          SNR: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
          MSC_2: [1.0000,1.0000,1.0000,1.0000,1.0000,1.0000,1.0000,1.0000,1.0000,0.9996,0.9713,0.7125,0.3539,0.1474,0.0657,0.0252,0.0078,0.0024],
          MSC_1:  [1.0000,1.0000,1.0000,1.0000,1.0000,1.0000,1.0000,1.0000,1.0000,0.9994,0.9115,0.5285,0.2142,0.0983,0.0309,0.0089,0.0029,0.0007],
          MSC_0: [1.0000,1.0000,1.0000,1.0000,1.0000,1.0000,1.0000,1.0000,1.0000,0.9990,0.8227,0.4382,0.1415,0.0553,0.0178,0.0051,0.0019,0.0003]
        }
        this.dataLine2 = {
          SNR: [-13,-8,-3,2,7,12,17,22,27,32,37,42,47,52,57,62,67,72,77],
          BER_SISO: [0.4866104,0.47504825,0.45267685,0.4085831,0.326712,0.2078694,0.09839305,0.0372385,0.0125851,0.00406565,0.00129335,0.00041485,0.00013025,4.21E-5,1.38E-5,3.65E-6,8.5E-7,1E-7,5E-8],
          BER_21Alamouti: [0.48597105,0.4736301,0.45026575,0.4033103,0.31432425,0.1792328,0.05976555,0.0111935,0.00143395,0.0001553,1.465E-5,1.6E-6],
          BER_31STBC: [0.4791484375,0.4608044375,0.424897375,0.3532243125,0.2283606875,0.0852485625,0.0135614375,0.0009488125,4.175E-5,1.1875E-6,6.25E-8]
        }
        this.state = 3;
        this.showecharts();
      },
      resizeChart() {
        this.showecharts()
      },
      showecharts() {
        let option_line_1 = {
          xAxis: {
            name: 'SNR',
            type: 'category',
            data: this.dataLine1.SNR
          },
          yAxis: {
            name: 'BLER',
            // type: 'value'
            type: 'log'
          },
          grid: {
            left: '12%',
            top: '10%',
            right: '10%',
            bottom: '5%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['MSC_2','MSC_1','MSC_0']
          },
          series: [
            {data:this.dataLine1.MSC_2,type:'line',name:'MSC_2'},
            {data:this.dataLine1.MSC_1,type:'line',name:'MSC_1'},
            {data:this.dataLine1.MSC_0,type:'line',name:'MSC_0'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line1')!=null) {
            document.getElementById('echarts_line1').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line1')).setOption(option_line_1);
          }
        })
        let option_line_2 = {
          xAxis: {
            name: '发射功率(dBm)',
            type: 'category',
            data: this.dataLine2.SNR
          },
          yAxis: {
            name: '误比特率(BER)',
            // type: 'value'
            type: 'log'
          },
          grid: {
            left: '12%',
            top: '10%',
            right: '10%',
            bottom: '5%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['BER_SISO','BER_21Alamouti','BER_31STBC']
          },
          series: [
            {data:this.dataLine2.BER_SISO,type:'line',name:'BER_SISO'},
            {data:this.dataLine2.BER_21Alamouti,type:'line',name:'BER_21Alamouti'},
            {data:this.dataLine2.BER_31STBC,type:'line',name:'BER_31STBC'},
          ]
        };
        this.$nextTick(() => {
          if(document.getElementById('echarts_line2')!=null) {
            document.getElementById('echarts_line2').removeAttribute("_echarts_instance_");
            this.$echarts.init(document.getElementById('echarts_line2')).setOption(option_line_2);
          }
        })
      }
    }
  }
</script>

<style>
</style>

<style scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .page {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #page1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imgBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .imgStarmap {
    position: relative;
    width: 50%;
    height: 60vh;
  }
  #imgStarmap1 {
    width: 30%;
    white-space: pre;
    overflow-y: auto;
  }
  #imgStarmap2 {
    width: 70%;
  }
  #imgStarmap3 {
    width: 100%;
  }
  #page2 {
    position: relative;
  }
  #page2 .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
