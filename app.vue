<script setup lang="ts">
import '@/assets/css/main.css';
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · Createnumbers` : 'Createnumbers';
  }
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
