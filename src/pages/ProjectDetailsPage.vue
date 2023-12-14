<template>
    <div>
        <PageHeader />
        <main class="page-main">
            <ProjectDetailsPromo />
            <ProjectDetailsContent />
            <ProjectDetailsSlider />
        </main>
        <PageFooter />
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import ProjectDetailsPromo from '@/components/ProjectDetailsPromo.vue'
import ProjectDetailsContent from '@/components/ProjectDetailsContent.vue'
import ProjectDetailsSlider from '@/components/ProjectDetailsSlider.vue'

export default {
  name: 'ProjectDetailsPage',
  components: {
    PageHeader,
    PageFooter,
    ProjectDetailsPromo,
    ProjectDetailsContent,
    ProjectDetailsSlider
  }
}
</script>
