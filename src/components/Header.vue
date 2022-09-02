<template>
  <div class="fixed w-48 h-full flex flex-col items-center py-6 bg-gray-200">
    <router-link 
      v-for="nav in navbar" 
      class="my-4 cursor-pointer"
      :to="nav.url"
    >
      {{ nav.name }}
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const navbar = ref([
      { name: 'index', url: '/' },
      { name: 'product', url: '/product' }
    ])
    return {
      navbar
    }
  }
}

</script>