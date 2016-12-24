module.exports = {
	entry:"./js/entry.js",
	output:{
		filename:"./build/build.js"
	},
	module:{

		loaders:[
			{
				test:/\.css$/,
				loader:"style!css"
			}

		]
	}



}		
