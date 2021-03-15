<template>
  <div>home</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Home',
  setup () {
    const store = useStore()
    const userInfo = computed(() => store.getters.userInfo)
    // console.table(userInfo.value)
    return {
      userInfo
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
