<template>
  <section class="ml-48 p-10">
    <h2 class="mb-4">ALL CATS</h2>
    <div>
      <ProductList 
        @onClick="handleCatName" 
        @onHandle="handleDeleteCat"
        :list="list" 
      />  
      <div v-show="!list.length" class="my-10 ml-10">目前沒有貓貓 QAQ</div>
    </div>
    
    <div>
      <p class="my-4">我喜歡 ‧‧‧‧‧‧ {{ catBrand }}</p>
    </div>
    <div>
      <p>沒有喜歡的貓貓？自己來新增</p>
      <section>
        <div class="flex items-center mt-3">
          <p>品種：</p>
          <input v-model="questionnaire.name" type="text" class="p-1 border border-black rounded text-sm">
        </div>
        <div class="flex items-center mt-3">
          <p>圖片網址：</p>
          <input v-model="questionnaire.url" type="text" class="w-96 p-1 border border-black rounded text-sm">
        </div>
      </section>
      <button @click="apiSetAnimalList" class="my-4 px-2 py-1 bg-gray-200 rounded">新增貓貓</button>
    </div>
    
  </section>
  
</template>

<script setup>
  import { ref } from 'vue'
  import { func } from './../server/db.js'
  import ProductList from './../components/product/ProductList.vue'
  const catBrand = ref('')
  const questionnaire = ref({ name: '', url: '' })
  const list = ref(await func.getDbAnimalList())
  // const list = ref([
  //   { id: '003', favorite: 0, name: '波斯貓', url: 'data:image/jpeg;base64,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' },
  //   { id: '002', favorite: 0, name: '圓臉貓', url: 'https://www.hotpets.com.tw/wp-content/uploads/2017/02/%E5%8F%B0%E7%81%A3%E5%B8%B8%E8%A6%8B%E5%93%81%E7%A8%AE%E8%B2%93-%E6%B3%A2%E6%96%AF%E8%B2%93-Persian.jpg' },
  //   { id: '001', favorite: 0, name: '藪貓', url: 'https://images.chinatimes.com/newsphoto/2020-10-12/656/20201012002786.jpg' },
  // ])
  const handleCatName = (name) => {
    catBrand.value = name
  }
  const apiSetAnimalList = async () => {
    if (!questionnaire.value.name || !questionnaire.value.url) return
    console.log('list.value.length', list.value)
    const obj = {
      id: list.value.length ? parseInt(list.value[list.value.length-1].id)+1 : 0,
      favorite: 0,
      name: questionnaire.value.name,
      url: questionnaire.value.url
    }
    await func.setDbAnimalList(obj)
    questionnaire.value = { name: '', url: '' }
    list.value = await func.getDbAnimalList()
  }
  const handleDeleteCat = async (way, unit) => {
    if (way === 'delete') {
      await func.deleteDbAnimalList(unit.id)
      list.value = await func.getDbAnimalList()
    } else {
      await func.upadteDbAnimalList(unit)
      list.value.map(item => {
        if (item.id === unit.id) item.favorite ++
      })
    }
  }
</script>