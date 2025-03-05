import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHashHistory, type RouteRecordRaw  } from 'vue-router';

const routes = [
  //Landing
  {
    path: '/',
    name: 'landing',
    component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: HomePage,
      },
      {
        path: '/features',
        name: 'featurePage',
        component: () => import('@/modules/landing/pages/FeaturePage.vue'),
      },
      {
        path: '/pricing',
        name: 'pricingPage',
        component: () => import('@/modules/landing/pages/PricingPage.vue'),
      },
      {
        path: '/contact',
        name: 'contactPage',
        component: () => import('@/modules/landing/pages/ContactPage.vue'),
      },
      {
        //:id los argumentos que se reciben por aquí serán strings
        path: '/pokemon/:id',
        name: 'pokemon',
        beforeEnter: [(to, from, next) => {
          return next()
        }],
        component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        props: (route: { params: { id: string; }; }) => {
          const id = Number(route.params.id);
            
          return isNaN(id) ? { id: 1 } : { id } 
        }
      },
    ],
  },

  //Auth
  {
    path: '/auth',
    redirect: { name: 'login' },
    name: 'loginPage',
    component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/modules/auth/pages/LoginPage.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/modules/auth/pages/RegisterPage.vue'),
      },
    ],
  },
  //Not Found
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/modules/common/pages/NotFound404.vue'),
    // redirect: {name: 'home'}
  },
];
  
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

export default router