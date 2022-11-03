import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form1: {  
      form1: {
        input1: {
          username: 'sygu',
          password: '123',
          ipaddress: '10.112.204.141',
          port: '666'
        },
        input2: {
          username: 'cqzhu',
          password: '123',
          ipaddress: '10.112.44.33',
          port: '666'
        }
      },
      form2: {
        method: '1',
        files: [
          'gnb.band78.tm1.106PRB.usrpb210.conf',
          'gnb.band78.tm1.24PRB.usrpb210.conf',
          'gnb.sa.band41.fr1.106PRB.usrpb210.conf',
          'gnb.sa.band78.fr1.106PRB.usrpb210.4layer.conf',
          'gnb.sa.band78.fr1.106PRB.usrpb210.conf',
          'gnb.sa.band78.fr1.24PRB.usrpb210.conf',
          'gnb.sa.band78.fr1.106PRB.usrpb210.sabox.conf',
          'enb.band7.tm1.25PRB.usrpb210.replay.conf',
          'enb.band7.tm1.50PRB.usrpb210.conf',
        ],
        selectFile: 'gnb.band78.tm1.106PRB.usrpb210.conf',
        input: {
          serveraddr: 'server',
          serverport: '5355',
          option: 'chanmod',
          modelname: 'model1',
          IQfile: '—',
        },
        fileName: '',
        fileList: []
      },
      form3: {
        method: '1',
        files: [
          'AWGN',
          'Rice1',
          'Rayleigh1',
          'SCM_A',
          'EPA',
          'EVA',
          'ETU',
          'TDL_A',
          'MBSFN',
        ],
        selectFile: 'AWGN',
        input: {
          nb_tx: '1',
          nb_rx: '1',
          nb_taps: '1',
          channel_bandwidth: '20.0',
          sampling_rate: '30.72',
          max_Doppler: '0',
          amps: '0.0,-1.0,-2.0,-3.0,-8.0,-17.2,-20.8',
          delays: '0,0.03,0.07,0.09,0.11,0.19,0.41',
          channel_length: '1',
          Td: '0',
          aoa: '0.03',
          ricean_factor: '0.0',
          path_loss_dB: '10'
        },
        fileName: '',
        fileList: []
      },
      form4: {
        global_log_level: 'INFO',
        hw_log_level: 'INFO',
        phy_log_level: 'INFO',
        mac_log_level: 'INFO',
        rlc_log_level: 'INFO',
        pdcp_log_level: 'INFO',
        rrc_log_level: 'INFO',
        ngap_log_level: 'INFO',
        flap_log_level: 'INFO',
        options:[
            'INFO',
            'WARNING',
            'DEBUG',
            'ERR',
            'NOTICE',
        ]
      }
    },
    form2: {
      method: '1',
      files: [
        'AWGN',
        'Rice1',
        'Rayleigh1',
        'SCM_A',
        'EPA',
        'EVA',
        'ETU',
        'TDL_A',
        'MBSFN',
      ],
      selectFile: 'AWGN',
      input: {
        nb_tx: '1',
        nb_rx: '1',
        nb_taps: '9',
        channel_bandwidth: '20.00',
        sampling_rate: '30.72',
        max_Doppler: '10000',
        amps: '-1.0,-1.3,-1.8,0.0,0.5,0.2,-3.7,-5.2,-7.9',
        delays: '0.0,1.0,2.4,4.0,4.6,10.0,32.0,46.0,10.0',
        channel_length: '1',
        Td: '0',
        aoa: '0.7854',
        ricean_factor: '0.1',
        path_loss_dB: '10',
      },
      fileName: '',
      fileList: []
    },
    form3: {
      checkbox: {
        UE: {
          pdcch: [
            {value: 'pdcch procedures',label: 'pdcch procedures'},
            {value: 'pdcch ack',label: 'pdcch ack'},
          ],
          pdsch: [
            {value: 'pdsch procedures',label: 'pdsch procedures'},
            {value: 'pdsch ack',label: 'pdsch ack'},
          ],
          L1: [
            {value: 'CPR_FFT',label: 'CPR_FFT'},
            {value: 'channel estimation',label: 'channel estimation'},
            {value: 'channel level',label: 'channel level'},
            {value: 'channel compensation',label: 'channel compensation'},
            {value: 'MRC',label: 'MRC'},
            {value: 'zero forcing',label: 'zero forcing'},
            {value: 'compute LLR',label: 'compute LLR'},
            {value: 'layer demapping',label: 'layer demapping'},
            {value: 'DLSCH decoding',label: 'DLSCH decoding'},
          ]
        },
        gNB: {
          pbch: [
            {value: 'pbch_common_signal_procedures_stats',label: 'pbch_common_signal_procedures_stats'},
          ],
          pdcch: [
            {value: 'pdcch_generate_dci_top_stats',label: 'pdcch_generate_dci_top_stats'},
          ],
          pdsch: [
            {value: 'pdsch_generate_pdsch_stats',label: 'pdsch_generate_pdsch_stats'},
          ],
          L1: [
            {value: 'nr_schedule_ue_spec',label: 'nr_schedule_ue_spec'},
            {value: 'nr_dlsch_encoding',label: 'nr_dlsch_encoding'},
            {value: 'scrambling',label: 'scrambling'},
            {value: 'nr_modulation',label: 'nr_modulation'},
            {value: 'nr_layer_mapping',label: 'nr_layer_mapping'},
            {value: 'precoding',label: 'precoding'},
            {value: 'beamforming',label: 'beamforming'},
            {value: 'IFFT&CPI',label: 'IFFT&CPI'},
          ],
          L2: [
            {value: 'dlsch scheduler',label: 'dlsch scheduler'},
          ],
        },
      },
      select1: true,
      select2: true,
      input1: {
        pbch: {select:true, children: [], hasChild: false},
        pdcch: {select:false, children: [], hasChild: true},
        pdsch: {select:false, children: [], hasChild: true},
        L1: {select:false, children: [], hasChild: true},
        process: {select:false, children: [], hasChild: false},
      },
      input2: {
        pbch: {select:false, children: [], hasChild: true},
        pdcch: {select:false, children: [], hasChild: true},
        pdsch: {select:false, children: [], hasChild: true},
        L1: {select:false, children: [], hasChild: true},
        L2: {select:false, children: [], hasChild: true},
        process: {select:true, children: [], hasChild: false},
      },
    },
    form4: {
      form1: {
        checkbox1: [true,false],
        checkbox2: [true,true],
        
        k0: '0',
        k2: '6',
        typeA: '0',
        typeB: '1',
        SLIV: '14',

        nrofDownlinkSlots: '7',
        nrofDownlinkSymbols: '6',
        nrofUplinkSlots: '2',
        nrofUplinkSymbols: '4',
      },
      form2: {
        select1: true,
        select2: true,
        
        checkbox1: [false,false,true],
        checkbox2: [false,false,false,true],
        
        sampling: '1000000',
        SNR: '18',
        interval: '0.2',

        powerRange: [-13,72],
        distance: 500,
        model: 'Inf-DL NLOS(TR 38.901)',
        bandwidth: 25,
        freq: 2.4,
        symbolCount: 5000000
      }
    }
  },
  getters: {
  },
  mutations: {
    setForm(state,content) {
      if(content.index==1) {
        state.form1.form1 = JSON.parse(JSON.stringify(content.forms[0]))
        state.form1.form2 = JSON.parse(JSON.stringify(content.forms[1]))
        state.form1.form3 = JSON.parse(JSON.stringify(content.forms[2]))
        state.form1.form4 = JSON.parse(JSON.stringify(content.forms[3]))
      } else if(content.index==2) {
        state.form2 = JSON.parse(JSON.stringify(content.forms[0]))
      } else if(content.index==3) {
        state.form3 = JSON.parse(JSON.stringify(content.forms[0]))
      } else if(content.index==4.1) {
        state.form4.form1 = JSON.parse(JSON.stringify(content.forms[0]))
      } else if(content.index==4.2) {
        state.form4.form2 = JSON.parse(JSON.stringify(content.forms[0]))
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
