<template>
  <div class="container">
    <Header />
    <div class="main">
      <div class="left">
        <h1>添加博客</h1>
        <AddBlog />
      </div>
      <div class="right">
        <h1>博客列表</h1>
        <BlogList />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from '@/components/Header.vue'
import BlogList from '@/components/BlogList.vue'
import AddBlog from '@/components/AddBlog.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => {
  // 这里可以添加一些初始化逻辑
  console.log('Index view mounted')
})
</script>

<style scoped>
.container {
  position: relative;
  width: 1440px;
  display: flex;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
}
h1 {
  color: #333;
}
.main {
  padding: 30px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: #f4f4f4;
  justify-content: space-between;
}
.left {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 19px;
  width: 30%;
  height: auto;
  position: relative;
  max-width: 600px;
}
.right {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 19px;
  width: 60%;
  height: auto;
  position: relative;
}
</style>
