requirejs.config({
	baseUrl:'js/lib',//基本路径
	paths:{
		app:'../app'//app自定义js路劲
	}
});
 

requirejs(['jquery','canvasjs','app/test'],function($,canvasjs,test){
	test.add(12,2121122)
});