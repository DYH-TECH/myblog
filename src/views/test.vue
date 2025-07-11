<template>
  <div class="container">
    <div class="box1">box1</div>
    <div
      class="box2"
      :style="{ left: position.x + 'px', top: position.y + 'px' }"
      @mousedown="startDrag"
      @click="Biggeraction"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const position = ref({ x: 100, y: 100 })
let isDragging = false
let offset = { x: 0, y: 0 }

const startDrag = (e) => {
  e.preventDefault()
  isDragging = true
  offset.x = e.clientX - position.value.x
  offset.y = e.clientY - position.value.y
}

const onDrag = (e) => {
  if (!isDragging) return
  e.preventDefault()
  position.value.x = e.clientX - offset.x
  position.value.y = e.clientY - offset.y
}

const stopDrag = () => {
  isDragging = false
}

onMounted(() => {
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
})

const Biggeraction = () => {}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: #eee;
}

.box1 {
  width: 100px;
  height: 100px;
  background: red;
}

.box2 {
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.15); /* 通透白色 */
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px); /* 可选，轻微模糊 */
  -webkit-backdrop-filter: blur(2px);
  color: white;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  font-size: 18px;
  position: absolute;
  cursor: grab;
  user-select: none;
  transition: 0.1ms;
}
</style>
