$(document).ready(function(){
	$('button').on('click',function(){
		$.ajax('detail.html',{
			success: function(response){
				$('.detail').html(response).fadeIn();
			},
			error: function(request, errorType, errorMessage){
				alert("Error type: "+errorType+" Error message: "+errorMessage);
			},
			timeout: 3000
		});
	});
});