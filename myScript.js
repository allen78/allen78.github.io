$(document).ready(function(){
	$("#photo").mouseenter(function(){
		$(this).attr("src","img/Allen.jpg");
	});
	$("#photo").mouseleave(function(){
		$(this).attr("src","img/AllenSuit.png");
	});
});