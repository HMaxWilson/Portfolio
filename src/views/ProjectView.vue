<script setup>
import { useRoute, RouterLink } from "vue-router";
import Link from "@/components/layouts/Link.vue";

import projects from "@/projects.json";
const route = useRoute();
const project = projects[route.params.category].content[route.params.id];
</script>

<template>
  <body>
    <div class="page grid grid-cols-4 gap-5">
      <div v-show="!!project.githubUrl || !!project.demoUrl" class="mb-4 col-span-5">
        <Link v-show="!!project.githubUrl" :href="`${project.githubUrl}`" target="_blank" class="button mr-4">View Source</Link>
        <Link v-show="!!project.demoUrl" :href="`${project.demoUrl}`" target="_blank" class="button">View Project</Link>
      </div>
      <div v-show="!!project.name || !!project.create || !!project.tools" class="col-span-2">
        <h1 v-show="!!project.name" class="page__title">{{ project.name }}</h1>
        <div v-show="!!project.created || !!project.tools" class="my-4">
          <p v-show="!!project.created"><b>Date:</b> {{ project.created }}</p>
          <p v-show="!!project.tools"><b>Languages/Tools Used:</b> {{ project.tools.join(', ')}}</p>
        </div>
      </div>
      <div v-show="!!project.previewImage" class="col-span-3">
        <img v-if="!!project.previewImage" class="w-full h-auto" :src="project.previewImage" :alt="project.name + ` Thumbnail`" />
      </div>

      <div v-show="!!project.description" class="col-span-5">
        <div class="my-4" v-html="project.description" />
      </div>

      <RouterLink to="/projects" class="button col-span-5 text-center w-16">Back</RouterLink>
    </div>
  </body>
</template>
