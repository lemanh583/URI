export const ButtonScroll = () => import('../..\\components\\ButtonScroll.vue' /* webpackChunkName: "components/button-scroll" */).then(c => wrapFunctional(c.default || c))
export const CkeditorNuxt = () => import('../..\\components\\CkeditorNuxt.vue' /* webpackChunkName: "components/ckeditor-nuxt" */).then(c => wrapFunctional(c.default || c))
export const ContactCourse = () => import('../..\\components\\ContactCourse.vue' /* webpackChunkName: "components/contact-course" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const MenuCourse = () => import('../..\\components\\MenuCourse.vue' /* webpackChunkName: "components/menu-course" */).then(c => wrapFunctional(c.default || c))
export const MenuMobile = () => import('../..\\components\\MenuMobile.vue' /* webpackChunkName: "components/menu-mobile" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
