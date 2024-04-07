
<script setup lang="ts">

const { slug } = useRoute().params

</script>
<template>
  <ContentDoc :path="`/blog/${slug}`" v-slot="{doc}"> 
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
            <li class="breadcrumb-item active" aria-current="page">{{ doc.title }}</li>
            </ol>
        </nav>
      </div>

      
      <BlogContent 
        :title="doc.title"
        :description="doc.description"
        :image="doc.image"
        :tags="doc.tags"
      />
      
      <ContentRenderer :value="doc">
        <h1>{{ doc.title }}</h1>
        <ContentRendererMarkdown :value="doc" />
      </ContentRenderer>
    </div>
  </ContentDoc>
</template>


<style lang="scss" scoped>

</style>