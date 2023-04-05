import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _68089dfc = () => interopDefault(import('..\\pages\\app.vue' /* webpackChunkName: "pages/app" */))
const _2ea10fd7 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _357e7934 = () => interopDefault(import('..\\pages\\cau-hoi-thuong-gap.vue' /* webpackChunkName: "pages/cau-hoi-thuong-gap" */))
const _448ca57e = () => interopDefault(import('..\\pages\\chuyen-sau.vue' /* webpackChunkName: "pages/chuyen-sau" */))
const _419cee23 = () => interopDefault(import('..\\pages\\co-ban.vue' /* webpackChunkName: "pages/co-ban" */))
const _6064a296 = () => interopDefault(import('..\\pages\\dang-ky-nhap-hoc.vue' /* webpackChunkName: "pages/dang-ky-nhap-hoc" */))
const _ee3123c4 = () => interopDefault(import('..\\pages\\danh-gia.vue' /* webpackChunkName: "pages/danh-gia" */))
const _4b4c2158 = () => interopDefault(import('..\\pages\\doi-ngu-giao-vien.vue' /* webpackChunkName: "pages/doi-ngu-giao-vien" */))
const _70f9daee = () => interopDefault(import('..\\pages\\gioi-thieu.vue' /* webpackChunkName: "pages/gioi-thieu" */))
const _6cc8dcbc = () => interopDefault(import('..\\pages\\he-thong-nhuong-quyen.vue' /* webpackChunkName: "pages/he-thong-nhuong-quyen" */))
const _1a5915be = () => interopDefault(import('..\\pages\\hinh-anh.vue' /* webpackChunkName: "pages/hinh-anh" */))
const _12a485da = () => interopDefault(import('..\\pages\\khoa-hoc.vue' /* webpackChunkName: "pages/khoa-hoc" */))
const _0883d3c2 = () => interopDefault(import('..\\pages\\lien-he.vue' /* webpackChunkName: "pages/lien-he" */))
const _6f2b5f15 = () => interopDefault(import('..\\pages\\luyen-thi-quoc-te.vue' /* webpackChunkName: "pages/luyen-thi-quoc-te" */))
const _0c55e495 = () => interopDefault(import('..\\pages\\phuong-phap-giao-duc-itl-plus.vue' /* webpackChunkName: "pages/phuong-phap-giao-duc-itl-plus" */))
const _3c2aa4ed = () => interopDefault(import('..\\pages\\su-kien.vue' /* webpackChunkName: "pages/su-kien" */))
const _3b0c6ea9 = () => interopDefault(import('..\\pages\\tin-tuc.vue' /* webpackChunkName: "pages/tin-tuc" */))
const _455ba217 = () => interopDefault(import('..\\pages\\tuyen-dung\\index.vue' /* webpackChunkName: "pages/tuyen-dung/index" */))
const _3377bcc0 = () => interopDefault(import('..\\pages\\uu-dai-va-hoc-bong.vue' /* webpackChunkName: "pages/uu-dai-va-hoc-bong" */))
const _ba6d8382 = () => interopDefault(import('..\\pages\\tuyen-dung\\_id.vue' /* webpackChunkName: "pages/tuyen-dung/_id" */))
const _3dc6276d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _3c0f8625 = () => interopDefault(import('..\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */))

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
    component: _68089dfc,
    name: "app"
  }, {
    path: "/blog",
    component: _2ea10fd7,
    name: "blog"
  }, {
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
    path: "/he-thong-nhuong-quyen",
    component: _6cc8dcbc,
    name: "he-thong-nhuong-quyen"
  }, {
    path: "/hinh-anh",
    component: _1a5915be,
    name: "hinh-anh"
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
    path: "/tin-tuc",
    component: _3b0c6ea9,
    name: "tin-tuc"
  }, {
    path: "/tuyen-dung",
    component: _455ba217,
    name: "tuyen-dung"
  }, {
    path: "/uu-dai-va-hoc-bong",
    component: _3377bcc0,
    name: "uu-dai-va-hoc-bong"
  }, {
    path: "/tuyen-dung/:id?",
    component: _ba6d8382,
    name: "tuyen-dung-id"
  }, {
    path: "/",
    component: _3dc6276d,
    name: "index"
  }, {
    path: "/:slug",
    component: _3c0f8625,
    name: "slug"
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
