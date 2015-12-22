require(["jquery"],function($){
	var $header = $("#header");
	var $navIcon = $(".navIcon",$header);
	var $navBox = $(".navBox",$header);
	var $navCloseIcon = $(".navCloseIcon",$header);

	$navIcon.on("click",function(){		
		$navBox.animate({top:0});
	});
	//切换navCloseIcon背景图片
	$navCloseIcon.on("mouseover",function(){		
		$(this).removeClass("navCloseIcon").addClass("navCloseIconIn");
	}).on("mouseout",function(){		
		$(this).removeClass("navCloseIconIn").addClass("navCloseIcon");
	}).on("click",function(){
		$navBox.animate({top:-192});
	});
});