<template>
  <div class="container" v-loading="loading">
    <div class="content">
      <div class="page">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form" size="small" label-width="150px" label-position="left">
              <el-form-item label="选择信道模型" style="font-weight: bolder">
                <el-select v-model="form.selectFile" placeholder="请选择" @change="formComplete=false">
                  <el-option
                    v-for="item in form.files"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form ref="form" :model="form" size="small" label-width="150px" label-position="left">
              <el-form-item label="InF信道参数" style="font-weight: bolder"></el-form-item>
              <el-form-item label="配置方式">
                <el-radio v-model="form.method" label="1" @change="formComplete=false">设置模型参数</el-radio>
                <el-radio v-model="form.method" label="2" @change="formComplete=false">选择参数配置文件</el-radio>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form ref="form" :model="form" size="small" label-width="150px" label-position="left">
              <el-form-item label="配置文件名称" v-show="form.method==2" @change="formComplete=false">
                <el-input v-model="form.fileName"></el-input>
              </el-form-item>
              <el-form-item label="文件导入" v-show="form.method==2">
                <el-upload
                  class="upload-demo"
                  ref="upload2"
                  action="/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="form.fileList"
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
            <el-form ref="form" :model="form" size="small" label-width="150px" label-position="left">
              <el-form-item label="nb_tx" v-show="form.method==1">
                <el-input :disabled='form.selectFile==""' v-model="form.input.nb_tx" @change="formComplete=false"></el-input>
              </el-form-item>
              <el-form-item label="nb_rx" v-show="form.method==1">
                <el-input :disabled='form.selectFile==""' v-model="form.input.nb_rx" @change="formComplete=false"></el-input>
              </el-form-item>
              <el-form-item label="nb_taps" v-show="form.method==1">
                <el-input :disabled='form.selectFile==""' v-model="form.input.nb_taps" @change="formComplete=false"></el-input>
              </el-form-item>
              <el-form-item label="channel_bandwidth" v-show="form.method==1">
                <el-input :disabled='form.selectFile==""' v-model="form.input.channel_bandwidth" @change="formComplete=false"></el-input>
              </el-form-item>
              <el-form-item label="sampling_rate" v-show="form.method==1">
                <el-input :disabled='form.selectFile==""' v-model="form.input.sampling_rate" @change="formComplete=false"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="8">
            <el-form ref="form" :model="form" size="small" label-width="150px" label-position="left">
              <el-form-item label="max_Doppler" v-show="form.method==1">
                <el-input :disabled='form.selectFile==""' v-model="form.input.max_Doppler" @change="formComplete=false"></el-input>
              </el-form-item>
              <el-form-item label="amps" v-show="form.method==1">
                <el-input :disabled='form.selectFile==""' v-model="form.input.amps" @change="formComplete=false"></el-input>
              </el-form-item>
              <el-form-item label="delays" v-show="form.method==1">
                <el-input :disabled='form.selectFile==""' v-model="form.input.delays" @change="formComplete=false"></el-input>
              </el-form-item>
              <el-form-item label="channel_length" v-show="form.method==1">
                <el-input :disabled='form.selectFile==""' v-model="form.input.channel_length" @change="formComplete=false"></el-input>
              </el-form-item>
              <el-form-item label="Td" v-show="form.method==1">
                <el-input :disabled='form.selectFile==""' v-model="form.input.Td" @change="formComplete=false"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="8">
            <el-form ref="form" :model="form" size="small" label-width="150px" label-position="left">
              <el-form-item label="aoa" v-show="form.method==1">
                <el-input :disabled='form.selectFile==""' v-model="form.input.aoa" @change="formComplete=false"></el-input>
              </el-form-item>
              <el-form-item label="ricean_factor" v-show="form.method==1">
                <el-input :disabled='form.selectFile==""' v-model="form.input.ricean_factor" @change="formComplete=false"></el-input>
              </el-form-item>
              <el-form-item label="path_loss_dB" v-show="form.method==1">
                <el-input :disabled='form.selectFile==""' v-model="form.input.path_loss_dB" @change="formComplete=false"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="footer">
      <el-button style="margin-top: 5px;" type="primary" @click="reset">重置</el-button>
      <el-button style="margin-top: 5px;" v-if="formComplete" type="info">已保存配置</el-button>
      <el-button style="margin-top: 5px;" @click="submit" v-else type="primary">保存配置</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vueLC",
    data () {
      return {
        loading: false,
        form: {},
        formComplete: true
      }
    },
    created() {
      this.form = JSON.parse(JSON.stringify(this.$store.state.form2));
      this.loading = false;
    },
    beforeRouteLeave (to, from, next) {
      if(to.name=='Showpage') {
        if(this.checkForm(1)==false||this.formComplete==false) {
          this.$message({
            showClose: true,
            message: '请完成所有配置并点击保存',
            type: 'error'
          });
          next(false)
        } else {
          next()
        }
      } else {
        next()
      }
    },
    methods:{
      reset() {
        this.form = JSON.parse(JSON.stringify(this.$store.state.form2));
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      checkForm(flag) {
        if(this.form.method=='1'&&this.form.input.nb_tx=='') {
          if(flag==0)this.$message.error('请配置'+'nb_tx')
          return false
        } else if(this.form.method=='1'&&this.form.input.nb_rx=='') {
          if(flag==0)this.$message.error('请配置'+'nb_rx')
          return false
        } else if(this.form.method=='1'&&this.form.input.nb_taps=='') {
          if(flag==0)this.$message.error('请配置'+'nb_taps')
          return false
        } else if(this.form.method=='1'&&this.form.input.channel_bandwidth=='') {
          if(flag==0)this.$message.error('请配置'+'channel_bandwidth')
          return false
        } else if(this.form.method=='1'&&this.form.input.sampling_rate=='') {
          if(flag==0)this.$message.error('请配置'+'sampling_rate')
          return false
        } else if(this.form.method=='1'&&this.form.input.max_Doppler=='') {
          if(flag==0)this.$message.error('请配置'+'max_Doppler')
          return false
        } else if(this.form.method=='1'&&this.form.input.amps=='') {
          if(flag==0)this.$message.error('请配置'+'amps')
          return false
        } else if(this.form.method=='1'&&this.form.input.delays=='') {
          if(flag==0)this.$message.error('请配置'+'delays')
          return false
        } else if(this.form.method=='1'&&this.form.input.channel_length=='') {
          if(flag==0)this.$message.error('请配置'+'channel_length')
          return false
        } else if(this.form.method=='1'&&this.form.input.Td=='') {
          if(flag==0)this.$message.error('请配置'+'Td')
          return false
        } else if(this.form.method=='1'&&this.form.input.aoa=='') {
          if(flag==0)this.$message.error('请配置'+'aoa')
          return false
        } else if(this.form.method=='1'&&this.form.input.ricean_factor=='') {
          if(flag==0)this.$message.error('请配置'+'ricean_factor')
          return false
        } else if(this.form.method=='1'&&this.form.input.path_loss_dB=='') {
          if(flag==0)this.$message.error('请配置'+'path_loss_dB')
          return false
        // } else if(this.form.method=='2'&&this.form3.fileList.length==0) {
        //   if(flag==0)this.$message.error('请选择文件')
        // return false
        } else if(this.form.method=='2'&&this.form.fileName=='') {
          if(flag==0)this.$message.error('请配置文件名称')
          return false
        } else {
          return true
        }
      },
      submit() {
        if(this.checkForm(0)) {
          this.$store.commit('setForm', {
            index: 2,
            forms: [this.form]
          })
          this.formComplete = true
        }
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
