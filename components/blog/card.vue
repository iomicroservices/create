<script setup lang="ts">
import moment from 'moment';
import { useBlogStore } from '@/stores/blog.store';

interface Props {
  blogs: Blog[]
}

const blogStore = useBlogStore()

withDefaults(defineProps<Props>(), {
  blogs: () => ([])
})

const viewBlog = (blog: Blog) => {
  blogStore.setData(blog)
}
</script>
<template>
  <article class="card card-hover-shadow border p-3 mb-4 w-75" v-for="blog, index in blogs" :key="index">
    <NuxtLink :to="'/blog/' + blog.slug" @click.prevent="viewBlog(blog)">
        <div class="row">
            <div class="col-md-4">
                <img
                class="img-fluid card-img"
                width="300"
                :src="blog.image"
                />
            </div>
            <div class="col-md-8">
                <div class="card-body d-flex flex-column h-100 ps-0 pe-3">
                    <div><p v-for="tag, index in blog.tags" :key="index" class="badge text-bg-dark mb-3 ms-1">{{ tag.name }}</p></div>
                    <h5 class="card-title mb-3 mb-md-0">{{ blog.title }} </h5>
                    <p> {{ blog.description.slice(0, 100) }}...</p>

                    <div class="d-sm-flex justify-content-between align-items-center mt-auto">
                        <p class="mb-2 heading-color fw-semibold">
                            <p> {{ moment(blog.date_published, 'MMMM Do YYYY').format('LL') }} </p>
                        </p>
                        <a class="icon-link icon-link-hover stretched-link" href="#">Read more → </a>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
  </article>
</template>


<style lang="scss" scoped>

</style>