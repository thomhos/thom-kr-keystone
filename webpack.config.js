var path = require('path');

module.exports = {
	entry: ['babel-polyfill', './client/scripts/main'],

	output: {
		path: path.join(__dirname, 'public/'),
		filename: 'main.js',
		publicPath: '/'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'stage-0']
				}
			}
		]
	}
};