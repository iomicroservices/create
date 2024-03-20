<script setup lang="ts">
import { useRoute } from 'vue-router'
 
const route = useRoute()
</script>

<template>
  <div class="container p-7 m-auto">
   <h1>{{ route.params.slug }}</h1>
  </div>
</template>

<style lang="scss" scoped>

</style>