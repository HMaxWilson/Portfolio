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
    <li class="project__item">
      <div class="project__thumbnail">
        <ProjectCardThumbnail :src="staticImage" class="static" />
        <ProjectCardThumbnail :src="animatedImage" class="animated" />
      </div>
      <div v-if="!!name || !!tools || !!excerpt" class="my-4">
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
  transition-duration: 0.1s;
  margin-top: 10px;
}
.project__item:hover {
  background-color: rgb(0, 0, 0, 0.02);
  transition-duration: 0.1s;
}
</style>
