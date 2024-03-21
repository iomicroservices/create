<script setup lang="ts">
import { useBlogStore } from '../../stores/blog.store';
 
const blogStore = useBlogStore()
</script>

<template>
  <div class="container p-7 m-auto">
    {{ blogStore.blog }}
  </div>
</template>

<style lang="scss" scoped>

</style>