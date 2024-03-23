<script setup lang="ts">
import { useBlogStore } from '../../stores/blog.store';
import { useRoute } from 'vue-router'
import { ref } from 'vue'
 
const blogStore = useBlogStore()
const route = useRoute()

const title = ref(route.params.slug.toString())
</script>

<template>
  <div class="container">
    <div class="d-flex position-relative z-index-9">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-dots mb-1">
        <li class="breadcrumb-item" >
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li class="breadcrumb-item">
          <NuxtLink to="/blog">
            Blog
          </NuxtLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
        </ol>
    </nav>
    </div>

    <BlogContent 
      :title="blogStore.blog.title"
      :description="blogStore.blog.description"
      :image="blogStore.blog.image"
      :tags="blogStore.blog.tags"
    />
  </div>

</template>

<style lang="scss" scoped>

</style>