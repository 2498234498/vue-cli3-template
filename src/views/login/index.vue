<template>
  <div class="login-container">
    <el-row class="login-content">
      <el-col :xs="0" :sm="10" :md="12" :lg="14" :xl="14">
        <img class="login-bg" :src="require('@/assets/login_images/background.png')">
      </el-col>
      <el-col :xs="24" :sm="14" :md="12" :lg="10" :xl="10">
        <div class="project-title">首都机场物联网平台</div>
        <el-form ref="loginRef" :model="loginForm" :rules="loginRules" hide-required-asterisk>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="login">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance } from 'vue'
import { isBlank, isEmail } from '@/utils/validate'
export default {
  name: 'Login',
  setup () {
    const { ctx } = getCurrentInstance()
    const loginRef = ref(null)
    const loginForm = reactive({
      username: 'yh@test.com',
      password: '123456'
    })
    const validateUsername = (rule, value, callback) => {
      if (isBlank(value)) {
        callback(new Error('用户名不能为空!'))
      }
      if (!isEmail(value)) {
        callback(new Error('用户名不是电子邮件格式!'))
      }
      callback()
    }
    const loginRules = {
      username: [{ required: true, validator: validateUsername, trigger: 'blur' }],
      password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
    }
    function login () {
      loginRef.value.validate(valid => {
        if (!valid) return false
        ctx.$store.dispatch('user/login', loginForm)
      })
    }
    return {
      loginRef,
      loginForm,
      loginRules,
      login
    }
  }
}
</script>

<style lang='scss' scoped>
.login-container {
  height: 100%;
  .login-content {
    height: 100%;
    .login-bg {
      width: 100%;
      height: 100%;
    }
    .project-title {
      color: #000;
      font-size: 48px;
      font-family: PingFangSC-Medium;
      font-weight: bolder;
      line-height: 67px;
      margin: 241px 0 98px 0;
      text-align: center;
    }
  }
}
</style>
