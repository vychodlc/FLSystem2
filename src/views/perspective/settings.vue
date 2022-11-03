<template>
  <div class="container" v-loading="loading">
    <div class="content">
      <div class="page">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-row :gutter="24">
              <el-col :span="24">
                <el-form ref="form" :model="form" size="small" label-width="100px">
                  <h1>UE时延配置</h1>
                  <!-- <el-form-item style="font-weight:bolder">UE时延配置</el-form-item> -->
                  <!-- <el-form-item><el-checkbox  @change="formComplete=false" v-model="form.select1" style="font-weight:bolder">UE时延配置</el-checkbox></el-form-item> -->
                </el-form>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="6">
                <el-form ref="form" :model="form" size="small" label-width="100px">
                  <el-form-item><el-checkbox  @change="formComplete=false" v-model="form.input1.pbch.select">pbch</el-checkbox></el-form-item>
                </el-form>
              </el-col>
              <el-col :span="18">
                <el-form ref="form" :model="form" size="small" label-width="100px" v-if="form.input1.pbch.select&&form.input1.pbch.hasChild">
                  <el-form-item label="">
                    <el-select  @change="formComplete=false" v-model="form.input1.pbch.children" multiple placeholder="请选择" collapse-tags style="margin-left: 20px;">
                      <el-option
                        v-for="item in form.checkbox.UE.pbch"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="6">
                <el-form ref="form" :model="form" size="small" label-width="100px">
                  <el-form-item><el-checkbox  @change="formComplete=false" v-model="form.input1.pdcch.select">pdcch</el-checkbox></el-form-item>
                </el-form>
              </el-col>
              <el-col :span="18">
                <el-form ref="form" :model="form" size="small" label-width="100px" v-if="form.input1.pdcch.select&&form.input1.pdcch.hasChild">
                  <el-form-item label="">
                    <el-select  @change="formComplete=false" v-model="form.input1.pdcch.children" multiple placeholder="请选择" collapse-tags style="margin-left: 20px;">
                      <el-option
                        v-for="item in form.checkbox.UE.pdcch"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="6">
                <el-form ref="form" :model="form" size="small" label-width="100px">
                  <el-form-item><el-checkbox  @change="formComplete=false" v-model="form.input1.pdsch.select">pdsch</el-checkbox></el-form-item>
                </el-form>
              </el-col>
              <el-col :span="18">
                <el-form ref="form" :model="form" size="small" label-width="100px" v-if="form.input1.pdsch.select&&form.input1.pdsch.hasChild">
                  <el-form-item label="">
                    <el-select  @change="formComplete=false" v-model="form.input1.pdsch.children" multiple placeholder="请选择" collapse-tags style="margin-left: 20px;">
                      <el-option
                        v-for="item in form.checkbox.UE.pdsch"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="6">
                <el-form ref="form" :model="form" size="small" label-width="100px">
                  <el-form-item><el-checkbox  @change="formComplete=false" v-model="form.input1.L1.select">L1</el-checkbox></el-form-item>
                </el-form>
              </el-col>
              <el-col :span="18">
                <el-form ref="form" :model="form" size="small" label-width="100px" v-if="form.input1.L1.select&&form.input1.L1.hasChild">
                  <el-form-item label="">
                    <el-select  @change="formComplete=false" v-model="form.input1.L1.children" multiple placeholder="请选择" collapse-tags style="margin-left: 20px;">
                      <el-option
                        v-for="item in form.checkbox.UE.L1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="6">
                <el-form ref="form" :model="form" size="small" label-width="100px">
                  <el-form-item><el-checkbox  @change="formComplete=false" v-model="form.input1.process.select">process RX</el-checkbox></el-form-item>
                </el-form>
              </el-col>
              <el-col :span="18">
                <el-form ref="form" :model="form" size="small" label-width="100px" v-if="form.input1.process.select&&form.input1.process.hasChild">
                  <el-form-item label="">
                    <el-select  @change="formComplete=false" v-model="form.input1.process.children" multiple placeholder="请选择" collapse-tags style="margin-left: 20px;">
                      <el-option
                        v-for="item in form.checkbox.UE.process"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row :gutter="24">
              <el-col :span="24">
                <el-form ref="form" :model="form" size="small" label-width="100px">
                  <h1>gNB时延配置</h1>
                  <!-- <el-form-item style="font-weight:bolder">gNB时延配置</el-form-item> -->
                  <!-- <el-form-item><el-checkbox  @change="formComplete=false" v-model="form.select2" style="font-weight:bolder">gNB时延配置</el-checkbox></el-form-item> -->
                </el-form>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="6">
                <el-form ref="form" :model="form" size="small" label-width="100px">
                  <el-form-item><el-checkbox  @change="formComplete=false" v-model="form.input2.pbch.select">pbch</el-checkbox></el-form-item>
                </el-form>
              </el-col>
              <el-col :span="18">
                <el-form ref="form" :model="form" size="small" label-width="100px" v-if="form.input2.pbch.select&&form.input2.pbch.hasChild">
                  <el-form-item label="">
                    <el-select  @change="formComplete=false" v-model="form.input2.pbch.children" multiple placeholder="请选择" collapse-tags style="margin-left: 20px;">
                      <el-option
                        v-for="item in form.checkbox.gNB.pbch"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="6">
                <el-form ref="form" :model="form" size="small" label-width="100px">
                  <el-form-item><el-checkbox  @change="formComplete=false" v-model="form.input2.pdcch.select">pdcch</el-checkbox></el-form-item>
                </el-form>
              </el-col>
              <el-col :span="18">
                <el-form ref="form" :model="form" size="small" label-width="100px" v-if="form.input2.pdcch.select&&form.input2.pdcch.hasChild">
                  <el-form-item label="">
                    <el-select  @change="formComplete=false" v-model="form.input2.pdcch.children" multiple placeholder="请选择" collapse-tags style="margin-left: 20px;">
                      <el-option
                        v-for="item in form.checkbox.gNB.pdcch"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="6">
                <el-form ref="form" :model="form" size="small" label-width="100px">
                  <el-form-item><el-checkbox  @change="formComplete=false" v-model="form.input2.L2.select">L2</el-checkbox></el-form-item>
                </el-form>
              </el-col>
              <el-col :span="18">
                <el-form ref="form" :model="form" size="small" label-width="100px" v-if="form.input2.L2.select&&form.input2.L2.hasChild">
                  <el-form-item label="">
                    <el-select  @change="formComplete=false" v-model="form.input2.L2.children" multiple placeholder="请选择" collapse-tags style="margin-left: 20px;">
                      <el-option
                        v-for="item in form.checkbox.gNB.L2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="6">
                <el-form ref="form" :model="form" size="small" label-width="100px">
                  <el-form-item><el-checkbox  @change="formComplete=false" v-model="form.input2.pdsch.select">pdsch</el-checkbox></el-form-item>
                </el-form>
              </el-col>
              <el-col :span="18">
                <el-form ref="form" :model="form" size="small" label-width="100px" v-if="form.input2.pdsch.select&&form.input2.pdsch.hasChild">
                  <el-form-item label="">
                    <el-select  @change="formComplete=false" v-model="form.input2.pdsch.children" multiple placeholder="请选择" collapse-tags style="margin-left: 20px;">
                      <el-option
                        v-for="item in form.checkbox.gNB.pdsch"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="6">
                <el-form ref="form" :model="form" size="small" label-width="100px">
                  <el-form-item><el-checkbox  @change="formComplete=false" v-model="form.input2.L1.select">L1</el-checkbox></el-form-item>
                </el-form>
              </el-col>
              <el-col :span="18">
                <el-form ref="form" :model="form" size="small" label-width="100px" v-if="form.input2.L1.select&&form.input2.L1.hasChild">
                  <el-form-item label="">
                    <el-select  @change="formComplete=false" v-model="form.input2.L1.children" multiple placeholder="请选择" collapse-tags style="margin-left: 20px;">
                      <el-option
                        v-for="item in form.checkbox.gNB.L1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="6">
                <el-form ref="form" :model="form" size="small" label-width="100px">
                  <el-form-item><el-checkbox  @change="formComplete=false" v-model="form.input2.process.select">process TX</el-checkbox></el-form-item>
                </el-form>
              </el-col>
              <el-col :span="18">
                <el-form ref="form" :model="form" size="small" label-width="100px" v-if="form.input2.process.select&&form.input2.process.hasChild">
                  <el-form-item label="">
                    <el-select  @change="formComplete=false" v-model="form.input2.process.children" multiple placeholder="请选择" collapse-tags style="margin-left: 20px;">
                      <el-option
                        v-for="item in form.checkbox.gNB.process"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
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
      this.form = JSON.parse(JSON.stringify(this.$store.state.form3));
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
        this.form = JSON.parse(JSON.stringify(this.$store.state.form3));
      },
      checkForm(flag) {
        if(this.form.select1==false&&this.form.select2==false) {
          if(flag==0)this.$message.error('请至少选择一个时延配置')
          return false
        }
        if(this.form.select1==true&&(
            (this.form.input1.pbch.select&&this.form.input1.pbch.hasChild&&this.form.input1.pbch.children.length==0)
            ||(this.form.input1.pdcch.select&&this.form.input1.pdcch.hasChild&&this.form.input1.pdcch.children.length==0)
            ||(this.form.input1.pdsch.select&&this.form.input1.pdsch.hasChild&&this.form.input1.pdsch.children.length==0)
            ||(this.form.input1.L1.select&&this.form.input1.L1.hasChild&&this.form.input1.L1.children.length==0)
            ||(this.form.input1.process.select&&this.form.input1.process.hasChild&&this.form.input1.process.children.length==0)
            ||(
              this.form.input1.pbch.select==false
              &&this.form.input1.pdcch.select==false
              &&this.form.input1.pdsch.select==false
              &&this.form.input1.L1.select==false
              &&this.form.input1.process.select==false
            )
          )
        ) {
          if(flag==0)this.$message.error('请完成UE时延配置')
          return false
        }
        if(
          this.form.select2==true
          &&(
            (this.form.input2.pbch.select&&this.form.input2.pbch.hasChild&&this.form.input2.pbch.children.length==0)
            ||(this.form.input2.pdcch.select&&this.form.input2.pdcch.hasChild&&this.form.input2.pdcch.children.length==0)
            ||(this.form.input2.pdsch.select&&this.form.input2.pdsch.hasChild&&this.form.input2.pdsch.children.length==0)
            ||(this.form.input2.L1.select&&this.form.input2.L1.hasChild&&this.form.input2.L1.children.length==0)
            ||(this.form.input2.L2.select&&this.form.input2.L2.hasChild&&this.form.input2.L2.children.length==0)
            ||(this.form.input2.process.select&&this.form.input2.process.hasChild&&this.form.input2.process.children.length==0)
            ||(
              this.form.input2.pbch.select==false
              &&this.form.input2.pdcch.select==false
              &&this.form.input2.pdsch.select==false
              &&this.form.input2.L1.select==false
              &&this.form.input2.L2.select==false
              &&this.form.input2.process.select==false
            )
          )
        ) {
          if(flag==0)this.$message.error('请完成gNB时延配置')
          return false
        }

        return true
      },
      submit() {
        if(this.checkForm(0)) {
          this.$store.commit('setForm', {
            index: 3,
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
    padding: 10px 80px;
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
