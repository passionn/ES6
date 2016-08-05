var webpack = require('webpack');

module.exports = {
	entry: {
		app: ["./index.js"]
	},
	output: {
		path: __dirname,
		filename: "./dist/bundle.js"
	},
	devtool: '#inline-source-map',
	module: {
		loaders: [{
			test: /\.js|\.jsx$/,
			exclude: /node_modules/,
			loader: "babel",
            query: {
                presets:['es2015']
            }
		}]
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: 'bundle.js.map'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};