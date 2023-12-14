<template>
  <div class="blog-articles-news__cards">
    <article v-for="card in articlesNewsCards" :key="card.id" class="articles-news-card">
      <div class="articles-news-card__image">
        <img :src="card.img" alt="news photo" class="articles-news-card__img">
        <p class="articles-news-card__type">{{ card.type }}</p>
      </div>
      <h3 class="articles-news-card__title">{{ card.name }}</h3>
      <div class="articles-news-card__description">
        <time :datetime="card.date" class="articles-news-card__date">{{ card.dateExpanded }}</time>
        <router-link to="/blogDetails" class="articles-news-card__link">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.7715 14.9529L7.71435 8.26717L1.7715 1.58145" stroke="#292F36" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </router-link>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ArticlesNewsCards',

  computed: {
    ...mapGetters(['articlesNewsCards'])
  }
}
</script>
