<template>
  <div class="hello article">
    <ContentRenderer v-if="data" :value="data"/>
    <NuxtPicture
      src="/images/index/main.png"
    />
  </div>
  <div class="links article">
  <h2>Вот ссылки на материалы</h2>
  <ul>
    <li><NuxtLink to="/general/absolute-and-relative-path">Пути в коде: абсолютные и относительные</NuxtLink></li>
  </ul>
  </div>
</template>


<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
  const  {data} = await useAsyncData<ParsedContent>('/', () => queryContent('/').findOne())
</script>


<style scoped>

</style>