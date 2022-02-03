const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	mode: "none",

	/**
	 * entry
	 * bundle할 시작파일을 설정
	 * 단일, 다중으로 Entry를 설정할 수 있다
	 *
	 * 단일: entry: "./src/index.js"
	 *
	 * 다중: entry: {index: "./src/index.js", component: "./src/component.js"}
	 *
	 **/
	entry: "./src/index.js",

	/**
	 * output
	 * filename은 필수, path는 옵션
	 *
	 * filename options
	 * [name].bundle.js => 결과파일 이름에 entry 속성을 포함
	 * [id].bundle.js => 결과파일 이름에 웹팩 내부적으로 사용하는 모듈 ID를 포함하는 옵션
	 * [name].[hash].bundle.js => 결과파일 이름에 고유 해시 값을 붙이는 옵션
	 * [chunkhash].bundle.js => 결과파일 이름에 웹팩의 각 모듈 내용을 기준으로 생생된 해시 값을 붙이는 옵션
	 *
	 **/
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},

	/**
	 * loader
	 * rules라는 Array에 객체 추가로 loader 설정
	 * test => loader를 적용할 파일 유형(일반적으로 정규식 사용)
	 * use => 적용할 loader 설정 (** 오른쪽에서 왼쪽순으로 loader를 적용)
	 *
	 * loader는 파일을 해석하고 변환하는 과정에 관여
	 **/
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		],
	},

	/**
	 * plugin
	 * 생성자 함수로 생성된 객체 인스턴스만 추가 할 수 있다
	 * webpack site에 다양한 plugin 소개 => https://webpack.js.org/plugins/
	 * webpack site에 없는 plugin도 많음 => https://github.com/webpack-contrib/webpack-bundle-analyzer
	 *
	 * plugin은 웹팩의 결과물의 형태를 변환하는 역할
	 **/
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
		new webpack.ProgressPlugin(),
		// new BundleAnalyzerPlugin()
	],

	/**
	 * webpack-dev-server
	 * HMR(Hot Module Replacement)를 지원해서 수정한 파일이 실시간적용
	 * webpack serve 명령어로 실행. 파일로 생성되지 않고 메모리에 저장되기 때문에 빌드된 결과 파일을 생성하지 않음
	 *
	 * port option 외, 많은 기능 option으로 제공 https://webpack.js.org/configuration/dev-server/
	 *
	 * devtool(source map) => 빌드한 파일과 원본 파일을 서로 연결시켜주는 옵션 https://webpack.js.org/configuration/devtool/#devtool
	 **/
	devServer: {
		port: 8080
	},
	devtool: "eval-cheap-module-source-map"
}