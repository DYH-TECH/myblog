<template>
  <div class="logo">
    <div class="sidebar-toggle" @click="">☰</div>
    <div class="logotopic">Ddd-blog</div>
  </div>
</template>
<script setup></script>
<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #fff;
  width: 200px;
  margin-bottom: 0px;
  padding: 0;
}
.logo h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}
.logo p {
  margin: 0;
  font-size: 10px;
  opacity: 0.8;
}
.sidebar-toggle {
  display: inline-block;
  font-size: 24px;
  cursor: pointer;
  padding: 8px 12px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #2c3e50;
  transition: all 0.3s ease;
  margin: 0;
}
.logotopic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0;
}
</style>
