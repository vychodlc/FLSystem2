<template>
  <div class="container" v-loading="loading">
    <div class="content">
      <div class="page">
        <el-row :gutter="24">
          <el-col :span="12">
            <h1>mcs编码表配置</h1>
            <el-form ref="form" :model="form" size="small" label-width="150px">
              <el-form-item label="状态" style="font-weight: bolder">
                <el-switch
                  @change="formComplete=false" 
                  v-model="form.select1"
                  active-color="#13ce66"
                  inactive-color="#eaecf0">
                </el-switch>
              </el-form-item>
              <el-form-item label="mcs编码表" style="font-weight: bolder" v-show="form.select1">
                <el-checkbox @change="formComplete=false" v-model="form.checkbox1[0]">64 QAM 表</el-checkbox>
                <el-checkbox @change="formComplete=false" v-model="form.checkbox1[1]">256 QAM 表</el-checkbox>
                <el-checkbox @change="formComplete=false" v-model="form.checkbox1[2]">低频谱效率 64 QAM 表</el-checkbox>
              </el-form-item>
              <el-form-item label="参数配置" style="font-weight: bolder" v-show="form.select1">
              </el-form-item>
              <el-form-item label="采样数据" v-show="form.select1">
                <el-input @change="formComplete=false" v-model="form.sampling"></el-input>
              </el-form-item>
              <el-form-item label="起始SNR值" v-show="form.select1">
                <el-input @change="formComplete=false" v-model="form.SNR"></el-input>
              </el-form-item>
              <el-form-item label="SNR变化间隔" v-show="form.select1">
                <el-input @change="formComplete=false" v-model="form.interval"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12">
            <h1>编码可靠性配置</h1>
            <el-form ref="form" :model="form" size="small" label-width="150px">
              <el-form-item label="状态" style="font-weight: bolder">
                <el-switch
                  @change="formComplete=false" 
                  v-model="form.select2"
                  active-color="#13ce66"
                  inactive-color="#eaecf0">
                </el-switch>
              </el-form-item>
              <el-form-item label="编码模式选择" style="font-weight: bolder" v-show="form.select2">
                <el-checkbox @change="formComplete=false" v-model="form.checkbox2[0]">SISO【无编码】</el-checkbox>
                <el-checkbox @change="formComplete=false" v-model="form.checkbox2[1]">2×1 Alamouti编码</el-checkbox>
                <el-checkbox @change="formComplete=false" v-model="form.checkbox2[2]">3×1 STBC编码</el-checkbox>
                <el-checkbox @change="formComplete=false" v-model="form.checkbox2[3]">4×1 STBC编码</el-checkbox>
              </el-form-item>
              <el-form-item label="控制参数设置" style="font-weight: bolder" v-show="form.select2">
              </el-form-item>
              <el-form-item label="发射功率" :inline='true' v-show="form.select2">
                <el-row :gutter="24">
                  <el-col :span="10"><el-input @change="formComplete=false" v-model="form.powerRange[0]"><i slot="suffix">dBm</i></el-input></el-col>
                  <el-col :span="2">—</el-col>
                  <el-col :span="10"><el-input @change="formComplete=false" v-model="form.powerRange[1]"><i slot="suffix">dBm</i></el-input></el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="信道带宽" v-show="form.select2">
                <el-input @change="formComplete=false" v-model="form.bandwidth"><i slot="suffix">kHz</i></el-input>
              </el-form-item>
              <el-form-item label="基站-用户距离" v-show="form.select2">
                <el-input @change="formComplete=false" v-model="form.distance"><i slot="suffix">m</i></el-input>
              </el-form-item>
              <el-form-item label="载波频率" v-show="form.select2">
                <el-input @change="formComplete=false" v-model="form.freq"><i slot="suffix">GHz</i></el-input>
              </el-form-item>
              <el-form-item label="仿真参数设置" style="font-weight: bolder" v-show="form.select2">
              </el-form-item>
              <el-form-item label="传输符号量" v-show="form.select2">
                <el-input @change="formComplete=false" v-model="form.symbolCount"><i slot="suffix">个</i></el-input>
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
        active: 0,
        form: {},
        formComplete: true
      }
    },
    created() {
      this.form = JSON.parse(JSON.stringify(this.$store.state.form4.form2));
      this.loading = false;
    },
    beforeRouteLeave (to, from, next) {
      if(to.name=='Showpage2') {
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
        this.form = JSON.parse(JSON.stringify(this.$store.state.form4.form2));
      },
      checkForm(flag) {
        if(this.form.select1==false && this.form.select2==false) {
          if(flag==0)this.$message.error('请至少选择一个优化方式')
          return false
        }
        if(
          this.form.select1&&
          ((this.form.checkbox1.indexOf(true)==-1)
          ||this.form.sampling==''||this.form.SNR==''||this.form.interval=='')
        ) {
          if(flag==0)this.$message.error('请完成mcs编码表的配置')
          return false
        }
        if(
          this.form.select2&&
          ((this.form.checkbox2.indexOf(true)==-1)
          ||this.form.powerRange[0]==''||this.form.powerRange[1]==''
          ||this.form.distance==''||this.form.model==''
          ||this.form.bandwidth==''||this.form.freq==''
          ||this.form.symbolCount=='')
        ) {
          if(flag==0)this.$message.error('请完成编码可靠性的配置')
          return false
        }
        return true
      },
      submit() {
        if(this.checkForm(0)) {
          this.$store.commit('setForm', {
            index: 5,
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
