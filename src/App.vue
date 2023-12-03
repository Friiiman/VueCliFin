<template>
  <div id="app">
    <PageHeader />
    <BlogCards />
    <TagsFilter />
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import BlogCards from './components/BlogCards.vue'
import TagsFilter from './components/TagsFilter.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    BlogCards,
    TagsFilter,
    PageFooter
  }
}
</script>

<!-- <style lang="scss"></style> -->
