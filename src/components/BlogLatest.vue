<template>
    <section class="blog-latest">

        <div class="linear linear__left-linear"></div>
        <div class="linear linear__right-linear"></div>

        <h2 class="blog-latest__title">Latest Post</h2>
        <article class="latest-post-card">
            <img src="styles/img/latest-post-img.jpg" alt="post photo" class="latest-post-card__img">
            <div class="latest-post-card__content">
                <div class="latest-post-card__content-top">
                    <h3 class="latest-post-card__title">Low Cost Latest Invented Interior Designing Ideas</h3>
                    <p class="latest-post-card__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
                        vitae
                        turpis
                        dignissim maximus.posuere in.Contrary to popular belief.</p>
                    <p class="latest-post-card__text">Lorem Ipsum is not simply random text. It has roots in a
                        piece
                        of
                        classica.</p>
                </div>
                <div class="latest-post-card__content-bottom">
                    <time datetime="2022-12-26" class="latest-post-card__date">26 December,2022</time>
                    <a href="blog-details.html" class="latest-post-card__link">
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.7715 14.9529L7.71435 8.26717L1.7715 1.58145" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </article>

    </section>
</template>

<script>
export default {
  name: 'BlogLatest',

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped></style>
