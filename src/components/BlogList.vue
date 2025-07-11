<template>
  <div class="list">
    <BlogCard v-for="(item, index) in blogs" :key="index" :blog="item" @deleted="removePost" />
  </div>
</template>
<script setup>
import BlogCard from '@/components/BlogCard.vue'
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import axios from 'axios'
const userStore = useUserStore()
const blogs = ref('')

const removePost = (id) => {
  blogs.value = blogs.value.filter((post) => post.id !== id)
}

onMounted(() => {
  axios
    .get('http://192.168.130.44:8081/blog-backend/get_posts.php', {
      params: {
        user_id: userStore.userInfo.user_id,
      },
    })
    .then((res) => {
      blogs.value = res.data
      console.log('该用户博文：', blogs.value)
    })
})
</script>
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  overflow-y: scroll;
  height: 90%;
  max-height: 500px;
}
</style>
