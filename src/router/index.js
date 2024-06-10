import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../views/CatalogView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/GalleryView.vue')
  },
  {
    path: '/ironworks',
    name: 'ironworks',
    component: () => import('../views/IronworksView.vue')
  },
  {
    path: '/furnitures',
    name: 'furnitures',
    component: () => import('../views/FurnituresView.vue')
  },
  // Admin pages
  {
    path: '/admin/register',
    name: 'admin-register',
    component: () => import('../views/admin/RegisterView.vue')
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('../views/admin/LoginView.vue')
  },
  {
    path: '/admin/:id/inbox',
    name: 'MessagesProfile',
    component: () => import('../views/admin/InboxView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/:id/add/gallery',
    name: 'UploadImage',
    component: () => import('../views/admin/AddGalleryView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/profile/:id',
    name: 'user-profile',
    component: () => import('../views/admin/ProfileView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/:id/add/category',
    name: 'add-category',
    component: () => import('../views/admin/AddCategoryView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/:id/add/furnitures',
    name: 'add-furnitures',
    component: () => import('../views/admin/AddFurnituresView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/:id/add/ironworks',
    name: 'add-ironworks',
    component: () => import('../views/admin/AddIronworksView.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Simple auth check middleware
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isAuthenticated = localStorage.getItem('accessToken') !== null
    if (!isAuthenticated) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
