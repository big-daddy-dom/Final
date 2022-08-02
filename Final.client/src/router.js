import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard, authSettled } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: loadPage('AboutPage')
  // },
  {
    path: '/profiles/:id',
    name: 'Profile',
    component: loadPage('ProfilePage'),
    beforeEnter: authGuard,
  },
  {

    path: '/vaults/:id',
    name: 'Vault',
    component: loadPage('VaultPage'),
    beforeEnter: authGuard,
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
 

]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
