<template>
    <div class="articles-news__cards">
        <article class="articles-news-card" v-for="card in articlesNewsCardsSliced" :key="card.id">
            <div class="articles-news-card__image">
                <img :src="card.img" alt="news photo" class="articles-news-card__img">
                <p class="articles-news-card__type">{{ card.type }}</p>
            </div>
            <h3 class="articles-news-card__title">{{ card.name }}</h3>
            <div class="articles-news-card__description">
                <time :datetime="card.dateNums" class="articles-news-card__date">{{ card.dateText }}</time>
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
  name: 'IndexArticlesNewsCard',

  computed: {
    ...mapGetters(['articlesNewsCardsSliced'])
  }
}
</script>
