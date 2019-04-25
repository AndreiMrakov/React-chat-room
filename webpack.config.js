var path = require("path");

module.exports = {
	entry: path.join(__dirname, "./src/index.js"),
	output: {
		path: path.join(__dirname, "output"),
		filename: "bundle.js",
	},
	devServer: {
		contentBase: path.join(__dirname, "output"),
		port: 8080,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: path.join(__dirname,"node_modules"),
				options: {
					presets: ["env","react"]
				}
			}
		]
	},
	mode: "development",
}