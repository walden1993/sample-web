requirejs.config({
	baseUrl:'js/lib',//����·��
	paths:{
		app:'../app'//app�Զ���js·��
	}
});
 

requirejs(['jquery','canvasjs','app/test'],function($,canvasjs,test){
	test.add(12,2121122)
});