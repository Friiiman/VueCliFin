<template>
  <section class="projects">

    <div class="linear linear__left-linear"></div>
    <div class="linear linear__right-linear"></div>

    <div class="projects__description">
      <h2 class="projects__title">Follow Our Projects</h2>
      <p class="projects__text">It is a long established fact that a reader will be distracted by the
        of
        readable content of page lookings at its layouts points.
      </p>
    </div>
    <div class="projects__project-cards">

      <article class="projects-card" v-for="card in cards" :key="card.id">
        <img :src="card.imgSrc" alt="project photo" class="projects-card__img">
        <div class="projects-card__description">
          <div class="projects-card__text">
            <h3 class="projects-card__title">{{ card.name }}</h3>
            <p class="projects-card__type">{{ card.type }}</p>
          </div>
          <router-link to="/projectDetails" class="projects-card__link">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 19.0001L9 10.0001L1 1.00006" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </router-link>
        </div>
      </article>

    </div>
  </section>
</template>

<script>

export default {
  name: 'IndexProjects',

  data () {
    return {
      cards: [
        {
          imgSrc: 'styles/img/project-card-imgs/project-photo1.jpg',
          name: 'Modern Kitchan',
          type: 'Decor / Artchitecture'
        },
        {
          imgSrc: 'styles/img/project-card-imgs/project-photo2.jpg',
          name: 'Modern Kitchan',
          type: 'Decor / Artchitecture'
        },
        {
          imgSrc: 'styles/img/project-card-imgs/project-photo3.jpg',
          name: 'Modern Kitchan',
          type: 'Decor / Artchitecture'
        },
        {
          imgSrc: 'styles/img/project-card-imgs/project-photo4.jpg',
          name: 'Modern Kitchan',
          type: 'Decor / Artchitecture'
        }
      ]
    }
  }
}
</script>
