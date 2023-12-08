<template>
  <div id="app">
    <PageHeader />
    <main class="page-main">
      <!-- <IndexPromo />
      <IndexProjects />
      <IndexAbout />
      <IndexArticlesNews /> -->
      <ProjectPromo />
      <ProjectContent />
    </main>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
// import IndexPromo from './components/IndexPromo.vue'
// import IndexProjects from './components/IndexProjects.vue'
// import IndexAbout from './components/IndexAbout.vue'
// import IndexArticlesNews from './components/IndexArticlesNews.vue'
import ProjectPromo from './components/ProjectPromo.vue'
import ProjectContent from './components/ProjectContent.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    // IndexPromo,
    // IndexProjects,
    // IndexAbout,
    // IndexArticlesNews,
    ProjectPromo,
    ProjectContent
  }
}
</script>
