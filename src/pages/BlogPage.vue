<template>
    <div>
        <PageHeader />
        <main class="page-main">
            <BlogPromo />
            <BlogLatest />
            <BlogArticlesNews />
        </main>
        <PageFooter />
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import BlogPromo from '@/components/BlogPromo.vue'
import BlogLatest from '@/components/BlogLatest.vue'
import BlogArticlesNews from '@/components/BlogArticlesNews.vue'

export default {
  name: 'BlogPage',
  components: {
    PageHeader,
    PageFooter,
    BlogPromo,
    BlogLatest,
    BlogArticlesNews
  },

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
