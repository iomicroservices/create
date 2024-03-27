<script setup lang="ts">
import { socmed } from '../../utils/data'

const props = defineProps({
  id: { type: Number },
  title: { type: String },
  description: { type: String },
  date_published: { type: String },
  image: { type: String },
  slug: { type: String },
  tags: { type: Array<Tag> },
  isPublished: { type: Boolean },
})

</script>
<template>
  <div class="w-75">
    <h1 class="h4 mb-0">{{ props.title }}</h1>

    <div class="d-flex align-items-center flex-wrap mt-4">
        <template v-for="tag, index in props.tags" :key="index">
            <span class="badge text-bg-dark mb-0 ms-2">{{ tag.name }}</span>
        </template>
        <span class="text-secondary opacity-3 mx-3">|</span>
      <div class="dropdown">
          <a href="#" class="text-secondary text-primary-hover" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-share me-2"></i>14
          </a>
          <ul class="dropdown-menu min-w-auto" aria-labelledby="cardFeedAction">
            <li v-for="platform, index in socmed" :key="index">
              <a class="dropdown-item" href="#"><i :class="platform.icon"></i>{{ platform.name }}</a>
            </li>
          </ul>
      </div>
      
      <span class="text-secondary opacity-3 mx-3">|</span>    
      <p class="text-secondary text-primary-hover mb-0">{{ date_published || '' }}</p>
      <span class="text-secondary opacity-3 mx-3">|</span>
      <span class="text-secondary">2 min read</span>

      <div class="container pt-5">
        <img
          class="img-fluid card-img w-50 rounded"
          :src="image"
        />
      </div>

      <blockquote class="card card-body bg-light overflow-hidden mt-5 p-sm-5">
        <div class="vr bg-primary h-100 position-absolute top-0 start-0" style="width: 3px; opacity:100%"></div>
        <span class="display-4 position-absolute top-0 start-0 opacity-1 mt-n3"><i class="bi bi-quote"></i></span>
        <q class="fs-6 heading-color">{{ description }}</q>
      </blockquote>
    </div>
  </div>
</template>


<style scoped>

</style>