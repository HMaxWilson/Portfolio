<script setup>
import { useRoute, RouterLink } from "vue-router";
import projects from "@/projects.json";

const route = useRoute();
const project = projects[route.params.category].content[route.params.id];
</script>

<template>
  <body>
  <div class="page">
    <h1 class="page__title"> {{ project.name }} </h1>
    <p>
      <b>Date:</b> March 2022<br>
      <b>Languages/Tools Used:</b> PHP/CSS/JavaScript/MySQL/AJAX
    </p>
    <p>
      <a type="submit" href="https://amplify.hgwmw.co.uk" class="button">View Project</a>
      <a href="https://github.com/HMaxWilson/Amplify" class="button">View Source</a>
    </p>
    <figure>
      <img src="@/assets/projects/amplify/preview.gif" width="100%" alt="Placeholder for Amplify">
    </figure>
      {{ project.description }}
    <button class="button">
      <RouterLink to="/projects">Back</RouterLink>
    </button>
  </div>
  </body>
</template>