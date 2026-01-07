import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Awesome Project",
  base: "/my-docs/",
  head: [["link", { rel: "icon", href: "/my-docs/favicon.ico" }]],

  description: "A VitePress Site",
  themeConfig: {
    outline: [1, 3],
    logo: "/logo.png",
    nav: [
      { text: '📝 代码片段', link: '/pages/code/HCJ.md' },
      { text: '🚀 公共组件', link: '/pages/component/Vue2.md' },
      { text: '🛠️ 开发问题', link: '/pages/bug/Vue2.md' },
    ],

    sidebar: {
      "/pages/":[
        {
          text: "代码片段",
          items:[
            {
              text: "HCL",
              link: "/pages/code/HCJ.md",
            },
            {
              text: "Vue2",
              link: "/pages/code/Vue2.md",
            },
            {
              text: "Vue3",
              link: "/pages/code/Vue3.md",
            },
            {
              text: "React",
              link: "/pages/code/React.md",
            },
            {
              text: "Uniapp",
              link: "/pages/code/Uniapp.md",
            },
          ]
        },
        {
          text: "公共组件",
          items:[
            {
              text: "Vue2",
              link: "/pages/component/Vue2.md",
            },
            {
              text: "Vue3",
              link: "/pages/component/Vue3.md",
            },
            {
              text: "React",
              link: "/pages/component/React.md",
            },
            {
              text: "Uniapp",
              link: "/pages/component/Uniapp.md",
            },
          ]
        },
        {
          text: "开发问题",
          items:[
            {
              text: "Vue2",
              link: "/pages/bug/Vue2.md",
            },
            {
              text: "Vue3",
              link: "/pages/bug/Vue3.md",
            },
            {
              text: "React",
              link: "/pages/bug/React.md",
            },
            {
              text: "Uniapp",
              link: "/pages/bug/Uniapp.md",
            },
          ]
        }
      ]
    },

    // 新增：搜索配置
    search: {
      provider: 'local', // 本地搜索（无需 Algolia 账号，VitePress 1.0+ 支持）
      options: {
        locales: {
          // 配置中文搜索
          'zh': {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详情',
                noResultsText: '未找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
