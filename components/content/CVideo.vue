<template>
  <div class="video">
    <video :src="url" controls :poster="poster"></video>
    <div class="caption"><slot /></div>
  </div>
  
</template>

<script setup lang="ts">
  const props = defineProps<{
    url: string,
    poster?: string,
  }>()
</script>

<style scoped>
  .caption {
    font-size: 0.8em;
    color: #666;
  }

  video {
    width: 100%;
    border-radius: 0.2em;
    /* max-width: 900px; */
  }
</style>