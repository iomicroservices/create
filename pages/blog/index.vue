<script setup lang="ts">
useHead({
  title: 'Blog',
})
</script>

<template>
  <div class="container">
    <ContentList path="/blog"
    :query="{
      draft: false,
      sort: [
        {
          date: -1
        }
      ],
    }"
    v-slot="{list}">
      <BlogCard :blogs="list" />
    </ContentList>
  </div>
</template>


<style lang="scss" scoped>

</style>