<script setup>
import { ref } from 'vue'
import { useAddPoint, useMinusPoint } from './../resources.js'

defineProps({
  msg: String
})
const { point, addPoint } = useAddPoint()
const { point2, minusPoint } = useMinusPoint()
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <h5 @click="addPoint">{{ point }}!!!!</h5>
  <h5 @click="minusPoint">{{ point2 }}!!!!</h5>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>compconents/HelloWoooooorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
