import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54a740f6 = () => interopDefault(import('..\\pages\\cau-hoi-thuong-gap.vue' /* webpackChunkName: "pages/cau-hoi-thuong-gap" */))
const _2836d860 = () => interopDefault(import('..\\pages\\chuyen-sau.vue' /* webpackChunkName: "pages/chuyen-sau" */))
const _271afe7c = () => interopDefault(import('..\\pages\\co-ban.vue' /* webpackChunkName: "pages/co-ban" */))
const _c74072d8 = () => interopDefault(import('..\\pages\\dang-ky-nhap-hoc.vue' /* webpackChunkName: "pages/dang-ky-nhap-hoc" */))
const _56ba5606 = () => interopDefault(import('..\\pages\\danh-gia.vue' /* webpackChunkName: "pages/danh-gia" */))
const _bfea5956 = () => interopDefault(import('..\\pages\\doi-ngu-giao-vien.vue' /* webpackChunkName: "pages/doi-ngu-giao-vien" */))
const _12003da8 = () => interopDefault(import('..\\pages\\gioi-thieu.vue' /* webpackChunkName: "pages/gioi-thieu" */))
const _426923f2 = () => interopDefault(import('..\\pages\\khoa-hoc.vue' /* webpackChunkName: "pages/khoa-hoc" */))
const _a8ca5140 = () => interopDefault(import('..\\pages\\lien-he.vue' /* webpackChunkName: "pages/lien-he" */))
const _34dc4316 = () => interopDefault(import('..\\pages\\luyen-thi-quoc-te.vue' /* webpackChunkName: "pages/luyen-thi-quoc-te" */))
const _6a53cf16 = () => interopDefault(import('..\\pages\\phuong-phap-giao-duc-itl-plus.vue' /* webpackChunkName: "pages/phuong-phap-giao-duc-itl-plus" */))
const _27f133a4 = () => interopDefault(import('..\\pages\\su-kien.vue' /* webpackChunkName: "pages/su-kien" */))
const _52a08482 = () => interopDefault(import('..\\pages\\uu-dai-va-hoc-bong.vue' /* webpackChunkName: "pages/uu-dai-va-hoc-bong" */))
const _1e977624 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _54a740f6,
    name: "cau-hoi-thuong-gap"
  }, {
    path: "/chuyen-sau",
    component: _2836d860,
    name: "chuyen-sau"
  }, {
    path: "/co-ban",
    component: _271afe7c,
    name: "co-ban"
  }, {
    path: "/dang-ky-nhap-hoc",
    component: _c74072d8,
    name: "dang-ky-nhap-hoc"
  }, {
    path: "/danh-gia",
    component: _56ba5606,
    name: "danh-gia"
  }, {
    path: "/doi-ngu-giao-vien",
    component: _bfea5956,
    name: "doi-ngu-giao-vien"
  }, {
    path: "/gioi-thieu",
    component: _12003da8,
    name: "gioi-thieu"
  }, {
    path: "/khoa-hoc",
    component: _426923f2,
    name: "khoa-hoc"
  }, {
    path: "/lien-he",
    component: _a8ca5140,
    name: "lien-he"
  }, {
    path: "/luyen-thi-quoc-te",
    component: _34dc4316,
    name: "luyen-thi-quoc-te"
  }, {
    path: "/phuong-phap-giao-duc-itl-plus",
    component: _6a53cf16,
    name: "phuong-phap-giao-duc-itl-plus"
  }, {
    path: "/su-kien",
    component: _27f133a4,
    name: "su-kien"
  }, {
    path: "/uu-dai-va-hoc-bong",
    component: _52a08482,
    name: "uu-dai-va-hoc-bong"
  }, {
    path: "/",
    component: _1e977624,
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
