<script setup>
defineProps({
  src: String,
  alt: String,
});
</script>

<template>
  <img v-if="!!src" class="w-full h-auto" :src="src" :alt="alt" />
  <img v-else class="w-full h-auto" src="/src/assets/projects/placeholder.jpg" alt="Placeholder Thumbnail" />
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
