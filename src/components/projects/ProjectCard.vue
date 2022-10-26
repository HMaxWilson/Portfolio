<script setup>
import ProjectCardThumbnail from "./ProjectCardThumbnail.vue";

defineProps({
  id: Number,
  category: String,
  slug: String,
  name: {
    type: String,
    required: true,
  },
  excerpt: String,
  description: String,
  staticImage: String,
  animatedImage: String,
  tools: Object,
  enabled: Boolean,
});
</script>

<template>
  <RouterLink v-if="enabled" :to="`/projects/` + category + `/` + slug" class="border-b-[1px] border-dashed">
    <li class="project__item mt-8 peer hover:scale-105 ease-in-out duration-100">
      <div class="project__thumbnail peer-hover:scale-50">
        <ProjectCardThumbnail :src="animatedImage" />
      </div>
      <div v-if="!!name || !!tools || !!excerpt" class="my-4 px-1">
        <RouterLink v-if="!!slug" :to="`/projects/` + category + `/` + slug" class="link font-bold">{{ name }}</RouterLink>
        <p v-if="!!tools" class="my-2"><b>Languages/Tools Used:</b> {{ tools.join(", ") }}</p>
        <p v-if="!!excerpt" class="my-2">{{ excerpt }}</p>
      </div>
    </li>
  </RouterLink>
</template>

<style scoped>
.project__item {
  font-family: var(--font-p);
  font-size: var(--font-size);
}
</style>
