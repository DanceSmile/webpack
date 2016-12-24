module.exports = {
	entry: "./js/entry.js",
	output: {
		filename: "./build/build.js"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test:/\.js$/,
				loader:"babel",
				exlude:/node_modules/
			}

		]
	},
	babel:{
		"presets":["es2015"]
	},
	devtool:"source-map",
	devServer:{
		'port':8080,
		'inline':true,
		'hot':true
	},
	reslove:{
		'extensions':["",".js",".css",".json"]
	}



}