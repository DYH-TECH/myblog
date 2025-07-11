<template>
  <div class="face">
    <Regestercard />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Regestercard from '@/components/Regestercard.vue'
const active = ref(true)
</script>
<style scoped>
.face {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f2f6;
  width: 100vw;
}
</style>
