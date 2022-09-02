<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="w-full h-full">
    <Header />
    <!-- <HelloWorld msg="how are you goodbye oohoh" /> -->
    <!-- 渲染 route 的位置 -->
    <Suspense>
      <router-view /> 
    </Suspense>
    
  </div>
</template>

<style scoped>
</style>
