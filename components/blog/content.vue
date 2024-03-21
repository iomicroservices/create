<script setup lang="ts">
defineProps({
  title: { type: String, required: false, default: 'TestXD'},
  description: { type: String, required: false, default: '' },
});

</script>
<template>
  <div>
    {{ title }}
  </div>
</template>


<style scoped>

</style>