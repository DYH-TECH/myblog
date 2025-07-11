<template>
  <div class="container1">
    <h1>{{ title }}</h1>
    <input type="text" name="" class="title" id="" placeholder="请输入博客标题" v-model="title" />
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="请输入博客内容"
      v-model="content"
    ></textarea>
    <button class="submit" @click="submitBlog">提交</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const title = ref('')
const content = ref('')

console.log('userstore:', userStore.userInfo)
const submitBlog = () => {
  if (title.value === '' || content.value === '') {
    alert('标题和内容不能为空')
    return
  }

  axios
    .post(
      'http://192.168.130.44:8081/blog-backend/add_post.php',
      {
        user_id: userStore.userInfo.user_id,
        title: title.value,
        content: content.value,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then((response) => {
      console.log('博客提交成功:', response.data)
      title.value = ''
      content.value = ''
    })
    .catch((error) => {
      console.error('博客提交失败:', error)
    })
  console.log('提交博客:', title.value, content.value)
}
</script>
<style scoped>
.container1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.title {
  height: 50px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
  margin: 20px 0;
  width: 100%;
}
textarea {
  height: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
}
.submit {
  margin: 20px 0;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
.submit:hover {
  background-color: #218838;
}
.submit:active {
  background-color: #1e7e34;
}
.submit:focus {
  outline: none;
}
</style>
