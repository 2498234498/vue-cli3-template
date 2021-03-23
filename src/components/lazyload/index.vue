<template>
  <div class="images-lazy">
    <img v-for="(img, i) in imgList" :ref="`img_${i}`" :key="i" :src="img.url" />
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, ref } from 'vue'
export default {
  setup () {
    const imgList = ref([
      { url: '', dataSrc: require('@/assets/error_images/404.png') },
      { url: '', dataSrc: require('@/assets/error_images/404.png') },
      { url: '', dataSrc: require('@/assets/error_images/404.png') },
      { url: '', dataSrc: require('@/assets/error_images/404.png') },
      { url: '', dataSrc: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg' }
    ])
    const { ctx } = getCurrentInstance()
    // 获取浏览器顶部的距离
    function getTop (e) {
      return e.offsetTop
    }
    function lazyload (imgList) {
      // 可视区域高度
      const innerHeight = window.innerHeight
      // 滚动区域高度
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      imgList.forEach((img, i) => {
        const imgDom = ctx.$refs[`img_${i}`]
        if (innerHeight + scrollTop > getTop(imgDom)) {
          imgList[i].url = img.dataSrc
        }
      })
    }
    onMounted(() => {
      lazyload(imgList.value)
      window.onscroll = () => {
        lazyload(imgList.value)
      }
    })
    return {
      imgList
    }
  }
}
</script>

<style lang="scss" scoped>
  .images-lazy {
    width: 300px;
    img {
      width: 300px;
      height: 300px;
      border: 1px solid red;
    }
  }
</style>
