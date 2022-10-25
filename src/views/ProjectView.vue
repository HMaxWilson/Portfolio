<script setup>
import { RouterLink } from "vue-router";
import webProjects from "@/projects.json";

console.log(webProjects);
</script>

<template>
  <body>
  <div class="page">
    <h1 class="page__title">{{ $route.params.id }}</h1>
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
    <p>
      During my time refining my object-oriented programming skills, I decided to follow along with a project course,
      in which I followed along in creating a copy of Spotify 2017, a music streaming service. I wanted to create a
      service that would allow users to create their own playlists and listen to their music
    </p>
    <p>
      To create this project, I used PHP, MySQL, CSS, JavaScript and AJAX. I used PHP to create the backend of the
      website, which would handle the user authentication and the database queries. I used MySQL to store the data
      for the website, which would store the user information, the songs and the playlists. I used CSS to style the
      website, which would allow the website to look almost identical to that which I was replicating, with minor changes
      for personal styling choices. I used JavaScript to create the front-end of the website, which would allow the
      user to interact with the website. I used AJAX to create the asynchronous requests to the server,
      which would allow the website to be more responsive.
    </p>
    <br>
    <button class="button">
      <RouterLink to="/projects">Back</RouterLink>
    </button>
  </div>
  </body>
</template>