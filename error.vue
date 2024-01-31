<template>
  <main class="error-main">
    ошибка
  </main>
</template>

<script setup>

defineProps({
  error: {
    type: Object,
    required: true,
  }
})

useHead({
    title: "",
    meta: [
      { name: 'description', content: '' }
    ],
    bodyAttrs: {
      class: 'error-page'
    }
  });
</script>

<style>

</style>