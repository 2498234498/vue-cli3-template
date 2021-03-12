<template>
  <div class="error-container">
    <div class="error-content">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <img class="pic-error" :src="require('@/assets/error_images/404.png')" />
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="bullshit">
            <div class="bullshit-oops">{{ oops }}</div>
            <div class="bullshit-headline">{{ headline }}</div>
            <div class="bullshit-info">{{ info }}</div>
            <a class="bullshit-return-home" href="#/home">
              {{ jumpTime }}s&nbsp;{{ btn }}
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, onUnmounted, reactive, toRefs } from 'vue'
export default {
  name: '404',
  setup () {
    const bullshit = reactive({
      jumpTime: 5,
      oops: '抱歉!',
      headline: '当前页面不存在...',
      info: '请检查您输入的网址是否正确，或点击下面的按钮返回首页。',
      btn: '返回首页',
      timer: 0
    })
    // 获取当前实例
    const { ctx } = getCurrentInstance()
    const timeChange = () => {
      bullshit.timer = setInterval(() => {
        if (bullshit.jumpTime) {
          bullshit.jumpTime--
        } else {
          ctx.$router.push({ path: '/home' })
          clearInterval(bullshit.timer)
        }
      }, 1000)
    }
    // 组件挂载
    onMounted(() => {
      timeChange()
    })
    // 组件销毁
    onUnmounted(() => {
      clearInterval(bullshit.timer)
    })

    return {
      ...toRefs(bullshit)
    }
  }
}
</script>

<style lang='scss' scoped>
  .error-container {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    .pic-error {
      width: 120%;
    }
    .bullshit {
      position: relative;
      float: left;
      width: 300px;
      padding: 30px 0;
      overflow: hidden;

      &-oops {
        margin-bottom: 20px;
        font-size: 32px;
        font-weight: bold;
        line-height: 40px;
        color: #1890ff;
        opacity: 0;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }

      &-headline {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: bold;
        line-height: 24px;
        color: #222;
        opacity: 0;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
      }

      &-info {
        margin-bottom: 30px;
        font-size: 13px;
        line-height: 21px;
        color: rgba(0, 0, 0, 0.65);
        opacity: 0;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
      }

      &-return-home {
        display: block;
        float: left;
        width: 110px;
        height: 36px;
        font-size: 14px;
        line-height: 36px;
        color: #fff;
        text-align: center;
        cursor: pointer;
        background: #1890ff;
        border-radius: 100px;
        opacity: 0;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.3s;
        animation-fill-mode: forwards;
      }
    }
  }
</style>
