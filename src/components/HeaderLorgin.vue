<template>
  <div class="personal" v-if="userStore.ifUser()" @click="personalcard = !personalcard">
    个人中心
  </div>
  <div class="btnLogin" @click="gotologin" v-else>登录</div>
  <div class="personalcard" v-if="personalcard">
    <div class="personalprofile">
      <div class="namecard">名字:{{ userStore.userInfo.username }}</div>
      <div class="namecard">邮箱:{{ formdata.email }}</div>
      <div class="namecard">性别:{{ formdata.gendar }}</div>
      <div class="namecard">生日:{{ formdata.birthday }}</div>
      <div class="namecard">个人简介:{{ formdata.bio }}</div>
      <div class="setprofile namecard" @click="setprofileaction">编辑个人信息</div>
    </div>

    <div class="tuichu" @click="tuichu">退出</div>
  </div>

  <div class="setprofilecard" v-if="ifprofilecard">
    <SetProfile @close="ifprofilecard = false" />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { inject } from 'vue'
import BlogCard from '@/components/BlogCard.vue'
import SetProfile from '@/components/SetProfile.vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

const router = useRouter()
const route = useRoute()

const personalcard = ref(false)

const formdata = ref({
  email: '',
  gendar: '',
  birthday: '',
  bio: '',
})

onMounted(() => {
  axios
    .get('http://192.168.130.44:8081/blog-backend/get_profile.php', {
      params: { user_id: userStore.userInfo.user_id },
    })
    .then((res) => {
      formdata.value = res.data
    })
})

const gotologin = () => {
  if (route.path === '/login') {
    router.go(0) // 当前就在 /login，强制刷新
  } else {
    router.push('/login') // 否则正常跳转
  }
}
const tuichu = () => {
  userStore.clearUserInfo()

  personalcard.value = false
  router.push('/')
}

const ifprofilecard = ref(false)

const setprofileaction = () => {
  ifprofilecard.value = !ifprofilecard.value
}
</script>
<style scoped>
.btnLogin {
  display: inline-block;
  padding: 8px 12px;
  background-color: #3498db;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
  transition: all 0.1s ease;
  max-height: 100px;
  margin: 0 10px 0 0;
}
.btnLogin:hover {
  background-color: #fff;
  color: #2c3e50;
}
.personal {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #2c3e50;
  transition: all 0.1s ease;
  max-height: 100px;
  margin: 0 10px 0 0;
}
.personalcard {
  position: absolute;
  top: 100px;
  right: 10px;
  width: 180px;
  height: 300px;
  background-color: rgb(44, 62, 80);
  border-radius: 4px;
  z-index: 1000;
}
.namecard {
  color: #fff;
  padding: 10px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.tuichu {
  color: #fff;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease;
}
.tuichu:hover {
  background-color: #e74c3c;
  color: #fff;
}
.personalprofile {
  background-color: rgba(44, 62, 80, 0.9); /* 半透明背景 */
}
.setprofilecard {
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease;
  position: absolute;
  top: 100px;
  right: 600px;
  z-index: 900;
  padding: 10px;
}
.setprofile:hover {
  background-color: #3498db;
  color: #fff;
}
</style>
