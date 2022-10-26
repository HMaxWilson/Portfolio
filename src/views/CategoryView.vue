<script setup>
import { useRoute } from "vue-router";
import ProjectList from "../components/projects/ProjectList.vue";
import projects from "@/projects.json";

const route = useRoute();
const category = projects[route.params.category];
</script>

<template>
  <body>
    <div class="page">
      <button class="button my-4">
        <RouterLink to="/projects">Back</RouterLink>
      </button>
      <h2 class="page__subtitle text-2xl uppercase my-4">
        {{ category.subtitle }}
      </h2>
      <p>
        {{ category.description }}
      </p>
      <ProjectList
          :projects="category.content"
          :category="category.category"
      />
    </div>
  </body>
</template>

<style scoped>

</style>