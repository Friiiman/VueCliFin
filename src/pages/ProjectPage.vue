<template>
    <div>
        <PageHeader />
        <main class="page-main">
            <ProjectPromo />
            <ProjectContent />
        </main>
        <PageFooter />
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import ProjectPromo from '@/components/ProjectPromo.vue'
import ProjectContent from '@/components/ProjectContent.vue'

export default {
  name: 'ProjectPage',
  components: {
    PageHeader,
    PageFooter,
    ProjectPromo,
    ProjectContent
  }
}
</script>
