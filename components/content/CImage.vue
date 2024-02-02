<template>
  <figure>
    <img :src="src" :alt="alt" />
    <figcaption class="caption"><slot /></figcaption>
  </figure>
</template>

<script setup lang="ts">
  const props = defineProps<{
    src: string,
    alt?: string,
  }>()
</script>

<style scoped>
  figure {
    margin: 2em 0;
  }
  img {
    width: 100%;
    border-radius: 0.2em;
  }
  .caption {
    font-size: 0.8em;
    color: #666;
  }
</style>