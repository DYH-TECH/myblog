<template>
  <div class="setprofilebox">
    <input v-model="profile.nickname" placeholder="昵称" />
    <input v-model="profile.email" placeholder="邮箱" />
    <select v-model="profile.gender">
      <option>男</option>
      <option>女</option>
      <option>保密</option>
    </select>
    <input v-model="profile.birthday" type="date" placeholder="生日" />
    <textarea v-model="profile.bio" placeholder="个人简介"></textarea>

    <button @click="saveProfile">保存</button>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const profile = ref({})

onMounted(() => {
  axios
    .get('http://192.168.130.44:8081/blog-backend/get_profile.php', {
      params: { user_id: userStore.userInfo.user_id },
    })
    .then((res) => {
      profile.value = res.data
    })
})

const saveProfile = () => {
  axios
    .post('http://192.168.130.44:8081/blog-backend/update_profile.php', {
      user_id: userStore.userInfo.user_id,
      ...profile.value,
    })
    .then((res) => {
      alert(res.data.message)
    })
}
</script>

<style scoped>
.setprofilebox {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15); /* 通透白色 */
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px); /* 可选，轻微模糊 */
  -webkit-backdrop-filter: blur(2px);
  color: white;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 500px;
  height: auto;
}
.setprofilebox input,
.setprofilebox select,
.setprofilebox textarea {
  margin-bottom: 12px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
}
.setprofilebox button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.setprofilebox button:hover {
  background-color: #0056b3;
}
</style>
