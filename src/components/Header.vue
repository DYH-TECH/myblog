<template>
  <div class="main-Header">
    <HeaderLogo />
    <HeaderLorgin />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeaderLogo from '@/components/HeaderLogo.vue'
import HeaderLorgin from './HeaderLorgin.vue'
</script>

<style scoped>
.main-Header {
  position: relative;
  justify-content: space-between;
  background-color: rgb(44, 62, 80);
  box-shadow: 0 0 5px;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  height: 109px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 0;
}
</style>
