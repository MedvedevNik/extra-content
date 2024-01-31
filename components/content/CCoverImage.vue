<template>
  <img :src="src" :alt="alt" />
</template>

<script setup lang="ts">
  const props = defineProps<{
    src: String,
    alt?: String,
  }>()
</script>

<style scoped>
  figure {
    margin: 2em 0;
  }
  img {
    width: 100%;
  }
  .caption {
    font-size: 0.8em;
    color: #666;
  }
</style>