import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _357e7934 = () => interopDefault(import('..\\pages\\cau-hoi-thuong-gap.vue' /* webpackChunkName: "pages/cau-hoi-thuong-gap" */))
const _448ca57e = () => interopDefault(import('..\\pages\\chuyen-sau.vue' /* webpackChunkName: "pages/chuyen-sau" */))
const _419cee23 = () => interopDefault(import('..\\pages\\co-ban.vue' /* webpackChunkName: "pages/co-ban" */))
const _6064a296 = () => interopDefault(import('..\\pages\\dang-ky-nhap-hoc.vue' /* webpackChunkName: "pages/dang-ky-nhap-hoc" */))
const _ee3123c4 = () => interopDefault(import('..\\pages\\danh-gia.vue' /* webpackChunkName: "pages/danh-gia" */))
const _4b4c2158 = () => interopDefault(import('..\\pages\\doi-ngu-giao-vien.vue' /* webpackChunkName: "pages/doi-ngu-giao-vien" */))
const _70f9daee = () => interopDefault(import('..\\pages\\gioi-thieu.vue' /* webpackChunkName: "pages/gioi-thieu" */))
const _12a485da = () => interopDefault(import('..\\pages\\khoa-hoc.vue' /* webpackChunkName: "pages/khoa-hoc" */))
const _0883d3c2 = () => interopDefault(import('..\\pages\\lien-he.vue' /* webpackChunkName: "pages/lien-he" */))
const _6f2b5f15 = () => interopDefault(import('..\\pages\\luyen-thi-quoc-te.vue' /* webpackChunkName: "pages/luyen-thi-quoc-te" */))
const _0c55e495 = () => interopDefault(import('..\\pages\\phuong-phap-giao-duc-itl-plus.vue' /* webpackChunkName: "pages/phuong-phap-giao-duc-itl-plus" */))
const _3c2aa4ed = () => interopDefault(import('..\\pages\\su-kien.vue' /* webpackChunkName: "pages/su-kien" */))
const _3377bcc0 = () => interopDefault(import('..\\pages\\uu-dai-va-hoc-bong.vue' /* webpackChunkName: "pages/uu-dai-va-hoc-bong" */))
const _3dc6276d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cau-hoi-thuong-gap",
    component: _357e7934,
    name: "cau-hoi-thuong-gap"
  }, {
    path: "/chuyen-sau",
    component: _448ca57e,
    name: "chuyen-sau"
  }, {
    path: "/co-ban",
    component: _419cee23,
    name: "co-ban"
  }, {
    path: "/dang-ky-nhap-hoc",
    component: _6064a296,
    name: "dang-ky-nhap-hoc"
  }, {
    path: "/danh-gia",
    component: _ee3123c4,
    name: "danh-gia"
  }, {
    path: "/doi-ngu-giao-vien",
    component: _4b4c2158,
    name: "doi-ngu-giao-vien"
  }, {
    path: "/gioi-thieu",
    component: _70f9daee,
    name: "gioi-thieu"
  }, {
    path: "/khoa-hoc",
    component: _12a485da,
    name: "khoa-hoc"
  }, {
    path: "/lien-he",
    component: _0883d3c2,
    name: "lien-he"
  }, {
    path: "/luyen-thi-quoc-te",
    component: _6f2b5f15,
    name: "luyen-thi-quoc-te"
  }, {
    path: "/phuong-phap-giao-duc-itl-plus",
    component: _0c55e495,
    name: "phuong-phap-giao-duc-itl-plus"
  }, {
    path: "/su-kien",
    component: _3c2aa4ed,
    name: "su-kien"
  }, {
    path: "/uu-dai-va-hoc-bong",
    component: _3377bcc0,
    name: "uu-dai-va-hoc-bong"
  }, {
    path: "/",
    component: _3dc6276d,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
