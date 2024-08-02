const { createProxyMiddleware } = require('http-proxy-middleware');

// https://create-react-app.dev/docs/proxying-api-requests-in-development/
module.exports = function (app) {
    app.use(
        ['/workflow_modelview'],
        createProxyMiddleware({
            target: 'http://tmp1.lx.aiminis.com',
            changeOrigin: true,
        })
    );

    app.use(
        ['**/api/**', '/myapp', '/login', '/idex'],
        createProxyMiddleware({
            target: 'http://tmp1.lx.aiminis.com',
            changeOrigin: true,
        })
    );
};