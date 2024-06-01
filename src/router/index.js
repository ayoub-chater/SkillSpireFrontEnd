import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/logout',
      name: 'lougout',
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/CoursesView.vue')
    },
    {
      path: '/courses/:courseId',
      name: 'course',
      component: () => import('../views/CourseView.vue')
    },

    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/admin/add/:name',
      name: 'add',
      component: () => import('../views/AddView.vue')
    },
    {
      path: '/admin/list/:name',
      name: 'list',
      component: () => import('../views/ListView.vue'),
    },
    {
      path: '/participant/:id',
      name: 'participant',
      component: () => import('../views/ParticipantView.vue'),
    },
    {
      path: '/professor/:id',
      name: 'professor',
      component: () => import('../views/ProfessorView.vue'),
    },
    {
      path: '/calandar',
      name: 'calandar',
      component: () => import('../views/CalandarView.vue')
    },
  ]
})

export default router
