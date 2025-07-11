<template>
  <div class="login-container">
    <div class="login-header">
      <h1>欢迎登录</h1>
      <p>请使用您的账号密码登录</p>
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

      <div class="form-options">
        <label> <input type="checkbox" name="remember" /> 记住我 </label>
        <a href="#" class="forgot-password">忘记密码?</a>
      </div>

      <button type="button" class="login-btn" @click="action">登入</button>

      <div class="register-link">
        还没有账号?
        <div class="reg" @click="gotoreg">立即注册</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { defineEmits } from 'vue'
import { inject } from 'vue'
import { watch } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user'
const username = ref('')
const password = ref('')

const router = useRouter()
const route = useRoute()

const userStore = useUserStore()

const action = () => {
  if (username.value === '' || password.value === '') {
    alert('用户名或密码不能为空')
    return
  }
  axios
    .post(
      'http://192.168.130.44:8081/blog-backend/login.php',
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
      console.log('登录成功:', response.data)
      userStore.setUserInfo(response.data) // 假设返回的数据中包含用户信息
      console.log('用户信息已保存到 store:', userStore.userInfo)
      alert('登录成功')
      router.push('/') // 跳转到主页或其他页面
      // 处理登录成功后的逻辑
    })
    .catch(function (error) {
      console.error('登录失败:', error)
      alert('登录失败，请检查控制台错误信息')
    })
}

const gotoreg = () => {
  router.push('/register')
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
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

.register-link .reg {
  color: #3498db;
  text-decoration: none;
}

.register-link .reg:hover {
  text-decoration: underline;
}
</style>
