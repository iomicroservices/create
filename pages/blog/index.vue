<script setup lang="ts">
import { blogs } from '../../utils/data'
useHead({
  title: 'Blog',
})
</script>

<template>
  <div class="container p-7 m-auto">
    <!-- {{ blogs }} -->
   <BlogCard :blogs="blogs" />
  </div>
</template>


<style lang="scss" scoped>

</style>