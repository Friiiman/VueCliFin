<template>
  <div>
    <PageHeader />
    <main class="page-main">
      <BlogDetailsPromo />
      <BlogDetailsContent />
    </main>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import BlogDetailsPromo from '@/components/BlogDetailsPromo.vue'
import BlogDetailsContent from '@/components/BlogDetailsContent.vue'

export default {
  name: 'BlogDetailsPage',
  components: {
    PageHeader,
    PageFooter,
    BlogDetailsPromo,
    BlogDetailsContent
  }
}
</script>
