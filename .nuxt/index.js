import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_61becae9 from 'nuxt_plugin_plugin_61becae9' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_axios_8a2ed6e8 from 'nuxt_plugin_axios_8a2ed6e8' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_antdui_2b2dca90 from 'nuxt_plugin_antdui_2b2dca90' // Source: ..\\plugins\\antd-ui (mode: 'all')
import nuxt_plugin_vueagile_b9ada17e from 'nuxt_plugin_vueagile_b9ada17e' // Source: ..\\plugins\\vue-agile (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const store = null
  const router = await createRouter(ssrContext, config, { store })

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Trung tâm toán học URI","htmlAttrs":{"lang":"vi"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Tìm hiểu các khóa học toán độc quyền tại trung tâm toán học UriEdu, giúp con em bạn tiếp thu kiến thức một cách nhanh chóng và hiệu quả. Đăng ký ngay hôm nay để nhận ưu đãi giảm giá"},{"name":"format-detection","content":"telephone=no"},{"name":"keywords","content":"trung tam uri,uri, trung tâm toán học, học toán, khóa học toán, giảm giá, ưu đãi"},{"property":"og:title","content":"Trung tâm toán học URI"},{"property":"og:image","content":"\u002Fimages\u002Flogo-meta.png"},{"property":"og:url","content":"http:\u002F\u002Furiedu.vn"},{"property":"og:site_name","content":"Trung tâm toán học URI"},{"property":"og:description","content":"Tìm hiểu các khóa học toán độc quyền tại trung tâm toán học URI, giúp con em bạn tiếp thu kiến thức một cách nhanh chóng và hiệu quả. Đăng ký ngay hôm nay để nhận ưu đãi giảm giá"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fimages\u002Flogo-meta.png"}],"script":[{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.1.1.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.1.1.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpopper.js\u002F1.14.3\u002Fumd\u002Fpopper.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Fbootstrap\u002F4.1.3\u002Fjs\u002Fbootstrap.min.js","type":"text\u002Fjavascript"},{"src":"\u002Fjs\u002Fjquery\u002Fjquery.min.js","type":"text\u002Fjavascript"},{"src":"\u002Fjs\u002Fjquery\u002Fjquery-migrate.min.js","type":"text\u002Fjavascript"},{"src":"\u002Fplugins\u002Fcontact-form-7\u002Fincludes\u002Fswv\u002Fjs\u002Findex.js","type":"text\u002Fjavascript"},{"src":"\u002Fplugins\u002Fcontact-form-7\u002Fincludes\u002Fjs\u002Findex.js","type":"text\u002Fjavascript"},{"src":"\u002Fplugins\u002Fewww-image-optimizer\u002Fincludes\u002Flazysizes.min.js","type":"text\u002Fjavascript"},{"src":"\u002Fplugins\u002Fsitepress-multilingual-cms\u002Fres\u002Fjs\u002Fcookies\u002Flanguage-cookie.js","type":"text\u002Fjavascript"},{"src":"\u002Fplugins\u002Fwp-rocket\u002Fassets\u002Fjs\u002Flazyload\u002F17.5\u002Flazyload.min.js","type":"text\u002Fjavascript"},{"src":"\u002Fplugins\u002Fwp-rocket\u002Fassets\u002Fjs\u002Fheartbeat.js","type":"text\u002Fjavascript"},{"src":"\u002Fplugins\u002Fwpcf7-recaptcha\u002Fassets\u002Fjs\u002Fwpcf7-recaptcha-controls.js","type":"text\u002Fjavascript"},{"src":"\u002Fscripts\u002Fmodules\u002Fdefault.js","type":"text\u002Fjavascript"},{"src":"\u002Fscripts\u002Fmona-frontend.js","type":"text\u002Fjavascript"},{"src":"\u002Fjs\u002Finline-script.js","type":"module"},{"src":"\u002Ftemplate\u002Fjs\u002Fmain.js","type":"module"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002FsimplePagination.js\u002F1.6\u002Fjquery.simplePagination.min.js?a","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fanime\u002Fanime.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Faos\u002Faos.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fcountup\u002Fjquery.counterup.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fcountup\u002Fjquery.waypoints.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fdatetime\u002Fdaterangepicker.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fdatetime\u002Fmoment.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fgallery\u002Flightgallery-all.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fisotope\u002Fisotope.pkgd.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fmagnific\u002Fjquery.magnific-popup.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fpopper\u002Fpopper.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fselect2\u002Fselect2.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fslick\u002Fslick.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fsmoothscroll\u002FSmoothScroll.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fswiper\u002Fswiper-bundle.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fvanilla\u002Fvanilla.js","type":"text\u002Fjavascript"},{"src":"\u002Ftemplate\u002Fjs\u002Flibrary\u002Fwow\u002Fwow.min.js","type":"text\u002Fjavascript"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_61becae9 === 'function') {
    await nuxt_plugin_plugin_61becae9(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_8a2ed6e8 === 'function') {
    await nuxt_plugin_axios_8a2ed6e8(app.context, inject)
  }

  if (typeof nuxt_plugin_antdui_2b2dca90 === 'function') {
    await nuxt_plugin_antdui_2b2dca90(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueagile_b9ada17e === 'function') {
    await nuxt_plugin_vueagile_b9ada17e(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
