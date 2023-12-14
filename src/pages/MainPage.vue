<template>
    <div>
        <PageHeader />
        <main class="page-main">
            <IndexPromo />
            <IndexProjects />
            <IndexAbout />
            <IndexArticlesNews />
        </main>
        <PageFooter />
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import IndexPromo from '@/components/IndexPromo.vue'
import IndexAbout from '@/components/IndexAbout.vue'
import IndexProjects from '@/components/IndexProjects.vue'
import IndexArticlesNews from '@/components/IndexArticlesNews.vue'

export default {
  name: 'MainPage',
  components: {
    PageHeader,
    PageFooter,
    IndexPromo,
    IndexProjects,
    IndexAbout,
    IndexArticlesNews
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped></style>
