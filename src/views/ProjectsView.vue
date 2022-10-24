<template>
  <body>
    <div class="page">
      <h1 class="page__title">Projects</h1>
      <h2 class="page__subtitle">Website Development</h2>
      <p>
        Web development is my professional development area, it is something I
        took up to assist in a previous workplace alongside my regular Software
        Development role, which I found to take on quite well and enjoyed, so
        fully made the move a few months later to pursue the new role, yet
        full-time with the same company.
      </p>
      <ul class="project__list">
        <li class="project__item">
          <div class="project__thumbnail">
            <img
              class="static"
              style="display: none"
              src="@/assets/projects/gallery/home.png"
              width="100%"
              alt="Gallery Thumbnail, this is placeholder to hold places of holds..."
            />
            <img
              class="animated"
              style="display: flex"
              src="@/assets/projects/gallery/admin.gif"
              width="100%"
              alt="Gallery Thumbnail, this is placeholder to hold places of holds..."
            />
          </div>
          <div class="project__blurb">
            <span class="project__title">
              <a href="projects/gallery.html" class="link"> Gallery</a>
            </span>
            <p><b>Languages/Tools Used:</b> PHP/CSS/JavaScript/MySQL</p>
            <p>
              An introduction to Object-Oriented PHP, by Edwin Diaz, available
              on Udemy.
            </p>
          </div>
        </li>
        <li class="project__item">
          <div class="project__thumbnail">
            <img
              class="static"
              style="display: none"
              src="@/assets/projects/amplify/home.png"
              width="100%"
              alt="Amplify clone Thumbnail, this is placeholder to hold places of holds..."
            />
            <img
              class="animated"
              style="display: flex"
              src="@/assets/projects/amplify/preview.gif"
              width="100%"
              alt="Amplify clone Thumbnail, this is placeholder to hold places of holds..."
            />
          </div>
          <div class="project__blurb">
            <span class="project__title">
              <a href="projects/amplify.html" class="link"> Amplify</a>
            </span>
            <p><b>Languages/Tools Used:</b> PHP/CSS/JavaScript/MySQL/XML</p>
            <p>
              A follow along project replicating Spotify 2017, by Reece Kenney,
              available on Udemy.
            </p>
          </div>
        </li>
        <li class="project__item">
          <div class="project__thumbnail">
            <img
              src="@/assets/projects/blog/admin.png"
              width="100%"
              alt="Blog Thumbnail, this is placeholder to hold places of holds..."
            />
          </div>
          <div class="project__blurb">
            <span class="project__title">
              <a href="projects/blog.html" class="link"> Blog</a>
            </span>
            <p><b>Languages/Tools Used:</b> Laravel/MySQL/Tailwind 3</p>
            <p>
              An ongoing development into designing a blog website while
              utilizing Laravel.
            </p>
          </div>
        </li>
        <li class="project__item">
          <div class="project__thumbnail">
            <img
              class="static"
              style="display: none"
              src="@/assets/projects/igdb/borderlands.png"
              width="100%"
              alt="Aggregator Thumbnail, this is placeholder to hold places of holds..."
            />
            <img
              class="animated"
              style="display: flex"
              src="@/assets/projects/igdb/preview.gif"
              width="100%"
              alt="Aggregator Thumbnail, this is placeholder to hold places of holds..."
            />
          </div>
          <div class="project__blurb">
            <span class="project__title">
              <a href="projects/igdb.html" class="link"> IGDB</a>
            </span>
            <p><b>Languages/Tools Used:</b> Laravel/IGDB API(4.0)/Tailwind 3</p>
            <p>
              An ongoing development into creating a video game aggregator using
              a 3rd party API in a project.
            </p>
          </div>
        </li>
        <li class="project__item">
          <div class="project__thumbnail">
            <img
              class="static"
              style="display: none"
              src="@/assets/projects/parallax/parallax.png"
              width="100%"
              alt="Parallax Thumbnail, this is placeholder to hold places of holds..."
            />
            <img
              class="animated"
              style="display: flex"
              src="@/assets/projects/parallax/preview.gif"
              width="100%"
              alt="Parallax Thumbnail, this is placeholder to hold places of holds..."
            />
          </div>
          <div class="project__blurb">
            <span class="project__title">
              <a href="projects/parallax.html" class="link"> Parallax</a>
            </span>
            <p><b>Languages/Tools Used:</b> HTML/JavaScript/CSS</p>
            <p>
              A look into Parallax Scrolling, an effect which can look great
              when utilised correctly.
            </p>
          </div>
        </li>
      </ul>
      <h2 class="page__subtitle">Python Development</h2>
      <p>...Coming Soon...</p>
      <ul class="project__list"></ul>
    </div>
  </body>
</template>

<style scoped>
.project__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: var(--gutter);
  padding-left: 0;
}

.project__list li {
  display: block;
  list-style: none;
  margin-left: 0;
  padding-bottom: 0.6rem;
  padding-top: 0.6rem;
  border-bottom: 1px dashed var(--border-color-light);
}

.project__item {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
  font-family: var(--font-p);
  font-size: var(--font-size);
  transition-duration: 0.1s;
  margin-top: 10px;
}

@media (max-width: 750px) {
  .project__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .project__list {
    grid-template-columns: repeat(1, 1fr);
  }
}

.project__item:hover {
  background-color: rgb(0, 0, 0, 0.02);
  transition-duration: 0.1s;
}

.project__blurb {
  margin-top: var(--gutter);
}

.project__title {
  font-weight: var(--weight-bold);
}

.project__end {
  padding: 1.5rem 0 1rem 0;
  border-bottom: 1px dashed var(--border-color-light);
}

.project__item:hover img.static {
  display: flex !important;
}
.project__item:hover img.animated {
  display: none !important;
}
</style>
