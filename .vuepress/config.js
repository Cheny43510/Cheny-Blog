module.exports = {
  title: "NisLand's Blog",
  description: "NisLand's Blog",
  dest: "public",
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?591e4dedbc99415d51d0533277f99546";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "文档",
        icon: "reco-message",
        items: [
          {
            text: "vuepress-reco",
            link: "/docs/theme-reco/",
          },
        ],
      },
      {
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/NisLand43510",
            icon: "reco-github",
          },
        ],
      },
    ],
    pagation: {
      prev: '上一页',
      next: '下一页',
      go: '前往',
      jump: '跳转至'
    },
    // "sidebar": sideBar.createSideBar(),
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
      // {
      //   "title": "午后南杂",
      //   "desc": "Enjoy when you can, and endure when you must.",
      //   "email": "1156743527@qq.com",
      //   "link": "https://www.recoluan.com"
      // },
      // {
      //   "title": "vuepress-theme-reco",
      //   "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      //   "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
    logo: "/logo.jpg",
    search: true,
    searchMaxSuggestions: 10,
    // 子侧边栏
    subSidebar: "auto",
    sidebarDepth: 1,
    lastUpdated: "更新时间",
    author: "夜屿",
    authorAvatar: "/avatar.jpg",
    record: "NisLand's Blog",
    startYear: "2020",
  },
  markdown: {
    lineNumbers: true,
  }
}
