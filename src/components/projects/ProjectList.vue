<script setup>
import ProjectCard from "./ProjectCard.vue";

defineProps({
  projects: Object,
  category: String,
});
</script>

<template>
  <ul class="project__list">
    <ProjectCard
      v-for="project in projects"
      :id="project.id"
      :category="category"
      :slug="project.slug"
      :name="project.name"
      :excerpt="project.excerpt"
      :description="project.description"
      :previewImage="project.previewImage"
      :tools="project.tools"
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
