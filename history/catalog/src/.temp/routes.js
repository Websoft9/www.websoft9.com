const c1 = () => import(/* webpackChunkName: "page--src--pages--paginate-vue" */ "/data/wwwroot/www.websoft9.com/history/catalog/src/pages/paginate.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--xuwei-vue" */ "/data/wwwroot/www.websoft9.com/history/catalog/src/pages/xuwei.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--product-index-vue" */ "/data/wwwroot/www.websoft9.com/history/catalog/src/pages/product-index.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/data/wwwroot/www.websoft9.com/history/catalog/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/data/wwwroot/www.websoft9.com/history/catalog/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/data/wwwroot/www.websoft9.com/history/catalog/src/pages/Index.vue")

export default [
  {
    path: "/zh/paginate/:page(\\d+)?/",
    component: c1,
    meta: {
      locale: "zh"
    }
  },
  {
    path: "/en/paginate/:page(\\d+)?/",
    component: c1,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/zh/xuwei/",
    component: c2,
    meta: {
      locale: "zh"
    }
  },
  {
    path: "/zh/product-index/",
    component: c3,
    meta: {
      locale: "zh"
    }
  },
  {
    path: "/en/xuwei/",
    component: c2,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/zh/about/",
    component: c4,
    meta: {
      locale: "zh"
    }
  },
  {
    path: "/en/product-index/",
    component: c3,
    meta: {
      locale: "en"
    }
  },
  {
    name: "404__zh",
    path: "/zh/404/",
    component: c5,
    meta: {
      locale: "zh"
    }
  },
  {
    path: "/en/about/",
    component: c4,
    meta: {
      locale: "en"
    }
  },
  {
    name: "404__en",
    path: "/en/404/",
    component: c5,
    meta: {
      locale: "en"
    }
  },
  {
    name: "__zh_slug",
    path: "/zh/:slug+",
    component: c5,
    meta: {
      dataPath: "/zh/_slug_plus.json",
      dynamic: true,
      locale: "zh"
    }
  },
  {
    path: "/paginate/:page(\\d+)?/",
    component: c1,
    meta: {
      locale: "zh"
    }
  },
  {
    name: "__en_slug",
    path: "/en/:slug+",
    component: c5,
    meta: {
      dataPath: "/en/_slug_plus.json",
      dynamic: true,
      locale: "en"
    }
  },
  {
    name: "home__zh",
    path: "/zh/",
    component: c6,
    meta: {
      locale: "zh"
    }
  },
  {
    path: "/xuwei/",
    component: c2,
    meta: {
      locale: "zh"
    }
  },
  {
    path: "/product-index/",
    component: c3,
    meta: {
      locale: "zh"
    }
  },
  {
    name: "home__en",
    path: "/en/",
    component: c6,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/about/",
    component: c4,
    meta: {
      locale: "zh"
    }
  },
  {
    name: "404",
    path: "/404/",
    component: c5,
    meta: {
      locale: "zh"
    }
  },
  {
    name: "home",
    path: "/",
    component: c6,
    meta: {
      locale: "zh"
    }
  },
  {
    name: "*",
    path: "*",
    component: c5,
    meta: {
      locale: "zh"
    }
  }
]
