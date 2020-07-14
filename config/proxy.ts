/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
    dev: {
        '/api/v1': {
            target: 'xxxx',
            ws: false,
            changeOrigin: true,
            pathRewrite: { '^/api/v1': '/api/v1' },
        },
    },
    test: {
        '/api/v1': {
            target: 'xxx',
            ws: false,
            changeOrigin: true,
            pathRewrite: { '^/api/v1': '/api/v1' },
        },
    },
    prod: {
        '/api/v1': {
            target: 'xxx',
            ws: false,
            changeOrigin: true,
            pathRewrite: { '^/api/v1': '/api/v1' },
        },
    },

}
