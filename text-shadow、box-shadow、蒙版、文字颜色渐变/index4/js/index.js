(function(){
	$(window).load(function(){
//		console.log($("figure").get(0).style);
		
		var left = $("figure").width() - 260;
		var top = $("figure").height() - 260;
		var speed1 = 10;
		var speed2 = 10;
		var x = 0;
		var y = 0;
		setInterval(function(){
			x+=speed1;
			y+=speed2;
			$("figure").animate({
				webkitMaskPositionX:x,
				webkitMaskPositionY:y
			},10)
			if(y>=top || y<=0){
				speed2 = - speed2;
			}
			if(x>=left || x<=0){
				speed1 = - speed1;
			}
			
		},10)
		
	})
})(jQuery)
