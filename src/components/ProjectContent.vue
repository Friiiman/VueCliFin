<template>
  <div class="project-content">

    <div class="linear linear__left-linear"></div>
    <div class="linear linear__right-linear"></div>

    <div class="project-content__tags">
      <button @click='selectTag(tag)' v-for="tag in tagsList" :key="tag.id" class="project-content__tag">{{
        tag }}</button>
    </div>
    <div class="project-content__cards">
      <article v-for="card in filterList" :key="card.id" class="project-card"
        :class="{ 'project-card--big': card.sizeBig }">
        <img :src="card.imgSrc" alt="project photo" class="project-card__img">
        <div class="project-card__description">
          <div class="project-card__text">
            <h3 class="project-card__title">{{ card.name }}</h3>
            <p class="project-card__type">{{ card.type }}</p>
          </div>
          <router-link to="/projectDetails" class="project-card__link">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 19.0001L9 10.0001L1 1.00006" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </router-link>
        </div>
      </article>
    </div>
    <div class="pagination">
      <button class="pagination__item pagination__item--selected">01</button>
      <button class="pagination__item">02</button>
      <button class="pagination__item">03</button>
      <button class="pagination__item">
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.7715 14.9529L7.71435 8.26717L1.7715 1.58145" stroke="#292F36" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProjectContent',

  data () {
    return {
      selectedTag: 'Bedroom',
      currentTagButton: '',
      tagsList: ['Bathroom', 'Bedroom', 'Kitchan', 'Living Area']
    }
  },

  methods: {
    selectTag (tag) {
      if (this.currentTagButton) {
        this.currentTagButton.target.classList.remove('project-content__tag--active')
        event.target.classList.add('project-content__tag--active')
        this.currentTagButton = event
      } else {
        event.target.classList.add('project-content__tag--active')
        this.currentTagButton = event
      }
      this.selectedTag = tag
    }
  },

  computed: {
    ...mapGetters(['projectCards']),

    filterList () {
      return this.projectCards.filter((element) =>
        element.tag.includes(this.selectedTag)
      )
    }
  }
}
</script>
