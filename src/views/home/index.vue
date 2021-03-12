<template>
  <div>home</div>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
  name: 'Home',
  setup () {
    const { ctx } = getCurrentInstance()
    console.log(ctx)
  }
}
</script>

<style lang='scss' scoped>
</style>
