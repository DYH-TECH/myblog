<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import router from './router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
onMounted(() => {
  if (!userStore.userInfo) {
    userStore.loadUserInfo()
    console.log('从 localStorage 恢复登录信息')
  }
})
</script>

<template>
  <router-view key="$route.fullPath" />
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
}
</style>
