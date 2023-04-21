import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4ec98355 = () => interopDefault(import('..\\pages\\app.vue' /* webpackChunkName: "pages/app" */))
const _1ffcd59e = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _e4a13e26 = () => interopDefault(import('..\\pages\\cau-hoi-thuong-gap.vue' /* webpackChunkName: "pages/cau-hoi-thuong-gap" */))
const _61cb727a = () => interopDefault(import('..\\pages\\chien-binh-uri-ket-thuc-chang-dua-chung-ket-quoc-te.vue' /* webpackChunkName: "pages/chien-binh-uri-ket-thuc-chang-dua-chung-ket-quoc-te" */))
const _6965c1c8 = () => interopDefault(import('..\\pages\\chuyen-sau.vue' /* webpackChunkName: "pages/chuyen-sau" */))
const _4b1e5e2a = () => interopDefault(import('..\\pages\\co-ban.vue' /* webpackChunkName: "pages/co-ban" */))
const _03a43d78 = () => interopDefault(import('..\\pages\\co-gi-khac-biet-trong-chuong-trinh-hanh-trang-vao-lop-1.vue' /* webpackChunkName: "pages/co-gi-khac-biet-trong-chuong-trinh-hanh-trang-vao-lop-1" */))
const _66f7fc08 = () => interopDefault(import('..\\pages\\dang-ky-nhap-hoc.vue' /* webpackChunkName: "pages/dang-ky-nhap-hoc" */))
const _37ccf865 = () => interopDefault(import('..\\pages\\danh-gia.vue' /* webpackChunkName: "pages/danh-gia" */))
const _f5f79b6c = () => interopDefault(import('..\\pages\\danh-sach-cac-chien-binh-nhi-lot-vao-chung-ket-hkimo.vue' /* webpackChunkName: "pages/danh-sach-cac-chien-binh-nhi-lot-vao-chung-ket-hkimo" */))
const _746e04ed = () => interopDefault(import('..\\pages\\doi-ngu-giao-vien.vue' /* webpackChunkName: "pages/doi-ngu-giao-vien" */))
const _532f2710 = () => interopDefault(import('..\\pages\\gioi-thieu.vue' /* webpackChunkName: "pages/gioi-thieu" */))
const _6a0932bb = () => interopDefault(import('..\\pages\\he-thong-nhuong-quyen.vue' /* webpackChunkName: "pages/he-thong-nhuong-quyen" */))
const _6d82bff6 = () => interopDefault(import('..\\pages\\hinh-anh.vue' /* webpackChunkName: "pages/hinh-anh" */))
const _43b8872f = () => interopDefault(import('..\\pages\\hinh-anh-hoat-dong.vue' /* webpackChunkName: "pages/hinh-anh-hoat-dong" */))
const _b4d9714c = () => interopDefault(import('..\\pages\\khoa-hoc.vue' /* webpackChunkName: "pages/khoa-hoc" */))
const _226aa6f8 = () => interopDefault(import('..\\pages\\lien-he.vue' /* webpackChunkName: "pages/lien-he" */))
const _229aa379 = () => interopDefault(import('..\\pages\\lop-hanh-trang-vao-lop-1.vue' /* webpackChunkName: "pages/lop-hanh-trang-vao-lop-1" */))
const _093f74ae = () => interopDefault(import('..\\pages\\luyen-thi-quoc-te.vue' /* webpackChunkName: "pages/luyen-thi-quoc-te" */))
const _74415cae = () => interopDefault(import('..\\pages\\phuong-phap-giao-duc-itl-plus.vue' /* webpackChunkName: "pages/phuong-phap-giao-duc-itl-plus" */))
const _62d735c6 = () => interopDefault(import('..\\pages\\su-kien.vue' /* webpackChunkName: "pages/su-kien" */))
const _61b8ff82 = () => interopDefault(import('..\\pages\\tin-tuc.vue' /* webpackChunkName: "pages/tin-tuc" */))
const _412090a0 = () => interopDefault(import('..\\pages\\tuyen-dung\\index.vue' /* webpackChunkName: "pages/tuyen-dung/index" */))
const _e29a81b2 = () => interopDefault(import('..\\pages\\uu-dai-va-hoc-bong.vue' /* webpackChunkName: "pages/uu-dai-va-hoc-bong" */))
const _ec3033d0 = () => interopDefault(import('..\\pages\\tuyen-dung\\_id.vue' /* webpackChunkName: "pages/tuyen-dung/_id" */))
const _77e31a86 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _762c793e = () => interopDefault(import('..\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */))

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
    component: _4ec98355,
    name: "app"
  }, {
    path: "/blog",
    component: _1ffcd59e,
    name: "blog"
  }, {
    path: "/cau-hoi-thuong-gap",
    component: _e4a13e26,
    name: "cau-hoi-thuong-gap"
  }, {
    path: "/chien-binh-uri-ket-thuc-chang-dua-chung-ket-quoc-te",
    component: _61cb727a,
    name: "chien-binh-uri-ket-thuc-chang-dua-chung-ket-quoc-te"
  }, {
    path: "/chuyen-sau",
    component: _6965c1c8,
    name: "chuyen-sau"
  }, {
    path: "/co-ban",
    component: _4b1e5e2a,
    name: "co-ban"
  }, {
    path: "/co-gi-khac-biet-trong-chuong-trinh-hanh-trang-vao-lop-1",
    component: _03a43d78,
    name: "co-gi-khac-biet-trong-chuong-trinh-hanh-trang-vao-lop-1"
  }, {
    path: "/dang-ky-nhap-hoc",
    component: _66f7fc08,
    name: "dang-ky-nhap-hoc"
  }, {
    path: "/danh-gia",
    component: _37ccf865,
    name: "danh-gia"
  }, {
    path: "/danh-sach-cac-chien-binh-nhi-lot-vao-chung-ket-hkimo",
    component: _f5f79b6c,
    name: "danh-sach-cac-chien-binh-nhi-lot-vao-chung-ket-hkimo"
  }, {
    path: "/doi-ngu-giao-vien",
    component: _746e04ed,
    name: "doi-ngu-giao-vien"
  }, {
    path: "/gioi-thieu",
    component: _532f2710,
    name: "gioi-thieu"
  }, {
    path: "/he-thong-nhuong-quyen",
    component: _6a0932bb,
    name: "he-thong-nhuong-quyen"
  }, {
    path: "/hinh-anh",
    component: _6d82bff6,
    name: "hinh-anh"
  }, {
    path: "/hinh-anh-hoat-dong",
    component: _43b8872f,
    name: "hinh-anh-hoat-dong"
  }, {
    path: "/khoa-hoc",
    component: _b4d9714c,
    name: "khoa-hoc"
  }, {
    path: "/lien-he",
    component: _226aa6f8,
    name: "lien-he"
  }, {
    path: "/lop-hanh-trang-vao-lop-1",
    component: _229aa379,
    name: "lop-hanh-trang-vao-lop-1"
  }, {
    path: "/luyen-thi-quoc-te",
    component: _093f74ae,
    name: "luyen-thi-quoc-te"
  }, {
    path: "/phuong-phap-giao-duc-itl-plus",
    component: _74415cae,
    name: "phuong-phap-giao-duc-itl-plus"
  }, {
    path: "/su-kien",
    component: _62d735c6,
    name: "su-kien"
  }, {
    path: "/tin-tuc",
    component: _61b8ff82,
    name: "tin-tuc"
  }, {
    path: "/tuyen-dung",
    component: _412090a0,
    name: "tuyen-dung"
  }, {
    path: "/uu-dai-va-hoc-bong",
    component: _e29a81b2,
    name: "uu-dai-va-hoc-bong"
  }, {
    path: "/tuyen-dung/:id?",
    component: _ec3033d0,
    name: "tuyen-dung-id"
  }, {
    path: "/",
    component: _77e31a86,
    name: "index"
  }, {
    path: "/:slug",
    component: _762c793e,
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
