const path = require("path");

module.exports = {
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
	 **/
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	}
}