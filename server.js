var config = require("./webpack.config.js");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

config.entry.app.unshift("webpack-dev-server/client?http://localhost:9000/", "webpack/hot/dev-server");

var conpiler = webpack(config);
var server = new WebpackDevServer(conpiler, {
	hot: true,
	quiet: false,
	stats: {
		colors: true
	}
});

server.listen(9000, 'localhost', function() {
	console.log('the server start http://localhost:9000');
});