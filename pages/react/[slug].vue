<template>
    <div class="article">
      <ContentRenderer :value="data" class="release-text"/>
    </div>
</template>

<script setup lang="ts">
  import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
  const { path } = useRoute();

  const data = await queryContent<ParsedContent>(path).findOne();
  
</script>

<style scoped>

</style>