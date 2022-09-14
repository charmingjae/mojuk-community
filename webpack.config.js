const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path'); // 해당 파일의 경로

module.exports = {
	// *==*==*==*==*==*==*==*
	// mode : Webpack mode
	mode: 'development',
	// *==*==*==*==*==*==*==*
	// entry : webpack의 최초 진입점. 웹 어플리케이션의 전반적인 구조 및 정보가 담겨있음
	entry: './src/index.jsx',
	// *==*==*==*==*==*==*==*
	// output: webpack의 빌드 결과
	output: {
		filename: 'bundle.js', // 빌드 결과 파일의 이름
		path: path.resolve(__dirname, './dist') // 해당 파일의 경로. 
	},
	// *==*==*==*==*==*==*==*
	// module : Webpack에서 사용할 module(loader)
	module : {
		rules: [
			{
				// module(loader)를 적용시킬 대상의 정규식
				test: /\.(js|jsx|ts|tsx)$/,
				// 제외 대상
				exclude: /node_modules/,
				// 사용할 loader
				loader: "babel-loader"
			}
		]
	},
	// *==*==*==*==*==*==*==*
	// dev : webpack 개발 서버 설정
	devServer: {
		port: 3000, // Port of devServer - Value is optional
		hot: true // HMR
	},
	// *==*==*==*==*==*==*==*
	// plugins: loader가 할 수 없는 다른 작업을 수행하기 위한 도구
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html' // 기반이 되는 html파일(템플릿)
		})
	],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	}
}