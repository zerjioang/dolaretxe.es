import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Index.vue')
    },
    {
      path: '/escuela',
      name: 'escuela',
      component: () => import(/* webpackChunkName: "about" */ '@/views/escuela.vue')
    },
    {
      //add link for retrocompatibility
      path: '/escuela/escuela.php',
      name: 'escuela-old',
      component: () => import(/* webpackChunkName: "about" */ '@/views/escuela.vue')
    },
    {
      path: '/fotos',
      name: 'fotos',
      component: () => import(/* webpackChunkName: "about" */ '@/views/fotos.vue')
    },
    {
      //add link for retrocompatibility
      path: '/visita',
      name: 'fotos-old',
      component: () => import(/* webpackChunkName: "about" */ '@/views/fotos.vue')
    },
    {
      path: '/unicef',
      name: 'unicef',
      component: () => import(/* webpackChunkName: "about" */ '@/views/unicef.vue')
    },
    {
      //add link for retrocompatibility
      path: '/visitavirtual',
      name: 'visitavirtual',
      component: () => import(/* webpackChunkName: "about" */ '@/views/visitavirtual.vue')
    },
    {
      path: '/jornadas',
      name: 'jornadas',
      component: () => import(/* webpackChunkName: "about" */ '@/views/jornadas.vue')
    },
    {
      //add link for retrocompatibility
      path: '/jornadas/jornadas.php',
      name: 'jornadas-old',
      component: () => import(/* webpackChunkName: "about" */ '@/views/jornadas.vue')
    },
    {
      path: '/actividades',
      name: 'actividades',
      component: () => import(/* webpackChunkName: "about" */ '@/views/actividades.vue')
    },
    {
      //add link for retrocompatibility
      path: '/actividades/actividades.php',
      name: 'actividades-old',
      component: () => import(/* webpackChunkName: "about" */ '@/views/actividades.vue')
    },
    {
      path: '/contacto/citaprevia',
      name: 'citaprevia',
      component: () => import(/* webpackChunkName: "about" */ '@/views/citaprevia.vue')
    },
    {
      path: '/contacto/trabajo',
      name: 'trabajo',
      component: () => import(/* webpackChunkName: "about" */ '@/views/trabajo.vue')
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ '@/views/contact.vue')
    },
    {
      //add link for retrocompatibility
      path: '/contacto/contacto.php',
      name: 'contact-old',
      component: () => import(/* webpackChunkName: "about" */ '@/views/contact.vue')
    },
    {
      path: '/legal/aviso',
      name: 'legal',
      component: () => import(/* webpackChunkName: "about" */ '@/views/legal/aviso.vue')
    },
    {
      //add link for retrocompatibility
      path: '/avisolegal/avisolegal.php',
      name: 'legal-old',
      component: () => import(/* webpackChunkName: "about" */ '@/views/legal/aviso.vue')
    },
    {
      path: '/legal/cookies',
      name: 'cookies',
      component: () => import(/* webpackChunkName: "about" */ '@/views/legal/cookies.vue')
    },
    {
      path: '/legal/privacy',
      name: 'privacy-en',
      component: () => import(/* webpackChunkName: "about" */ '@/views/legal/privacy.vue')
    },
    {
      path: '/legal/privacidad',
      name: 'privacy',
      component: () => import(/* webpackChunkName: "about" */ '@/views/legal/privacy.vue')
    },
    {
      path: '*',
      name: 'not-found',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/NotFound.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// configure router loading mode
router.beforeResolve((to, from, next) => {
  if (to.name) {
      store.commit('appLoading', true)
  }
  next()
})

router.afterEach((to, from) => {
  store.commit('appLoading', false)
})

export default router;