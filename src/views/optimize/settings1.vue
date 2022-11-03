<template>
  <div class="container" v-loading="loading">
    <div class="content">
      <div class="page">
        <el-row :gutter="24">
          <el-col :span="10">
            <el-form ref="form" :model="form" size="small" label-width="100px">
              <!-- <el-form-item label="minislot配置" style="font-weight:bolder"></el-form-item> -->
              <h1>minislot配置</h1>
              <el-form-item label="选择">
                <el-checkbox v-model="form.checkbox1[0]" @change="formComplete=false">基于微时隙配置</el-checkbox>
                <el-checkbox v-model="form.checkbox1[1]" @change="formComplete=false">基于时隙配置</el-checkbox>
              </el-form-item>
              <el-form-item label="k0">
                <el-input @change="formComplete=false" v-model="form.k0"></el-input>
              </el-form-item>
              <el-form-item label="k2">
                <el-input @change="formComplete=false" v-model="form.k2"></el-input>
              </el-form-item>
              <el-form-item label="typeA">
                <el-input @change="formComplete=false" v-model="form.typeA"></el-input>
              </el-form-item>
              <el-form-item label="typeB">
                <el-input @change="formComplete=false" v-model="form.typeB"></el-input>
              </el-form-item>
              <el-form-item label="SLIV">
                <el-input @change="formComplete=false" v-model="form.SLIV"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="10" :offset="2">
            <el-form ref="form" :model="form" size="small" label-width="150px">
              <!-- <el-form-item label="子载波配置" style="font-weight:bolder"></el-form-item> -->
              
              <el-row :gutter="24">
                <h1>子载波配置</h1>
                <el-form-item label="选择">
                  <el-checkbox v-model="form.checkbox2[0]" @change="formComplete=false">30kHz</el-checkbox>
                  <el-checkbox v-model="form.checkbox2[1]" @change="formComplete=false">120kHz</el-checkbox>
                </el-form-item>
              </el-row>
              
              <el-row :gutter="24">
                <h1>时隙上下比配置</h1>
                <!-- <el-form-item label="时隙上下比配置" style="font-weight: bolder"></el-form-item> -->
                <el-form-item label="nrofDownlinkSlots">
                  <el-input @change="formComplete=false" v-model="form.nrofDownlinkSlots"></el-input>
                </el-form-item>
                <el-form-item label="nrofDownlinkSymbols">
                  <el-input @change="formComplete=false" v-model="form.nrofDownlinkSymbols"></el-input>
                </el-form-item>
                <el-form-item label="nrofUplinkSlots">
                  <el-input @change="formComplete=false" v-model="form.nrofUplinkSlots"></el-input>
                </el-form-item>
                <el-form-item label="nrofUplinkSymbols">
                  <el-input @change="formComplete=false" v-model="form.nrofUplinkSymbols"></el-input>
                </el-form-item>
              </el-row>
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
      this.form = JSON.parse(JSON.stringify(this.$store.state.form4.form1));
      this.loading = false;
    },
    beforeRouteLeave (to, from, next) {
      if(to.name=='Showpage1') {
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
        this.form = JSON.parse(JSON.stringify(this.$store.state.form4.form1));
      },
      checkForm(flag) {
        if(
          (this.form.checkbox1[0]==false&&this.form.checkbox1[1]==false)
          ||this.form.k0==''||this.form.k2==''||this.form.typeA==''||this.form.typeB==''||this.form.SLIV==''
        ) {
          if(flag==0)this.$message.error('请完成minislot的配置')
          return false
        }
        if(
          (this.form.checkbox2[0]==false&&this.form.checkbox2[1]==false)
          ||this.form.nrofDownlinkSlots==''||this.form.nrofDownlinkSymbols==''||this.form.nrofUplinkSlots==''||this.form.nrofUplinkSymbols==''||this.form.SLIV==''
        ) {
          if(flag==0)this.$message.error('请完成子载波的配置')
          return false
        }
        return true
      },
      submit() {
        if(this.checkForm(0)) {
          this.$store.commit('setForm', {
            index: 4,
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
