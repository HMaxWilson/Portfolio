<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="nav">
    <div class="nav__list">
      <RouterLink to="/" class="nav__item">Home</RouterLink>
      <RouterLink to="/projects" class="nav__item">Projects</RouterLink>
    </div>
    <div class="nav__list">
      <a href="https://github.com/HMaxWilson" class="nav__item">GitHub</a>
      <a href="https://www.linkedin.com/in/HMaxWilson" class="nav__item"
        >LinkedIn</a
      >
      <a href="mailto:Web.HMW@hotmail.com" class="nav__item">Email</a>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  background-color: white;
  display: flex;
  overflow-x: auto;
  margin: var(--gutter) 0 calc(var(--gutter) * 4) 0;
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
