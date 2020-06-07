import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'
import { getRoutesXML } from '@/router/sitemap-router'
import { asyncI18n } from '@/router/lang-router'

Vue.use(Router)
let routes = [
  {
    path: '//',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Index.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    path: '/es',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Index.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    path: '/eus',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Index.vue'),
    metadata: {
      lang: 'eus'
    }
  },
  {
    path: '/es/escuela',
    name: 'escuela',
    component: () => import(/* webpackChunkName: "about" */ '@/views/escuela.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    //add link for retrocompatibility
    path: '/escuela/escuela.php',
    name: 'escuela-old',
    component: () => import(/* webpackChunkName: "about" */ '@/views/escuela.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    path: '/es/fotos',
    name: 'fotos',
    component: () => import(/* webpackChunkName: "about" */ '@/views/fotos.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    //add link for retrocompatibility
    path: '/visita',
    name: 'fotos-old',
    component: () => import(/* webpackChunkName: "about" */ '@/views/fotos.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    path: '/es/galeria',
    name: 'galeria',
    component: () => import(/* webpackChunkName: "about" */ '@/views/fotos.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    path: '/es/unicef',
    name: 'unicef',
    component: () => import(/* webpackChunkName: "about" */ '@/views/unicef.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    //add link for retrocompatibility
    path: '/es/visitavirtual',
    name: 'visitavirtual',
    component: () => import(/* webpackChunkName: "about" */ '@/views/visitavirtual.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    path: '/es/jornadas',
    name: 'jornadas',
    component: () => import(/* webpackChunkName: "about" */ '@/views/jornadas.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    //add link for retrocompatibility
    path: '/jornadas/jornadas.php',
    name: 'jornadas-old',
    component: () => import(/* webpackChunkName: "about" */ '@/views/jornadas.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    //add link for retrocompatibility
    path: '/actividades/actividades.php',
    name: 'actividades-old',
    component: () => import(/* webpackChunkName: "about" */ '@/views/actividades.vue'),
    metadata: {
      lang: 'es'
    }
  },
  /*
  {
    path: '//es/contacto/citaprevia',
    name: 'citaprevia',
    component: () => import('@/views/citaprevia.vue'),
    metadata: {
      lang: 'es'
    }
  },
  */
  {
    path: '/es/contacto',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '@/views/contact.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    //add link for retrocompatibility
    path: '/contacto/contacto.php',
    name: 'contact-old',
    component: () => import(/* webpackChunkName: "about" */ '@/views/contact.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    path: '/es/legal/aviso',
    name: 'legal',
    component: () => import(/* webpackChunkName: "about" */ '@/views/legal/aviso.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    //add link for retrocompatibility
    path: '/avisolegal/avisolegal.php',
    name: 'legal-old',
    component: () => import(/* webpackChunkName: "about" */ '@/views/legal/aviso.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    path: '/es/legal/cookies',
    name: 'cookies',
    component: () => import(/* webpackChunkName: "about" */ '@/views/legal/cookies.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    path: '/es/legal/privacidad',
    name: 'privacy',
    component: () => import(/* webpackChunkName: "about" */ '@/views/legal/privacy.vue'),
    metadata: {
      lang: 'es'
    }
  },
  {
    path: '/404',
    name: 'not-found',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/NotFound.vue')
  },
  {
    path: '*',
    name: 'not-found',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/NotFound.vue')
  }
]

// conditional router based on env configuration
if (process.env.VUE_APP_SHOW_WORK_WITH_US == true) {
  routes.push(
    {
      path: '/es/contacto/trabajo',
      name: 'trabajo',
      component: () => import(/* webpackChunkName: "about" */ '@/views/trabajo.vue'),
      metadata: {
        lang: 'es'
      }
    }
  )
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

if (process.env.ENV != "production") {
  console.log(
    getRoutesXML(router, 'http://dolaretxe.es')
  )
}

// add support for async i18n
//asyncI18n(router)

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