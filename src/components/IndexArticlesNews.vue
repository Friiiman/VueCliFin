<template>
    <section class="articles-news">

        <div class="linear linear__left-linear"></div>
        <div class="linear linear__right-linear"></div>

        <div class="articles-news__description">
            <h2 class="articles-news__title">Articles & News</h2>
            <p class="articles-news__text">It is a long established fact that a reader will be distracted by the of
                readable content of a page when lookings at its layouts the points of using.</p>
        </div>

        <div class="articles-news__cards">
            <article class="articles-news-card" v-for="card in cards" :key="card.id">
                <div class="articles-news-card__image">
                    <img :src="card.imgSrc" alt="news photo" class="articles-news-card__img">
                    <p class="articles-news-card__type">{{ card.type }}</p>
                </div>
                <h3 class="articles-news-card__title">{{ card.name }}</h3>
                <div class="articles-news-card__description">
                    <time :datetime="card.dateNums" class="articles-news-card__date">{{ card.dateText }}</time>
                    <a href="blog-details.html" class="articles-news-card__link">
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.7715 14.9529L7.71435 8.26717L1.7715 1.58145" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </article>
        </div>

    </section>
</template>

<script>
export default {
  name: 'IndexArticlesNews',

  data () {
    return {
      cards: [
        {
          imgSrc: 'styles/img/articles-news-card/articles-news-card1.jpg',
          type: 'Kitchan Design',
          name: 'Let’s Get Solution For Building Construction Work',
          dateNums: '2022-12-26',
          dateText: '26 December,2022'
        },
        {
          imgSrc: 'styles/img/articles-news-card/articles-news-card2.jpg',
          type: 'Living Design',
          name: 'Low Cost Latest Invented Interior Designing Ideas.',
          dateNums: '2022-12-22',
          dateText: '22 December,2022'
        },
        {
          imgSrc: 'styles/img/articles-news-card/articles-news-card3.jpg',
          type: 'Interior Design',
          name: 'Best For Any Office & Business Interior Solution',
          dateNums: '2022-12-25',
          dateText: '25 December,2022'
        }
      ]
    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped></style>
