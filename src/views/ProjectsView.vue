<script setup>
import { RouterLink } from "vue-router";
import ProjectList from "../components/projects/ProjectList.vue";

import projects from "@/projects.json";
</script>

<template>
  <body>
    <div class="page">
      <div v-for="(item) in projects" class="mb-16">
        <h2 class="page__subtitle text-2xl uppercase my-4">
          <RouterLink :to="`/projects/` + item.category">
            {{ item.subtitle }}
          </RouterLink>
        </h2>
        <p class="tracking-tight">
          {{ item.description }}
        </p>
        <ProjectList
            :projects="item.content"
            :category="item.category"
        />

        <button class="button float-right my-8">
          <RouterLink :to="`/projects/` + item.category">
            View more...
          </RouterLink>
        </button>
      </div>
    </div>
  </body>
</template>

<style scoped>

</style>