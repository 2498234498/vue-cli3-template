<template>
  <router-view />
</template>

<script>
import { computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  setup () {
    // 使用store
    const store = useStore()
    // 获取用户信息
    const userInfo = computed(() => store.getters.userInfo)
    // 更新用户信息
    async function updateUserInfo () {
      const result = await getUserInfo()
      store.commit('user/setUserInfo', result.data)
    }
    // 监听用户信息是否为空
    watchEffect(() => {
      if (!userInfo.value) {
        updateUserInfo()
      }
    })
  }
}
</script>
