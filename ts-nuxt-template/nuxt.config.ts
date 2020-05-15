const packageconfig = require('./package')
const {serBaseUrl} = require('./config/server.url.conf')
export default {
    head: {
        title: 'nuxt ts template',
        meta: [
            {charset: 'utf-8'},
            {hid: 'description', name: 'description', content: 'this is template , nuxt , typescript , element'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    loading: {color: '#10a9e9'},
    buildModules: ['@nuxt/typescript-build'],
    modules: [
        '@gauseen/nuxt-proxy'
    ],
    proxyTable: {
        '/apiproxy': {
            target: serBaseUrl,
            ws: false,
            pathRewrite: {
                '/apiproxy': ''
            }
        }
    },
    plugins: [
        {src: '~/plugins/element-ui'},
        {src: '~/plugins/filters'}
    ],
    css: [
        {src: 'element-ui/lib/theme-chalk/index.css', lang: 'css'},
        {src: '~/assets/sass/index.scss', lang: 'scss'}
    ],
    srcDir: 'src/',
    dir: {
        assets: 'assets',
        components: 'components',
        layouts: 'layouts',
        middleware: 'middleware',
        pages: 'pages',
        static: 'static',
        store: 'store',
        plugins: 'plugins'
    },
    styleResources: {
        scss: ['~/assets/sass/style.scss', '~/assets/sass/mixin.scss']
    },
    // Build configuration
    build: {
        extractCSS: !(process.env.NODE_ENVS === 'DEV'),
        extend (config: any, ctx: any) {
            if (ctx.isDev && ctx.isClient) {
                require('./src/method/spritesmith')(config)
            }
        }
    },
    env: {
        NODE_ENVS: process.env.NODE_ENVS,
        NODE_ENV: process.env.NODE_ENVS === 'DEV' ? 'development' : 'production'
    },
    server: {
        port: (packageconfig.config && packageconfig.config.nuxt && packageconfig.config.nuxt.port) || 3080,
        host: (packageconfig.config && packageconfig.config.nuxt && packageconfig.config.nuxt.host) || '0.0.0.0'
    }
}
