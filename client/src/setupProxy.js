const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "http://5000-devleejs-boilerplate-t53kf38p9mo.ws-us53.gitpod.io",
			changeOrigin: true,
		})
	)
}

