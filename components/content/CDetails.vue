<template>
  <details>
    <summary>{{ title }}</summary>
    <div>
      <slot />
    </div>
  </details>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: String,
}>()
</script>

<style scoped>
  details {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 1em 0;
    padding: 1em;
  }
</style>