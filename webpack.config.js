var path = require('path');

module.exports = {
	entry: ['@babel/polyfill', './client/index.js'],
	mode: 'production',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		compress: true,
		port: 9000,
	},
	output: {
		path: __dirname,
		filename: './public/bundle.js', // make sure output is bundle.js in public folder
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
