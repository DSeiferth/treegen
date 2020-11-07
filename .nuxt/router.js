import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a0f9cd8c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _c0d16134 = () => interopDefault(import('../pages/links.vue' /* webpackChunkName: "pages/links" */))
const _618a1802 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/treegen/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _a0f9cd8c,
    name: "about"
  }, {
    path: "/links",
    component: _c0d16134,
    name: "links"
  }, {
    path: "/",
    component: _618a1802,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
