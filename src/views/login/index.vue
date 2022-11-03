<template>
  <div class="login-container" v-loading="loading">
    <el-form v-if="isLogin" ref="loginForm" :model="loginForm" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item prop="email">
        <span class="svg-container">
          <!-- <svg-icon icon-class="user" /> -->
          <i class="el-icon-user-solid"></i>
        </span>
        <el-input
          ref="email"
          v-model="loginForm.email"
          placeholder="Email"
          name="email"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <!-- <svg-icon icon-class="password" /> -->
          <i class="el-icon-user-solid"></i>
        </span>
        <el-input
          ref="password"
          v-model="loginForm.password"
          type="password"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>

      <!-- <el-button 
      :disabled='loginForm.email==""||loginForm.password==""'
       :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button> -->

      <el-button 
       :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>

      <div class="tips">
        <span>没有账号，前往<span class="link" @click="changeForm(0)">注册</span></span>
      </div>

    </el-form>

    
    <el-form v-else ref="registerForm" :model="registerForm" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">Register Form</h3>
      </div>

      <el-form-item prop="email">
        <span class="svg-container">
          <!-- <svg-icon icon-class="user" /> -->
          <i class="el-icon-user-solid"></i>
        </span>
        <el-input
          ref="email"
          v-model="registerForm.email"
          placeholder="Email"
          name="email"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="nickname">
        <span class="svg-container">
          <i class="el-icon-user-solid"></i>
        </span>
        <el-input
          ref="nickname"
          v-model="registerForm.nickname"
          placeholder="Nickname"
          name="nickname"
          type='text'
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-user-solid"></i>
        </span>
        <el-input
          ref="password"
          v-model="registerForm.password"
          placeholder="Password"
          name="password"
          tabindex="2"
          type='password'
          auto-complete="on"
          @keyup.enter.native="handleRegister"
        />
      </el-form-item>

      <el-button :loading="loading"
      type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleRegister">Register</el-button>

      <div class="tips">
        <span>已有账号，前往<span class="link" @click="changeForm(1)">登录</span></span>
      </div>

    </el-form>
  </div>
</template>

<script>
export default {
  name: "LoginVue",
  data () {
    return {
      isLogin: true,
      loading: false,
      loginForm: {
        email: '',
        password: '',
      },
      registerForm: {
        email: '',
        nickname: '',
        password: '',
      },
      flag: new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]"),
      passwordType: 'password',
      redirect: undefined
   }
  },
  created() {
  },
  methods: {
    handleLogin() {
      this.$router.replace('/home')
    }
  }
}
</script>

<style>
  .login-container .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
  }
  .login-container .el-input input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #fff;
    height: 47px;
    caret-color: #fff;
  }
  .login-container .el-input input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #fff inset !important;
    -webkit-text-fill-color: #fff !important;
  }

  .login-container .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
</style>

<style scoped>
  .login-container {
    width: 100vw;
    min-height: 100%;
    background-color: #2d3a4b;
    overflow: hidden;
  }
  .login-container .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .login-container .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
  }
  .tips .link {
    text-decoration: underline;
    margin-left: 5px;
    font-weight: bold;
    cursor: pointer;
  }
  /* .tips span:nth-child(1) {
    margin-right: 16px;
  } */
  .login-container .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .login-container .title-container .title {
    font-size: 26px;
    color: #eee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .login-container .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #889aa4;
    cursor: pointer;
    user-select: none;
  }
</style>