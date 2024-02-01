<template>
  <div>
    <PageHeader />
    <main class="page-main">
      <NotFound />
    </main>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import NotFound from '@/components/NotFound.vue'

export default {
  name: 'NotFoundPage',
  components: {
    PageHeader,
    NotFound
  }
}
</script>
