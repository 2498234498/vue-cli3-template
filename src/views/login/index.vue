<template>
  <div class="login-container">
    <el-row class="login-content">
      <el-col :xs="0" :sm="10" :md="12" :lg="14" :xl="14"></el-col>
      <el-col :xs="24" :sm="14" :md="12" :lg="10" :xl="10">
        <div class="project-title">首都机场物联网平台</div>
        <el-form class="login-form" ref="loginRef" :model="loginForm" :rules="loginRules" hide-required-asterisk>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
        </el-form>
        <el-button class="login-btn" type="primary" @click="login" uuid="1010">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { isBlank, isEmail } from '@/utils/validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup () {
    // 定义表单ref
    const loginRef = ref(null)
    // 定义响应性数据
    const loginForm = reactive({
      username: 'yh@test.com',
      password: '123456'
    })
    // 使用store
    const store = useStore()
    // 使用router
    const router = useRouter()

    // 用户验证
    const validate = (rule, value, callback) => {
      if (isBlank(value)) {
        callback(new Error(`${rule.name}不能为空!`))
      }
      if (!isEmail(value)) {
        callback(new Error(rule.msg))
      }
      callback()
    }

    // 登录验证
    const loginRules = {
      username: [{ name: '用户名', required: true, validator: validate, msg: '用户名不是电子邮件格式!', trigger: 'blur' }],
      password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
    }

    // 登录
    function login () {
      loginRef.value.validate(async valid => {
        if (!valid) return false
        await store.dispatch('user/login', loginForm)
        router.push('/')
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
  min-height: 200px;
  .login-content {
    height: 100%;
    .el-col {
      &:first-child {
        background: url('~@/assets/login_images/background.png') no-repeat;
        background-size: 100% 100%;
      }
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
    .login-form, .login-btn {
      width: calc(100% - 260px);
      margin-left: 130px;
    }
  }
}
</style>
