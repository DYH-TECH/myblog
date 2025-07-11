<template>
  <div class="login-container">
    <div class="login-header">
      <h1>注册</h1>
      <p>{{ message }}</p>
    </div>

    <div class="login-form" id="login-form">
      <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" id="username" name="username" v-model="username" required />
      </div>

      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" id="password" name="password" v-model="password" required />
      </div>

      <button class="login-btn" @click="reg">注册</button>
      <div class="form-options"></div>
      <div class="gotologin" @click="gotologin">已有账号,点击登录</div>
    </div>
  </div>
</template>

<script setup>
import { ref, warn } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import axios from 'axios'
const router = useRouter()
const userStore = useUserStore()
const username = ref('')
const password = ref('')
const message = ref('')
const reg = () => {
  if (username.value == '' && password.value == '') {
    warn('用户名或密码不能为空')
  }
  axios
    .post(
      'http://192.168.130.44:8081/blog-backend/register.php',
      {
        username: username.value,
        password: password.value,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(function (response) {
      message.value = response.data.message
      console.log('注册成功:', response.data)
    })
    .catch(function (error) {
      console.error('注册失败:', error)
      message.value = '注册失败，请稍后再试'
    })
}

const gotologin = () => {
  router.push('/login')
}
</script>

<style scoped>
.login-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  padding: 40px;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h1 {
  color: #2c3e50;
  margin: 0;
  font-size: 28px;
}

.login-header p {
  color: #7f8c8d;
  margin: 5px 0 0;
  font-size: 14px;
}

.login-form .form-group {
  margin-bottom: 20px;
}

.login-form label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #2c3e50;
}

.login-form input {
  width: 91%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
  margin: 0 auto;
}

.login-form input:focus {
  border-color: #3498db;
  outline: none;
}

.form-options {
  margin: 10px;
  padding: 50px;
}

.forgot-password {
  color: #3498db;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #2980b9;
}

.register-link {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}

.register-link a {
  color: #3498db;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}

.gotologin {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #3498db;
  cursor: pointer;
}
</style>
