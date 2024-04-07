<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { sanitizeBlogTitle } from '@/utils/helpers';
import moment from 'moment';

const router = useRouter();

const markdownContent = ref('');
const title = ref('');
const description = ref('');
const date_published = ref(moment().format('YYYY-MM-DD'));
const isSaving = ref(false);
const isRequiredFieldsFilled = ref(false);

const slug = computed(() => {
  var slug = sanitizeBlogTitle(title.value);
  return slug;
})

const domainName = () => {
  return window.location.host
}

const onSave = async (content: string) => {
  if (!markdownContent.value.trim() && !title.value.trim() && !description.value.trim()) {
    isRequiredFieldsFilled.value = true
    return;
  }
  
  try {
    isSaving.value = true
    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('content', content);
    formData.append('date_published', `${date_published.value}`)
    formData.append('description', description.value)
    formData.append('slug', slug.value);

    const response = await axios.post('/api/save-file', formData)
    isSaving.value = false

    if (response.status === 200) {
      return router.push('/blog');
    } 
      
    throw new Error('Failed to save save blog post: ' + response.statusText);
  } catch (error) {
    alert('Error saving blog post.');
  }
};
</script>
<template>
  <h2>Create blog</h2>
  <div class="row mb-3">
    <div class="col">
      <label class="form-label">Title</label>
      <input 
        type="text" 
        v-model="title" 
        class="form-control" 
        :class="{ 'is-invalid': isRequiredFieldsFilled }" 
        placeholder="Input title of blog post..." 
        required>
    </div>
    <div class="col">
      <label class="form-label">Slug URL</label>
      <div class="input-group">
        <div class="input-group-text">{{ domainName() }}/</div>
        <input 
          type="text" 
          v-model="slug" 
          class="form-control" 
          id="autoSizingInputGroup" 
          aria-label="autoSizingInputGroup" 
          disabled>
      </div>
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label">Description</label>
    <input 
      type="text" 
      v-model="description" 
      class="form-control" 
      :class="{ 'is-invalid': isRequiredFieldsFilled }"
      placeholder="Input some description..." 
      required>
  </div>
  <label class="form-label">Content</label>
  <div :class="{ 'editor': isRequiredFieldsFilled }">
    <MdEditor v-model="markdownContent" language="en-US" @onSave="onSave"/>
  </div>
  
  <div v-if="isRequiredFieldsFilled" class="alert alert-danger alert-dismissible fade show mt-4" role="alert">
    Please fix the required fields...
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="isRequiredFieldsFilled = false"></button>
  </div>
  
  <div class="mt-4 col-4">
    <button type="button" class="btn btn-primary btn-lg save-button" @click="onSave(markdownContent)">{{ isSaving ? 'Saving...' : 'Save' }}</button>
  </div>
</template>


<style lang="scss" scoped>
.save-button {
  width: 300px;
}

.editor {
  border: 1px solid rgb(236, 53, 53);
}
</style>