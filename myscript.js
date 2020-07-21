$(document).ready(function(){
	$("img").hover(function(){
		$(this).attr('src','star-1rate.jpeg');
		$(this).prevAll().attr('src','star-1rate.jpeg');
	},function(){
		$('.selected').attr('src','star-1.jpeg');
	});
	$("img").click(function()
	{
		$("img").addClass('selected');
		$(this).removeClass('selected');
		$(this).prevAll().removeClass('selected');
		var val=$(this).attr('id');
		$("#result").text('Thanks for '+val+' star rating...');
	});
});