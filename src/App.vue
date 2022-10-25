<script setup>
import { RouterView } from "vue-router";
import TheTopNav from "./components/layouts/TheTopNav.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <TheTopNav />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
