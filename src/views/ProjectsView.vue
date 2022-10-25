<script setup>
import ProjectList from "../components/projects/ProjectList.vue";

import projects from "@/projects.json";
console.log(projects);
</script>

<template>
  <body>
    <div class="page">
      <div v-for="(item) in projects">
        <h2 class="page__subtitle mb-4">{{ item.subtitle }}</h2>
        <p>
          {{ item.description }}
        </p>
        <ProjectList :projects="item.content" />
      </div>
    </div>
  </body>
</template>

<style scoped>

</style>