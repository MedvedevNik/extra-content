<template>
  <div class="hello article">
    <ContentRenderer v-if="data" :value="data"/>
    <img
      src="/images/index/main.png"
      alt="собака воет словами Дополнительный материал"
    />
  </div>
  <div class="links article">
  <h2>Вот ссылки на материалы</h2>
  <ul>
    <li v-for="(link, index) in links" :key="index">
      <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
    </li>
  </ul>
  </div>
</template>


<script setup lang="ts">
  import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
  const  {data} = await useAsyncData<ParsedContent>('/', () => queryContent('/').findOne())
  const links =  [
                  ...await queryContent<ParsedContent>('/general').find(),
                  ...await queryContent<ParsedContent>('/html').find(),
                  ...await queryContent<ParsedContent>('/css').find(),
                  ...await queryContent<ParsedContent>('/js').find(),
                  ...await queryContent<ParsedContent>('/react').find(),
                  ...await queryContent<ParsedContent>('/node').find(),
                  ...await queryContent<ParsedContent>('/tools').find(),
                ];
</script>


<style scoped>

</style>