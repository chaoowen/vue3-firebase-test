<template>
  <section class="ml-48 p-10">
    <Carousel :carousel-image="carouselImage" class="justify-center" />
    <div class="text-center my-8">
      <p>已經有 {{ webVisitTime }} 人造訪</p>
      <button @click="apiSetVisitTime" class="my-4 px-2 py-1 border border-black rounded">造訪 ++</button>
    </div>

  </section>
</template>

<script>
  import { ref, onMounted } from 'vue'
  // import { carouselImage } from './../store/index.js'
  import Carousel from './../components/index/Carousel.vue'
  import { func } from './../server/db.js'

  export default {
    components: {
      Carousel
    }, 
    async setup() {
      const webVisitTime = ref(await func.getDbVisitTime())
      // onMounted(async () => {
      //   const a = await getDbVisitTime
      //   console.log('a', a)
      //   const b = await func.getDbVisitTime()
      //   console.log('b', b)
      // })
      const carouselImage = ref([
        { url: 'https://sofunsd.com/wp-content/uploads/2016/03/Seals_1.jpg' },
        { url: 'https://cdn2.ettoday.net/images/3435/d3435809.jpg' },
        { url: 'https://images.chinatimes.com/newsphoto/2020-07-18/1024/20200718003632.jpg' },
        { url: 'https://images.chinatimes.com/newsphoto/2020-08-29/1024/20200829001021.jpg' },
        { url: 'https://ihealth.bwnet.com.tw/CT_Column/2022/06/cc9664c7-7a79-365d-616c-b7e549b28ad6_620.jpg' },
      ])

      const apiSetVisitTime = () => {
        webVisitTime.value ++
        func.setDbVisitTime(webVisitTime.value)
      }

      return {
        webVisitTime,
        carouselImage,
        apiSetVisitTime,
      }
    }
  }
</script>