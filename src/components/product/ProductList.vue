<template>
  <div class="flex flex-wrap">
    <div v-for="unit in list" class="flex flex-col flex-shrink-0 items-center mr-6">
      <img 
        :src="unit.url" alt="貓圖" 
        class="w-40 h-40 object-cover mb-2 cursor-pointer"
        @click="handleUpdateCat(unit.name)"
      >
      <p class="mb-1">{{ unit.name }}</p>
      <div class="flex">
        <p class="mr-4 text-red-500">{{ unit.favorite }}</p>
        <button class="mr-2 p-1 bg-black text-white rounded text-xs" @click="handleDelete(unit)">刪掉</button>
        <button class="p-1 bg-red-500 text-white rounded text-xs" @click="handleFavorite(unit)">點讚</button>
      </div>
      
    </div>
  </div>  
  
</template>

<script setup>
  import { ref } from 'vue'
  defineProps({
    list: {
      type: Array,
      default: () => []
    }
  })
  const emits = defineEmits(['onClick', 'onHandle'])
  const handleUpdateCat = (name) => {
    emits('onClick', name)
  }
  const handleFavorite = (unit) => {
    emits('onHandle', 'favorite', unit)
  }
  const handleDelete = (unit) => {
    emits('onHandle', 'delete', unit)
  }
  
</script>