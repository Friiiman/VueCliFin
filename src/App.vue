<template>
  <div id="app">
    <BlogCards />
    <TagsFilter />
  </div>
</template>

<script>
import BlogCards from './components/BlogCards.vue'
import TagsFilter from './components/TagsFilter.vue'

export default {
  name: 'App',
  components: {
    BlogCards,
    TagsFilter
  }
}
</script>

<!-- <style lang="scss"></style> -->
