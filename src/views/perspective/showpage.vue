<template>
  <div class="container" v-loading="loading">
    <div class="page" id="page1" v-show="state!=3">
      <el-button type="primary" v-show="state==0" @click="start">开始仿真</el-button>
      <span v-show="state==1">正在仿真中，请等待...</span>
      <el-button type="success" v-show="state==2" @click="showdetail">仿真回放</el-button>
    </div>
    <div class="page" id="page2" v-show="state==3">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="gNB时延展示" name="1">
          <div class="imgBox">
            <div class="imgStarmap" id="imgStarmap1">
              <div id="echarts_graph1" style="width: 35vw; height: 60vh;"></div>
            </div>
            <div class="imgStarmap" id='imgStarmap2'>
              <el-table
                :data="tableData1"
                style="width: 100%"
                size='mini'
                height="100%">
                <el-table-column prop="name" label=""></el-table-column>
                <el-table-column prop="ave_delay" label="平均时延(us)"></el-table-column>
                <el-table-column prop="ope_times" label="运行次数"></el-table-column>
                <el-table-column prop="max_delay" label="单次最大时延(us)"></el-table-column>
              </el-table>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="UE时延展示" name="2">
          <div class="imgBox">
            <div class="imgStarmap" id="imgStarmap3">
              <div id="echarts_graph2" style="width: 35vw; height: 60vh;"></div>
            </div>
            <div class="imgStarmap" id='imgStarmap4'>
              <el-table
                :data="tableData2"
                style="width: 100%"
                size='mini'
                height="100%">
                <el-table-column prop="name" label=""></el-table-column>
                <el-table-column prop="ave_delay" label="平均时延(us)"></el-table-column>
                <el-table-column prop="ope_times" label="运行次数"></el-table-column>
                <el-table-column prop="max_delay" label="单次最大时延(us)"></el-table-column>
              </el-table>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
      <br>
      <div class="footer">
        <el-button type="primary" @click="alive=false" style="margin-bottom: 20px" v-show="alive">结束仿真</el-button>
        <el-button type="primary" @click="state=0" style="margin-bottom: 20px" v-show="!alive">重新仿真</el-button>
        <el-button type="primary" @click="$router.push('settings')" style="margin-bottom: 20px" v-show="!alive">编辑参数</el-button>
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
        tableData1: [
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
        ],
        tableData2: [
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
          {name:'pbch_common_signal_procedures_stats',ave_delay:0.29,ope_times:19376,max_delay:1.63},
        ]
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
        this.state = 3;
        this.showecharts();
      },
      showecharts() {
        let option_graph_1 = {
          animation: false,
          tooltip: {
            formatter: '<b>{c}</b> us',
          },
          series: [{
            type: 'graph',
            symbol: 'rect',
            symbolSize: [200,30],
            roam: false,
            label: {
              show: true
            },
            edgeLabel: {
              fontSize: 20
            },
            data: [
              {x:100,y:100,name:'nr_schedule_ue_spec',value:2.38},
              {x:100,y:200,name:'nr_dlsch_encoding',value:112.35},
              {x:100,y:300,name:'scrambling',value:85.99},
              {x:100,y:400,name:'nr_modulation',value:21.66},
              {x:100,y:500,name:'nr_layer_mapping',value:3.90},
              {x:100,y:600,name:'precoding',value:11.06},
              {x:100,y:700,name:'beamforming',value:7.06},
              {x:100,y:800,name:'IFFT&CPI',value:567.35},
              {x:100,y:900,name:'XXXX\nXXXX'},
            ],
            links: [
              {source:'nr_schedule_ue_spec',target: 'nr_dlsch_encoding'},
              {source:'nr_dlsch_encoding',target: 'scrambling'},
              {source:'scrambling',target: 'nr_modulation'},
              {source:'nr_modulation',target: 'nr_layer_mapping'},
              {source:'nr_layer_mapping',target: 'precoding'},
              {source:'precoding',target: 'beamforming'},
              {source:'beamforming',target: 'IFFT&CPI'},
              {source:'IFFT&CPI',target: 'XXXX\nXXXX'},
            ],
            lineStyle: {
              opacity: 1,
              width: 2,
            }
          }]
        };
        if(document.getElementById('echarts_graph1')!=null) {
          document.getElementById('echarts_graph1').removeAttribute("_echarts_instance_");
          this.$echarts.init(document.getElementById('echarts_graph1')).setOption(option_graph_1);
        }
        let option_graph_2 = {
          animation: false,
          tooltip: {
            formatter: '<b>{c}</b> us',
          },
          series: [{
            type: 'graph',
            symbol: 'rect',
            symbolSize: [200,30],
            roam: false,
            label: {
              show: true
            },
            edgeLabel: {
              fontSize: 20
            },
            data: [
              {x:100,y:100,name:'CPR&FFT',value:108.92},
              {x:100,y:200,name:'channel_estimation',value:29.43},
              {x:100,y:300,name:'Extract_RB',value:1.27},
              {x:500,y:300,name:'1',symbolSize: 0},
              {x:500,y:400,name:'Channel_level',value:3.12},
              {x:500,y:500,name:'2',symbolSize: 0},
              {x:100,y:500,name:'Channel_compensation',value:1.52},
              {x:100,y:600,name:'MRC Zero_forcing',value:0.03},
              {x:100,y:700,name:'Compute LLR, Layer demapping',value:0.22},
              {x:100,y:800,name:'DLSCH decoding',value:86.98},
            ],
            links: [
              {source:'CPR&FFT',target: 'channel_estimation'},
              {source:'channel_estimation',target: 'Extract_RB'},
              {source:'Channel_compensation',target: 'MRC Zero_forcing'},
              {source:'MRC Zero_forcing',target: 'Compute LLR, Layer demapping'},
              {source:'Compute LLR, Layer demapping',target: 'DLSCH decoding'},

              {source:'Extract_RB',target: '1',symbol :'none'},
              {source:'Channel_level',target: '1',symbol :'none'},
              {source:'Channel_level',target: '2',symbol :'none'},
              {source:'Channel_compensation',target: '2',symbol :'none'},
            ],
            lineStyle: {
              opacity: 1,
              width: 2,
            },
            label: {
              show: true,
              lineHeight: 20,
              borderWidth: 0,
              color: '#fff',
            },
          }]
        };
        if(document.getElementById('echarts_graph2')!=null) {
          document.getElementById('echarts_graph2').removeAttribute("_echarts_instance_");
          this.$echarts.init(document.getElementById('echarts_graph2')).setOption(option_graph_2);
        }
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
    height: calc(60vh - 20px);
  }
  #imgStarmap1 {width: 50%;}
  #imgStarmap2 {width: 50%;margin-left: 10px;}
  #imgStarmap3 {width: 50%;}
  #imgStarmap4 {width: 50%;margin-left: 10px;}
  
  #page2 {
    position: relative;
  }
  #page2 .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
