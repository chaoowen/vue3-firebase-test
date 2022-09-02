<template>
  <section class="flex items-center">
    <ArrowLeftIcon 
      class="mr-4 border-2 border-black rounded-full cursor-pointer" 
      @click="handleChangeImage('pre')"
    />
    <div 
      class="w-96 h-48 overflow-hidden"
    >
      <div :style="{transform: `translateX(-${variable}rem)`}" class="flex transition ease-in-out duration-700">
        <img 
          v-for="img in props.carouselImage" 
          :src="img.url" alt="image"
          class="flex-shrink-0 w-96 h-48 object-cover whitespace-nowrap"
        />  
      </div>
    </div>
    <ArrowLeftIcon 
      class="ml-4 border-2 border-black rounded-full transform rotate-180 cursor-pointer" 
      @click="handleChangeImage('next')"
    />  
  </section>
  
  
</template>

<script>
  import { ref, onMounted } from 'vue'
  import ArrowLeftIcon from './../svg/ArrowLeftIcon.vue'
  export default {
    components: {
      ArrowLeftIcon
    },
    props: {
      carouselImage: {
        type: Array,
        default: () => []
      }
    },
    setup(props) {
      let variable = ref(0)
      const remSize = ref(24)

      const handleChangeImage = (direction) => {
        if (direction === 'pre') {
          variable.value = variable.value === 0 ? 0 : variable.value - remSize.value
        } else {
          variable.value = parseInt(variable.value) / remSize.value === props.carouselImage.length-1 ? variable.value : variable.value + remSize.value
        }
      }
      // onMounted(()=> {
      //   console.log(props.carouselImage)
      // })  
      return {
        props,
        variable,
        remSize,
        handleChangeImage
      }
    }
  }
</script>