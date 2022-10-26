<script setup>
import { useRoute, RouterLink } from "vue-router";
import ProjectCardThumbnail from "@/components/projects/ProjectCardThumbnail.vue";
import Link from "@/components/layouts/Link.vue";

import projects from "@/projects.json";
const route = useRoute();
const project = projects[route.params.category].content[route.params.id];
</script>

<template>
  <body>
    <div class="page">
      <h1 v-show="!!project.name" class="page__title">{{ project.name }}</h1>
      <div v-show="!!project.created || !!project.tools" class="my-4">
        <p v-show="!!project.created">Date: {{ project.created }}</p>
        <p v-show="!!project.tools">Languages/Tools Used: {{ project.tools.join(', ')}}</p>
      </div>
      <div v-show="!!project.githubUrl || !!project.demoUrl" class="mb-4">
        <Link v-show="!!project.githubUrl" :href="`${project.githubUrl}`" target="_blank" class="button mr-4">View Source</Link>
        <Link v-show="!!project.demoUrl" :href="`${project.demoUrl}`" target="_blank" class="button">View Project</Link>
      </div>

      <div v-show="!!project.animatedImage || !!project.description">
        <ProjectCardThumbnail v-show="!!project.animatedImage" :src="project.animatedImage" />
        <div class="my-4" v-html="project.description" />
      </div>

      <button class="button">
        <RouterLink to="/projects">Back</RouterLink>
      </button>
    </div>
  </body>
</template>
