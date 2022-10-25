<script setup>
defineProps({
  src: String,
  alt: String,
})
</script>

<template>
  <img
      class="w-full h-full"
      :src=src
      :alt=alt
  />
</template>

<style scoped>
.project__item img.static {
  display: none;
}
.project__item img.animated {
  display: flex;
}
.project__item:hover img.static {
  display: flex !important;
}
.project__item:hover img.animated {
  display: none !important;
}
</style>