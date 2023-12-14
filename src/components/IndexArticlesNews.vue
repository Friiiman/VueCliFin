<template>
  <section class="articles-news">

    <div class="linear linear__left-linear"></div>
    <div class="linear linear__right-linear"></div>

    <div class="articles-news__description">
      <h2 class="articles-news__title">Articles & News</h2>
      <p class="articles-news__text">It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of using.</p>
    </div>

    <IndexArticlesNewsCard />

  </section>
</template>

<script>
import IndexArticlesNewsCard from '@/components/IndexArticlesNewsCard.vue'
export default {
  name: 'IndexArticlesNews',
  components: {
    IndexArticlesNewsCard
  }
}
</script>
