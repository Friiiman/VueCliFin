import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import BlogDetailsPage from '@/pages/BlogDetailsPage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import ProjectDetails from '@/pages/ProjectDetailsPage.vue'
import NotFound from '@/pages/NotFound.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage
    },
    {
      path: '/blogDetails',
      name: 'blogDetails',
      component: BlogDetailsPage
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectPage
    },
    {
      path: '/projectDetails',
      name: 'projectDetails',
      component: ProjectDetails
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
