const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
	entry: {
		main: "./src/index.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: {
							minimize: true
						}
					}
				]
			},
			{
				test: /\.sass$/,
				use: [
					"style-loader",
					MiniCssExtractPlugin.loader,
					"css-loader",
					'postcss-loader',
					"sass-loader"
				]
			},
			{
				test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					},
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,

				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images/'
					}
				},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 75
							}
						},
					}],
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),
		new HtmlWebPackPlugin({
			inject: false,
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
};