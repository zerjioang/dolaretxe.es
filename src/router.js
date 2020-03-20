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
      path: '/es/actividades',
      name: 'actividades',
      component: () => import(/* webpackChunkName: "about" */ '@/views/actividades.vue'),
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
      path: '/es/contacto/citaprevia',
      name: 'citaprevia',
      component: () => import('@/views/citaprevia.vue'),
      metadata: {
        lang: 'es'
      }
    },
    */
    {
      path: '/es/contacto/trabajo',
      name: 'trabajo',
      component: () => import(/* webpackChunkName: "about" */ '@/views/trabajo.vue'),
      metadata: {
        lang: 'es'
      }
    },
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
      path: '*',
      name: 'not-found',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/NotFound.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
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

function getRoutesList(routes, pre) {
  return routes.reduce((array, route) => {
    const path = `${pre}${route.path}`;

    if (route.path !== '*') {
      array.push(path);
    }

    if (route.children) {
      array.push(...getRoutesList(route.children, `${path}/`));
    }

    return array;
  }, []);
}

function getRoutesXML() {
  const list = getRoutesList(router.options.routes, 'https://zigamiklic.com')
    .map(route => `<url><loc>${route}</loc></url>`)
    .join('\r\n');
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${list}
  </urlset>`;
}

// getRoutesList(router.options.routes, 'https://www.dolaretxe.es');
// getRoutesXML();

export default router;