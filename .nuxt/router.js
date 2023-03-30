import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _59f39eee = () => interopDefault(import('../pages/app.vue' /* webpackChunkName: "pages/app" */))
const _884cff98 = () => interopDefault(import('../pages/cau-hoi-thuong-gap.vue' /* webpackChunkName: "pages/cau-hoi-thuong-gap" */))
const _304b180f = () => interopDefault(import('../pages/chuyen-sau.vue' /* webpackChunkName: "pages/chuyen-sau" */))
const _f780201e = () => interopDefault(import('../pages/co-ban.vue' /* webpackChunkName: "pages/co-ban" */))
const _176b4703 = () => interopDefault(import('../pages/dang-ky-nhap-hoc.vue' /* webpackChunkName: "pages/dang-ky-nhap-hoc" */))
const _a25d9728 = () => interopDefault(import('../pages/danh-gia.vue' /* webpackChunkName: "pages/danh-gia" */))
const _f3213e74 = () => interopDefault(import('../pages/doi-ngu-giao-vien.vue' /* webpackChunkName: "pages/doi-ngu-giao-vien" */))
const _1a147d57 = () => interopDefault(import('../pages/gioi-thieu.vue' /* webpackChunkName: "pages/gioi-thieu" */))
const _bc520bd8 = () => interopDefault(import('../pages/he-thong-nhuong-quyen.vue' /* webpackChunkName: "pages/he-thong-nhuong-quyen" */))
const _4042dc0c = () => interopDefault(import('../pages/hinh-anh.vue' /* webpackChunkName: "pages/hinh-anh" */))
const _1c978361 = () => interopDefault(import('../pages/khoa-hoc.vue' /* webpackChunkName: "pages/khoa-hoc" */))
const _0d7b4e11 = () => interopDefault(import('../pages/lien-he.vue' /* webpackChunkName: "pages/lien-he" */))
const _1b40d087 = () => interopDefault(import('../pages/luyen-thi-quoc-te.vue' /* webpackChunkName: "pages/luyen-thi-quoc-te" */))
const _4d22bb07 = () => interopDefault(import('../pages/phuong-phap-giao-duc-itl-plus.vue' /* webpackChunkName: "pages/phuong-phap-giao-duc-itl-plus" */))
const _4de7dcdf = () => interopDefault(import('../pages/su-kien.vue' /* webpackChunkName: "pages/su-kien" */))
const _4cc9a69b = () => interopDefault(import('../pages/tin-tuc.vue' /* webpackChunkName: "pages/tin-tuc" */))
const _86464324 = () => interopDefault(import('../pages/uu-dai-va-hoc-bong.vue' /* webpackChunkName: "pages/uu-dai-va-hoc-bong" */))
const _60f4b3df = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/app",
    component: _59f39eee,
    name: "app"
  }, {
    path: "/cau-hoi-thuong-gap",
    component: _884cff98,
    name: "cau-hoi-thuong-gap"
  }, {
    path: "/chuyen-sau",
    component: _304b180f,
    name: "chuyen-sau"
  }, {
    path: "/co-ban",
    component: _f780201e,
    name: "co-ban"
  }, {
    path: "/dang-ky-nhap-hoc",
    component: _176b4703,
    name: "dang-ky-nhap-hoc"
  }, {
    path: "/danh-gia",
    component: _a25d9728,
    name: "danh-gia"
  }, {
    path: "/doi-ngu-giao-vien",
    component: _f3213e74,
    name: "doi-ngu-giao-vien"
  }, {
    path: "/gioi-thieu",
    component: _1a147d57,
    name: "gioi-thieu"
  }, {
    path: "/he-thong-nhuong-quyen",
    component: _bc520bd8,
    name: "he-thong-nhuong-quyen"
  }, {
    path: "/hinh-anh",
    component: _4042dc0c,
    name: "hinh-anh"
  }, {
    path: "/khoa-hoc",
    component: _1c978361,
    name: "khoa-hoc"
  }, {
    path: "/lien-he",
    component: _0d7b4e11,
    name: "lien-he"
  }, {
    path: "/luyen-thi-quoc-te",
    component: _1b40d087,
    name: "luyen-thi-quoc-te"
  }, {
    path: "/phuong-phap-giao-duc-itl-plus",
    component: _4d22bb07,
    name: "phuong-phap-giao-duc-itl-plus"
  }, {
    path: "/su-kien",
    component: _4de7dcdf,
    name: "su-kien"
  }, {
    path: "/tin-tuc",
    component: _4cc9a69b,
    name: "tin-tuc"
  }, {
    path: "/uu-dai-va-hoc-bong",
    component: _86464324,
    name: "uu-dai-va-hoc-bong"
  }, {
    path: "/",
    component: _60f4b3df,
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
