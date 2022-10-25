<script setup>
import ProjectList from "../components/projects/ProjectList.vue";

import webProjects from "@/projects.json";
</script>

<template>
  <body>
    <div class="page">
      <h1 class="page__title mb-4">Projects</h1>
      <h2 class="page__subtitle mb-4">Website Development</h2>
      <p>
        Web development is my professional development area, it is something I
        took up to assist in a previous workplace alongside my regular Software
        Development role, which I found to take on quite well and enjoyed, so
        fully made the move a few months later to pursue the new role, yet
        full-time with the same company.
      </p>
      <ProjectList :projects="webProjects" />

      <h2 class="page__subtitle">Python Development</h2>
      <p>...Coming Soon...</p>
      <ProjectList />

    </div>
  </body>
</template>

<style scoped>

</style>