<template>
  <section class="blog-articles-news">

    <div class="linear linear__left-linear"></div>
    <div class="linear linear__right-linear"></div>

    <h2 class="blog-articles-news__title">Articles & News</h2>
    <div class="blog-articles-news__content">

      <BlogArticlesNewsCard />

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
  </section>
</template>

<script>
import BlogArticlesNewsCard from '@/components/BlogArticlesNewsCard.vue'

export default {
  name: 'BlogArticlesNews',
  components: {
    BlogArticlesNewsCard
  }
}
</script>
