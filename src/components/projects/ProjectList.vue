<script setup>
import ProjectCard from "./ProjectCard.vue";

defineProps({
  projects: Array,
})
</script>

<template>
  <ul class="project__list">
    <ProjectCard
        v-for="project in projects"
        :name="project.name"
        :id="project.id"
        :staticImage="project.staticImage"
        :animatedImage="project.animatedImage"
        :excerpt="project.excerpt"
        :tools="project.tools"
        :description="project.description"
        :enabled="project.enabled"
    />
  </ul>
</template>

<style scoped>
.project__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: var(--gutter);
  padding-left: 0;
}

.project__list li {
  display: block;
  list-style: none;
  margin-left: 0;
  padding-bottom: 0.6rem;
  padding-top: 0.6rem;
  border-bottom: 1px dashed var(--border-color-light);
}

@media (max-width: 750px) {
  .project__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .project__list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>