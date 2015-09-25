


	$('#ddl-collections').on("click", function() {
		$('.ddlUL').css("display", "block");

	});

	$('.ddlUL').on("mouseleave", function() {
		$('.ddlUL').css("display", "none");
	});

	var feed = new Instafeed({
		get: 'user',
		userId: 301423825,
		accessToken: '301423825.467ede5.382a2fa274864243ba5c161a7818e84a',
		template: '<a href="{{link}}"<div style="display:inline-block;"><img src="{{image}}" /></div></a>',

	});
	feed.run();



