<template>
  <div class="container" v-loading="loading">
    <div class="header">
      <el-steps :active="active" finish-status="success">
        <el-step title="网络参数配置"></el-step>
        <el-step title="基站参数配置"></el-step>
        <el-step title="信道参数配置"></el-step>
        <el-step title="运行日志配置"></el-step>
      </el-steps>
    </div>
    <div class="content">
      <div class="page" id="page1" v-if="active==0">
        <el-row :gutter="24">
          <el-col :span="10">
            <el-form ref="form1_1" :model="form1.input1" size="small" label-width="150px" label-position="left">
              <h1>gNB网络参数输入</h1>
              <el-form-item label="用户名" prop="username">
                <el-input v-model="form1.input1.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="form1.input1.password"></el-input>
              </el-form-item>
              <el-form-item label="ip" prop="ipaddress">
                <el-input v-model="form1.input1.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="端口" prop="port">
                <el-input v-model="form1.input1.port"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="10" :offset="2">
            <el-form ref="form1_2" :model="form1.input2" size="small" label-width="150px" label-position="left">
              <h1>UE网络参数输入</h1>
              <el-form-item label="用户名" prop="username">
                <el-input v-model="form1.input2.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="form1.input2.password"></el-input>
              </el-form-item>
              <el-form-item label="ip" prop="ipaddress">
                <el-input v-model="form1.input2.ipaddress"></el-input>
              </el-form-item>
              <el-form-item label="端口" prop="port">
                <el-input v-model="form1.input2.port"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-button type="primary" @click="reset(1)" size="small" style="margin-top: 40px">重置</el-button>
      </div>
      <div class="page" id="page2" v-if="active==1">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form2_1" :model="form2" size="small" label-width="150px" label-position="left">
              <el-form-item label="配置方式" prop="method">
                <el-radio-group v-model="form2.method">
                  <el-radio label="1">选择已有文件</el-radio>
                  <el-radio label="2">自行设置文件</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form ref="form2_2" :model="form2" size="small" label-width="150px" label-position="left">
              <el-form-item label="选择文件" v-show="form2.method==1">
                <el-select v-model="form2.selectFile" placeholder="请选择">
                  <el-option
                    v-for="item in form2.files"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="配置文件名称" v-show="form2.method==2" prop='fileName'>
                <el-input v-model="form2.fileName"></el-input>
              </el-form-item>
              <el-form-item label="文件导入" v-show="form2.method==2">
                <el-upload
                  class="upload-demo"
                  ref="upload2"
                  action="/"
                  :on-preview="handlePreview"
                  :file-list="form2.fileList"
                  :auto-upload="false"
                  :limit=1
                  :multiple='false'>
                  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                  <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
                  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form ref="form2_3" :model="form2" size="small" label-width="150px" label-position="left">
              <el-form-item label="serveraddr" v-show="form2.method==1&&form2.selectFile!=''" prop='serveraddr'>
                <el-input :disabled='form2.selectFile==""' v-model="form2.input.serveraddr"></el-input>
              </el-form-item>
              <el-form-item label="serverport" v-show="form2.method==1&&form2.selectFile!=''" prop='serverport'>
                <el-input :disabled='form2.selectFile==""' v-model="form2.input.serverport"></el-input>
              </el-form-item>
              <el-form-item label="option" v-show="form2.method==1&&form2.selectFile!=''" prop='option'>
                <el-input :disabled='form2.selectFile==""' v-model="form2.input.option"></el-input>
              </el-form-item>
              <el-form-item label="modelname" v-show="form2.method==1&&form2.selectFile!=''" prop='modelname'>
                <el-input :disabled='form2.selectFile==""' v-model="form2.input.modelname"></el-input>
              </el-form-item>
              <el-form-item label="IQfile" v-show="form2.method==1&&form2.selectFile!=''" prop='IQfile'>
                <el-input :disabled='form2.selectFile==""' v-model="form2.input.IQfile"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-button  v-show="form2.method!=''" type="primary" @click="reset(2)" size="small" style="margin-top: 40px">重置</el-button>
      </div>
      <div class="page" id="page3" v-if="active==2">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form3_1" :model="form3" size="small" label-width="150px" label-position="left">
              <el-form-item label="配置方式" prop="method">
                <el-radio-group v-model="form3.method">
                  <el-radio label="1">选择已有信道模型</el-radio>
                  <el-radio label="2">自行设置信道模型</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form ref="form" :model="form3" size="small" label-width="150px" label-position="left">
              <el-form-item label="选择信道模型" v-show="form3.method==1">
                <el-select v-model="form3.selectFile" placeholder="请选择">
                  <el-option
                    v-for="item in form3.files"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="配置文件名称" v-show="form3.method==2">
                <el-input v-model="form3.fileName"></el-input>
              </el-form-item>
              <el-form-item label="文件导入" v-show="form3.method==2">
                <el-upload
                  class="upload-demo"
                  ref="upload2"
                  action="/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="form3.fileList"
                  :auto-upload="false"
                  :limit=1
                  :multiple='false'>
                  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                  <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
                  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form ref="form" :model="form3" size="small" label-width="150px" label-position="left">
              <el-form-item label="nb_tx" v-show="form3.method==1&&form3.selectFile!=''">
                <el-input :disabled='form3.selectFile==""' v-model="form3.input.nb_tx"></el-input>
              </el-form-item>
              <el-form-item label="nb_rx" v-show="form3.method==1&&form3.selectFile!=''">
                <el-input :disabled='form3.selectFile==""' v-model="form3.input.nb_rx"></el-input>
              </el-form-item>
              <el-form-item label="nb_taps" v-show="form3.method==1&&form3.selectFile!=''">
                <el-input :disabled='form3.selectFile==""' v-model="form3.input.nb_taps"></el-input>
              </el-form-item>
              <el-form-item label="channel_bandwidth" v-show="form3.method==1&&form3.selectFile!=''">
                <el-input :disabled='form3.selectFile==""' v-model="form3.input.channel_bandwidth"></el-input>
              </el-form-item>
              <el-form-item label="sampling_rate" v-show="form3.method==1&&form3.selectFile!=''">
                <el-input :disabled='form3.selectFile==""' v-model="form3.input.sampling_rate"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="8">
            <el-form ref="form" :model="form3" size="small" label-width="150px" label-position="left">
              <el-form-item label="max_Doppler" v-show="form3.method==1&&form3.selectFile!=''">
                <el-input :disabled='form3.selectFile==""' v-model="form3.input.max_Doppler"></el-input>
              </el-form-item>
              <el-form-item label="amps" v-show="form3.method==1&&form3.selectFile!=''">
                <el-input :disabled='form3.selectFile==""' v-model="form3.input.amps"></el-input>
              </el-form-item>
              <el-form-item label="delays" v-show="form3.method==1&&form3.selectFile!=''">
                <el-input :disabled='form3.selectFile==""' v-model="form3.input.delays"></el-input>
              </el-form-item>
              <el-form-item label="channel_length" v-show="form3.method==1&&form3.selectFile!=''">
                <el-input :disabled='form3.selectFile==""' v-model="form3.input.channel_length"></el-input>
              </el-form-item>
              <el-form-item label="Td" v-show="form3.method==1&&form3.selectFile!=''">
                <el-input :disabled='form3.selectFile==""' v-model="form3.input.Td"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="8">
            <el-form ref="form" :model="form3" size="small" label-width="150px" label-position="left">
              <el-form-item label="aoa" v-show="form3.method==1&&form3.selectFile!=''">
                <el-input :disabled='form3.selectFile==""' v-model="form3.input.aoa"></el-input>
              </el-form-item>
              <el-form-item label="ricean_factor" v-show="form3.method==1&&form3.selectFile!=''">
                <el-input :disabled='form3.selectFile==""' v-model="form3.input.ricean_factor"></el-input>
              </el-form-item>
              <el-form-item label="path_loss_dB" v-show="form3.method==1&&form3.selectFile!=''">
                <el-input :disabled='form3.selectFile==""' v-model="form3.input.path_loss_dB"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-button  v-show="form3.method!=''" type="primary" @click="reset(3)" size="small" style="margin-top: 40px">重置</el-button>
      </div>
      <div class="page" id="page4" v-if="active==3">
        <el-row :gutter="24">
          <h1>设置日志打印级别</h1>
          <el-col :span="12">
            <el-form ref="form" :model="form4" size="small" label-width="150px" label-position="left">
              <el-form-item label="global_log_level">
                <el-select v-model="form4.global_log_level" placeholder="请选择" @change='formComplete=false'>
                  <el-option
                      v-for="item in form4.options"
                      :key="item"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="hw_log_level">
                <el-select v-model="form4.hw_log_level" placeholder="请选择" @change='formComplete=false'>
                  <el-option
                      v-for="item in form4.options"
                      :key="item"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="phy_log_level">
                <el-select v-model="form4.phy_log_level" placeholder="请选择" @change='formComplete=false'>
                  <el-option
                      v-for="item in form4.options"
                      :key="item"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="mac_log_level">
                <el-select v-model="form4.mac_log_level" placeholder="请选择" @change='formComplete=false'>
                  <el-option
                      v-for="item in form4.options"
                      :key="item"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="rlc_log_level">
                <el-select v-model="form4.rlc_log_level" placeholder="请选择" @change='formComplete=false'>
                  <el-option
                      v-for="item in form4.options"
                      :key="item"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12">
            <el-form ref="form" :model="form4" size="small" label-width="150px" label-position="left">
              <el-form-item label="pdcp_log_level">
                <el-select v-model="form4.pdcp_log_level" placeholder="请选择" @change='formComplete=false'>
                  <el-option
                      v-for="item in form4.options"
                      :key="item"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="rrc_log_level">
                <el-select v-model="form4.rrc_log_level" placeholder="请选择" @change='formComplete=false'>
                  <el-option
                      v-for="item in form4.options"
                      :key="item"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="ngap_log_level">
                <el-select v-model="form4.ngap_log_level" placeholder="请选择" @change='formComplete=false'>
                  <el-option
                      v-for="item in form4.options"
                      :key="item"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="flap_log_level">
                <el-select v-model="form4.flap_log_level" placeholder="请选择" @change='formComplete=false'>
                  <el-option
                      v-for="item in form4.options"
                      :key="item"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-button type="primary" @click="reset(4)" size="small">重置</el-button>
      </div>
    </div>
    <div class="footer">
      <el-button @click="changeActive(-1)" :disabled='active==0'>上一步</el-button>
      <el-button @click="changeActive(1)" :disabled='active==3'>下一步</el-button>
      <el-button style="margin-top: 5px;" v-if="formComplete" type="info" v-show="active==3">已保存配置</el-button>
      <el-button style="margin-top: 5px;" @click="submit" v-else type="primary" v-show="active==3">保存配置</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vueLC",
    data () {
      return {
        loading: true,
        active: 0,
        form1: {},
        form2: {},
        form3: {},
        form4: {},
        formComplete: true,
      }
    },
    created() {
      this.form1 = JSON.parse(JSON.stringify(this.$store.state.form1.form1));
      this.form2 = JSON.parse(JSON.stringify(this.$store.state.form1.form2));
      this.form3 = JSON.parse(JSON.stringify(this.$store.state.form1.form3));
      this.form4 = JSON.parse(JSON.stringify(this.$store.state.form1.form4));
      this.loading = false;
    },
    methods:{
      reset(index) {
        if(index==1) {
          this.form1 = JSON.parse(JSON.stringify(this.$store.state.form1.form1));
        } else if(index==2) {
          this.form2 = JSON.parse(JSON.stringify(this.$store.state.form1.form2));
        } else if(index==3) {
          this.form3 = JSON.parse(JSON.stringify(this.$store.state.form1.form3));
        } else if(index==4) {
          this.form4 = JSON.parse(JSON.stringify(this.$store.state.form1.form4));
        }
      },
      changeActive(flag) {
        if(this.active==0) {
          if(this.form1.input1.username=='') {
            this.$message.error('请选择gNB网络参数输入的用户名')
          } else if(this.form1.input1.password=='') {
            this.$message.error('请选择gNB网络参数输入的密码')
          } else if(this.form1.input1.ipaddress=='') {
            this.$message.error('请选择gNB网络参数输入的ip地址')
          } else if(this.form1.input1.port=='') {
            this.$message.error('请选择gNB网络参数输入的端口')
          } else if(this.form1.input2.username=='') {
            this.$message.error('请选择UE网络参数输入的用户名')
          } else if(this.form1.input2.password=='') {
            this.$message.error('请选择UE网络参数输入的密码')
          } else if(this.form1.input2.ipaddress=='') {
            this.$message.error('请选择UE网络参数输入的ip地址')
          } else if(this.form1.input2.port=='') {
            this.$message.error('请选择UE网络参数输入的端口')
          } else {
            this.active = this.active + flag;
            this.formComplete = false;
          }
        } else if(this.active==1) {
          if(this.form2.method=='') {
            this.$message.error('请选择配置方式')
          } else if(this.form2.method=='1'&&this.form2.selectFile=='') {
            this.$message.error('请选择文件')
          } else if(this.form2.method=='1'&&this.form2.input.serveraddr=='') {
            this.$message.error('请配置serveraddr')
          } else if(this.form2.method=='1'&&this.form2.input.serverport=='') {
            this.$message.error('请选择serverport')
          } else if(this.form2.method=='1'&&this.form2.input.option=='') {
            this.$message.error('请选择option')
          } else if(this.form2.method=='1'&&this.form2.input.modelname=='') {
            this.$message.error('请选择modelname')
          } else if(this.form2.method=='1'&&this.form2.input.IQfile=='') {
            this.$message.error('请选择IQfile')
          // } else if(this.form2.method=='2'&&this.form2.fileList.length==0) {
          //   this.$message.error('请选择文件')
          } else if(this.form2.method=='2'&&this.form2.fileName=='') {
            this.$message.error('请配置文件名称')
          } else {
            this.active = this.active + flag;
            this.formComplete = false;
          }
        } else if(this.active==2) {
          if(this.form3.method=='') {
            this.$message.error('请选择配置方式')
          } else if(this.form3.method=='1'&&this.form3.selectFile=='') {
            this.$message.error('请选择文件')
          } else if(this.form3.method=='1'&&this.form3.input.nb_tx=='') {
            this.$message.error('请配置'+'nb_tx')
          } else if(this.form3.method=='1'&&this.form3.input.nb_rx=='') {
            this.$message.error('请配置'+'nb_rx')
          } else if(this.form3.method=='1'&&this.form3.input.nb_taps=='') {
            this.$message.error('请配置'+'nb_taps')
          } else if(this.form3.method=='1'&&this.form3.input.channel_bandwidth=='') {
            this.$message.error('请配置'+'channel_bandwidth')
          } else if(this.form3.method=='1'&&this.form3.input.sampling_rate=='') {
            this.$message.error('请配置'+'sampling_rate')
          } else if(this.form3.method=='1'&&this.form3.input.max_Doppler=='') {
            this.$message.error('请配置'+'max_Doppler')
          } else if(this.form3.method=='1'&&this.form3.input.amps=='') {
            this.$message.error('请配置'+'amps')
          } else if(this.form3.method=='1'&&this.form3.input.delays=='') {
            this.$message.error('请配置'+'delays')
          } else if(this.form3.method=='1'&&this.form3.input.channel_length=='') {
            this.$message.error('请配置'+'channel_length')
          } else if(this.form3.method=='1'&&this.form3.input.aoa=='') {
            this.$message.error('请配置'+'aoa')
          } else if(this.form3.method=='1'&&this.form3.input.ricean_factor=='') {
            this.$message.error('请配置'+'ricean_factor')
          } else if(this.form3.method=='1'&&this.form3.input.path_loss_dB=='') {
            this.$message.error('请配置'+'path_loss_dB')
          // } else if(this.form3.method=='2'&&this.form3.fileList.length==0) {
          //   this.$message.error('请选择文件')
          } else if(this.form3.method=='2'&&this.form3.fileName=='') {
            this.$message.error('请配置文件名称')
          } else {
            this.active = this.active + flag;
            this.formComplete = false;
          }
        } else if(this.active==3) {
          this.active = this.active + flag;
          this.formComplete = false;
        }
      },
      // submitUpload() {
      //   this.$refs.upload.submit();
      // },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(this.form2.fileList);
      },
      submit() {
        this.$store.commit('setForm', {
          index: 1,
          forms: [this.form1,this.form2,this.form3,this.form4]
        })
        this.formComplete = true;
      }
    },
    beforeRouteLeave (to, from, next) {
      if(this.active!=3 || (this.active==3&&this.formComplete==false)) {
        if(to.name=='Showpage') {
          this.$message({
            showClose: true,
            message: '请完成所有配置并点击保存',
            type: 'error'
          });
          next(false)
        } else {
          next()
          // this.$confirm('当前页面数据还未保存，是否离开？', {
          //   type: 'warning'
          // }).then(res => {
          //   next()
          // }).catch(res => {
          //   next(false)
          // })
        }
      } else {
        next()
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 20px 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .container .header {
    height: 80px;
    width: 100%;
  }
  .container .content {
    position: relative;
    width: 100%;
    flex: 1;
  }
  .container .footer {
    height: 60px;
    width: 100%;
  }
</style>
