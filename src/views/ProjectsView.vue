<script setup>
import { RouterLink } from "vue-router";
import ProjectList from "../components/projects/ProjectList.vue";

import projects from "@/projects.json";
</script>

<template>
  <body>
    <div class="page">
      <div v-for="(category, index) in projects" class="pb-16">
        <h2 class="page__subtitle text-2xl uppercase my-4">
          <RouterLink :to="`/projects/` + category.name">
            {{ category.subtitle }}
          </RouterLink>
        </h2>
        <p class="tracking-tight">
          {{ category.description }}
        </p>
        <ProjectList :projects="category.content" :category="category.name" />

        <button v-if="category.content.length > 3" class="button float-right my-8">
          <RouterLink :to="`/projects/` + category.name">
            More {{ category.name }}
          </RouterLink>
        </button>
      </div>
    </div>
  </body>
</template>

<style scoped></style>
