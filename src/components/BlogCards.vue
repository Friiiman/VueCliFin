<template>
    <div class="blog-articles-news__cards">
        <article class="articles-news-card" v-for="card in cards" :key="card.id">
            <div class="articles-news-card__image">
                <img :src="card.img" alt="news photo" class="articles-news-card__img">
                <p class="articles-news-card__type">{{ card.type }}</p>
            </div>
            <h3 class="articles-news-card__title">{{ card.name }}</h3>
            <div class="articles-news-card__description">
                <time :datetime="card.date" class="articles-news-card__date">{{ card.dateExpanded }}</time>
                <a href="blog-details.html" class="articles-news-card__link">
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.7715 14.9529L7.71435 8.26717L1.7715 1.58145" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </article>
    </div>
</template>

<script>
export default {
  name: 'BlogCards',
  data () {
    return {
      cards: [
        {
          img: 'styles/img/articles-news-card/articles-news-card1.jpg',
          type: 'Kitchan Design',
          name: 'Let’s Get Solution For Building Construction Work',
          date: '2022-12-26',
          dateExpanded: '26 December,2022'
        },
        {
          img: 'styles/img/articles-news-card/articles-news-card2.jpg',
          type: 'Living Design',
          name: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '2022-12-22',
          dateExpanded: '22 December,2022'
        },
        {
          img: 'styles/img/articles-news-card/articles-news-card3.jpg',
          type: 'Interior Design',
          name: 'Best For Any Office & Business Interior Solution',
          date: '2022-12-25',
          dateExpanded: '25 December,2022'
        },
        {
          img: 'styles/img/articles-news-card/articles-news-card4.jpg',
          type: 'Kitchan Design',
          name: 'Let’s Get Solution For Building Construction Work',
          date: '2022-12-26',
          dateExpanded: '26 December,2022'
        },
        {
          img: 'styles/img/articles-news-card/articles-news-card5.jpg',
          type: 'Living Design',
          name: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '2022-12-22',
          dateExpanded: '22 December,2022'
        },
        {
          img: 'styles/img/articles-news-card/articles-news-card6.jpg',
          type: 'Interior Design',
          name: 'Best For Any Office & Business Interior Solution',
          date: '2022-12-25',
          dateExpanded: '25 December,2022'
        }
      ]
    }
  }
}
</script>
