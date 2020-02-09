
// ref: https://umijs.org/config/
/** 在该文件下配置项目基本参数 */
let env = process.argv[3];
if(env === 'local') {
  env = 'local'
}else if(env === 'master' || env === 'hotfix') {
  env = 'prd'
}else if(/release.?/.test(env)) {
  env = 'test'
}else {
  env = 'dev'
}
// console.log(1111, process.argv.splice(2)[0])
// ref: https://umijs.org/config/
const staticPath = {
  local: "https://lab-oss-dev02.oss-cn-shanghai.aliyuncs.com/xujiang/dr/generalview/static/",
  dev: "https://lab-oss-dev02.oss-cn-shanghai.aliyuncs.com/dr/generalview/static/",
  test: "https://lab-oss-dev02.oss-cn-shanghai.aliyuncs.com/dr/generalview/static/",
  prd: "https://lab-oss-dev02.oss-cn-shanghai.aliyuncs.com/dr/generalview/static/"
};

const publicImgPath = {
  local: "https://lab-oss-dev02.oss-cn-shanghai.aliyuncs.com/xujiang/dr/generalview/images",
  dev: "https://lab-oss-dev02.oss-cn-shanghai.aliyuncs.com/dr/generalview/images",
  test: "https://lab-oss-dev02.oss-cn-shanghai.aliyuncs.com/dr/generalview/images",
  prd: "https://lab-oss-dev02.oss-cn-shanghai.aliyuncs.com/dr/generalview/images"
};

const generalImgPath = {
  local: 'https://lab-oss-dev02.oss-cn-shanghai.aliyuncs.com/xujiang/dr/generalview/images',
  dev: 'https://lab-oss-dev02.oss-cn-shanghai.aliyuncs.com/dr/generalview/images',
  test: 'https://lab-oss-dev02.oss-cn-shanghai.aliyuncs.com/dr/generalview/images',
  prd: 'https://lab-oss-dev02.oss-cn-shanghai.aliyuncs.com/dr/generalview/images'
}

export default {
  // 忽略moment打包多余的文件
  ignoreMomentLocale: true,
  // publicPath: staticPath[env],
  publicPath: '/',
  // css公共路径无效,已提issue
  // cssPublicPath: "https://lab-oss-dev02.oss-cn-shanghai.aliyuncs.com/dr/static/css/",
  targets: { ie: 11 },
  // 开启hash后缀,每次构建后清除缓存
  hash: true,
  treeShaking: true,
  /****** 定义静态文件的cdn路径,注意:配置生产环境后这里需要改成生产环境地址 ******/
  define: {
    "process.env.imgCDN": publicImgPath[env],
    "process.env.generalImgCDN": generalImgPath[env]
  },
  // 输出路径
  outputPath: "/dist",
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      // antd: true,
      // chunks: ['vendors', 'umi'],
      dva: {
        immer: true
      },
      dynamicImport: { webpackChunkName: true },
      title: '趣谈前端',
      dll: true,
      locale: {
        enable: true,
        default: 'zh-CN',
        antd: false   // 不启用antd
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  base: '/',
  exportStatic: {
    htmlSuffix: false
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: '../layouts',
      routes: [
        {
          path: '/home',
          component: './index',
        },
        {
          path: '/welcome',
          component: './Welcome',
        },
        {
          path: '/visualization',
          component: './Visualization',
        },
        {
          path: '/openSource',
          component: './OpenSource',
        },
        {
          path: '/learnPunch',
          component: './LearnPunch',
        },
        {
          path: '/game',
          component: './Game',
        },
        {
          path: '/effectiveness',
          component: './Effectiveness',
        },
        {
          path: '/blog',
          component: './Blog',
        },
        {
          component: './404/index',
        }
      ]
    },
    {
      component: './404/index',
    },
  ],
  // 配置代理
  // proxy: {
  //   '/rest': {
  //     target: 'http://47.100.26.33',
  //     changeOrigin: true
  //   },
  // },
  chainWebpack: function (config, { webpack }) {
    // config.merge({
    //   optimization: {
    //     minimize: true,
    //     splitChunks: {
    //       chunks: 'all',
    //       minSize: 80000,
    //       minChunks: 3,
    //       automaticNameDelimiter: '.',
    //       cacheGroups: {
    //         vendor: {
    //           name: 'vendors',
    //           // test({ resource }) {
    //           //   return /[\\/]node_modules[\\/]/.test(resource);
    //           // },
    //           priority: 10,
    //         },
    //       },
    //     },
    //   }
    // });
  }
}
