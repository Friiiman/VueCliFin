<template>
  <div class="project-content">

    <div class="linear linear__left-linear"></div>
    <div class="linear linear__right-linear"></div>

    <div class="project-content__tags">
      <button @click="selectTag(tag)" v-for="tag in tagsList" :key="tag.id" class="project-content__tag">{{
        tag }}</button>
    </div>
    <div class="project-content__cards">
      <article v-for="card in filterList" :key="card.id" class="project-card"
        :class="{ 'project-card--big': card.sizeBig }">
        <img :src="card.imgSrc" alt="project photo" class="project-card__img">
        <svg @click="starButtonChecked(card)" class="project-card__star" :class="{ 'project-card__star--checked': card.checked }" width="36" height="34" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.41625 1.8541C9.01495 0.0114827 11.6218 0.0114808 12.2205 1.8541L13.237 4.98278C13.5048 5.80682 14.2727 6.36475 15.1392 6.36475H18.4288C20.3663 6.36475 21.1718 8.84398 19.6044 9.98278L16.943 11.9164C16.242 12.4257 15.9487 13.3284 16.2165 14.1525L17.233 17.2812C17.8317 19.1238 15.7228 20.656 14.1553 19.5172L11.4939 17.5836C10.793 17.0743 9.84376 17.0743 9.14279 17.5836L6.48138 19.5172C4.91395 20.656 2.80499 19.1238 3.40369 17.2812L4.42026 14.1525C4.68801 13.3284 4.39469 12.4257 3.69372 11.9164L1.03231 9.98278C-0.535117 8.84398 0.270432 6.36475 2.20788 6.36475H5.49756C6.36402 6.36475 7.13193 5.80682 7.39968 4.98278L8.41625 1.8541Z" fill="#FFA928"/>
        </svg>
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
    },

    starButtonChecked (card) {
      card.checked = !card.checked
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
