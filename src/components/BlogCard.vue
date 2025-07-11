<template>
  <div class="blog-card" @click="active = !active">
    <h2 class="blog-title">{{ blog.title }}</h2>
    <p class="blog-date">日期: {{ blog.created_at }}</p>
    <p class="blog-content" v-if="active">{{ blog.content }}</p>
    <div class="deletebtn" @click="handleDelete">删除</div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'
import axios from 'axios'
import { defineEmits } from 'vue'
const props = defineProps({
  blog: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['deleted'])
const handleDelete = async () => {
  if (!confirm('确定要删除这篇博文吗？')) return
  try {
    await axios.delete('http://192.168.130.44:8081/blog-backend/delete_post.php', {
      data: { id: props.blog.id },
    })
    emit('deleted', props.blog.id)
  } catch (err) {
    console.error(err)
  }
}

const active = ref(false)
</script>
<style scoped>
.blog-card {
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 16px;
  background: rgba(255, 255, 255, 0.15); /* 通透白色 */
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px); /* 可选，轻微模糊 */
  -webkit-backdrop-filter: blur(2px);
  color: white;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));

  color: black;
  position: relative;
}
.blog-title {
  font-size: 1.5em;
  margin-bottom: 8px;
}
.blog-content {
  font-size: 1em;
  color: #666;
}
.deletebtn {
  position: absolute;
  top: 16px;
  right: 10px;
  width: 50px;
  padding: 6px 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.deletebtn:hover {
  background-color: #c0392b;
}
</style>
