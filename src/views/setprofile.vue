<template>
  <div class="set-profile">
    <SetProfile />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SetProfile from '@/components/SetProfile.vue'
</script>
<style scoped>
.set-profile {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100vw;
  height: 100vh;
}
</style>
