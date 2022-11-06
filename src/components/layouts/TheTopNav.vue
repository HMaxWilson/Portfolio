<script setup>
import { RouterLink } from "vue-router";
import Link from "./Link.vue";
</script>

<template>
    <nav class="nav flex text-gray-700 overflow-x-auto">
      <div class="nav__list">
        <RouterLink to="/" class="nav__item hover:text-black">Home</RouterLink>
        <RouterLink to="/projects" class="nav__item hover:text-black">Projects</RouterLink>
      </div>
      <div class="nav__list">
        <Link href="https://www.linkedin.com/in/HMaxWilson" target="_blank" class="nav__item">LinkedIn</Link>
        <Link href="mailto:Web.HMW@hotmail.com" class="nav__item">Email</Link>
      </div>
    </nav>
</template>

<style scoped>
.nav {
  margin: var(--gutter) 0 0 0;
  padding: 0 var(--gutter);
  transition: opacity 0.2s, transform 0.2s;
}

.nav__list {
  display: flex;
  margin-bottom: var(--gutter);
  margin-right: var(--gutter);
}

.nav__item {
  font-family: var(--font-nav);
  font-size: var(--font-size);
  font-weight: var(--weight-bold);
  color: var(--font-nav-color);

  display: inline-block;
  padding: 0.65em 0.35em;
  margin-right: 0.5em;
}

.nav__item:hover {
  color: rgb(0, 0, 0);
}
</style>
