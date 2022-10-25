<script setup>
import ProjectCardThumbnail from "./ProjectCardThumbnail.vue";

defineProps({
  name: String,
  id: String,
  staticImage: String,
  animatedImage: String,
  excerpt: String,
  description: String,
  tools: Array,
  enabled: Boolean,
})
</script>

<template>
  <li class="project__item" v-show="enabled">
    <div class="project__thumbnail">
      <ProjectCardThumbnail :src="staticImage" class="static" />
      <ProjectCardThumbnail :src="animatedImage" class="animated" />
    </div>
    <div class="project__blurb">
      <span class="project__title">
        <RouterLink :to="`projects/` + id" class="link">{{ name }}</RouterLink>
      </span>
      <p>
        <b>Languages/Tools Used:</b> {{ tools.join(", ") }}
      </p>
      <p>
        {{ excerpt }}
      </p>
    </div>
  </li>
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

.project__blurb {
  margin-top: var(--gutter);
}

.project__title {
  font-weight: var(--weight-bold);
}

.project__end {
  padding: 1.5rem 0 1rem 0;
  border-bottom: 1px dashed var(--border-color-light);
}
</style>