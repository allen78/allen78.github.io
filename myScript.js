(function(){
	var app = angular.module('portfolio',[]);

	app.controller('ProjectController',function(){
		this.tab = 1;
		this.products = projects;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
})();

$(document).ready(function(){
	$("#photo").mouseenter(function(){
		$(this).attr("src","img/Allen.jpg");
	});
	$("#photo").mouseleave(function(){
		$(this).attr("src","img/AllenSuit.png");
	});
});