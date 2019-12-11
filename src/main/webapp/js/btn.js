//导航
$(document).ready(function() {
	$(".menu ul a").click(function() {
		$(".menu ul a").removeClass("active-header");
		$(this).addClass("active-header");
	});
});	
//二级导航
// $(document).ready(function() {
// 	$(".menu li:nth-child(2)").mouseover(function() {
// 		$(".second-menu div:nth-child(2n),.second-menu div:nth-child(2n-1)").hide();
// 		$(".second-menu div:nth-child(1)").show();
// 	});
// });	
// $(document).ready(function() {
// 	$(".menu li:nth-child(3)").mouseover(function() {
// 		$(".second-menu div:nth-child(2n),.second-menu div:nth-child(2n-1)").hide();
// 		$(".second-menu div:nth-child(2)").show();
// 	});
// });	

// $(document).ready(function() {
// 	$(".menu li:nth-child(4)").mouseover(function() {
// 		$(".second-menu div:nth-child(2n),.second-menu div:nth-child(2n-1)").hide();
// 		$(".second-menu div:nth-child(3)").show();
// 	});
// });	

// $(document).ready(function() {
// 	$(".menu li:nth-child(5)").mouseover(function() {
// 		$(".second-menu div:nth-child(2n),.second-menu div:nth-child(2n-1)").hide();
// 		$(".second-menu div:nth-child(4)").show();
// 	});
// });	

// $(document).ready(function() {
// 	$(".menu li:nth-child(6)").mouseover(function() {
// 		$(".second-menu div:nth-child(2n),.second-menu div:nth-child(2n-1)").hide();
// 		$(".second-menu div:nth-child(5)").show();
// 	});
// });	

// $(document).ready(function() {
// 	$(".menu li:nth-child(7)").mouseover(function() {
// 		$(".second-menu div:nth-child(2n),.second-menu div:nth-child(2n-1)").hide();
// 		$(".second-menu div:nth-child(6)").show();
// 	});
// });	

// $(document).ready(function() {
// 	$(".menu li:nth-child(8)").mouseover(function() {
// 		$(".second-menu div:nth-child(2n),.second-menu div:nth-child(2n-1)").hide();
// 		$(".second-menu div:nth-child(7)").show();
// 	});
// });	
// $(document).ready(function() {
// 	$(".menu li:nth-child(9)").mouseover(function() {
// 		$(".second-menu div:nth-child(2n),.second-menu div:nth-child(2n-1)").hide();
// 		$(".second-menu div:nth-child(8)").show();
// 	});
// });	
// $(document).ready(function() {
// 	$(".menu li:nth-child(10)").mouseover(function() {
// 		$(".second-menu div:nth-child(2n),.second-menu div:nth-child(2n-1)").hide();
// 		$(".second-menu div:nth-child(9)").show();
// 	});
// });	


//新闻
$(document).ready(function() {
	$(".list-btn-one li a").click(function() {
		$(".list-btn-one li a").removeClass("active-list-btn");
		$(this).addClass("active-list-btn");
	});
});	
$(document).ready(function() {
	$(".list-btn-two li a").click(function() {
		$(".list-btn-two li a").removeClass("active-list-btn");
		$(this).addClass("active-list-btn");
	});
});	

$(document).ready(function() {

	$(".btn-1").on("click", function(e) {
		$(".list-box-one").show();
		$(".list-box-two,.list-box-three").hide();
	});
	$(".btn-2").on("click", function(e) {
		$(".list-box-two").show();
		$(".list-box-one,.list-box-three").hide();
	});
	$(".btn-3").on("click", function(e) {
		$(".list-box-three").show();
		$(".list-box-one,.list-box-two").hide();
	});

	$(".btn-4").on("click", function(e) {
		$(".list-box-four").show();
		$(".list-box-five,.list-box-six").hide();
	});
	$(".btn-5").on("click", function(e) {
		$(".list-box-five").show();
		$(".list-box-four,.list-box-six").hide();
	});
	$(".btn-6").on("click", function(e) {
		$(".list-box-six").show();
		$(".list-box-four,.list-box-five").hide();
	});
});	

//浮窗
$(document).ready(function() {
	$(".close").on("click", function(e) {
		$(".float_right").hide();
	});
});	

//弹窗
$(document).ready(function() {
	$(".WeChat-btn").on("click", function(e) {
		$(".WeChat").show();
	});
	$(".layer-box-close").on("click", function(e) {
		$(".Window-layer").hide();
	});
});	


//phone header
$(document).ready(function() {
	$(".phone-header-btn").click(function() {
		$('.menu').toggleClass('open');
		$('.menu-btn-open').toggleClass('remove');
	});
});	


//文本字符限制
$(function(){
	$(".card-title-one,.card-title-two,.card-title-three").each(function(){
		var maxwidth=20;
		if($(this).text().length>maxwidth){ 
			$(this).text($(this).text().substring(0,maxwidth)); 
			$(this).html($(this).html()+'…');
		}
	});

	$(".list").each(function(){
		var maxwidth=17;
		if($(this).text().length>maxwidth){ 
			$(this).text($(this).text().substring(0,maxwidth)); 
			$(this).html($(this).html()+'…');
		}
	});
	$(".title").each(function(){
		var maxwidth=17;
		if($(this).text().trim().length>maxwidth){ 
			$(this).text($(this).text().trim().substring(0,maxwidth)); 
			$(this).html($(this).html()+'…');
		}
	});
	$(".leader-text").each(function(){
		var maxwidth=115;
		if($(this).text().trim().length>maxwidth){ 
			$(this).text($(this).text().trim().substring(0,maxwidth)); 
			$(this).html($(this).html()+'…');
		}
	});
});

//banner

$(function(){
	
	var i=0;
	var clone=$(".banner-box .banner-img li").first().clone();
	$(".banner-box .banner-img").append(clone);	
	var size=$(".banner-box .banner-img li").size();	
	for(var j=0;j<size-1;j++){
		$(".banner-box .num-banner").append("<li></li>");
	}
	$(".banner-box .num-banner li").first().addClass("on");
	
	
	/*鼠标划入圆点*/
	$(".banner-box .num-banner li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".banner-box .banner-img").stop().animate({left:-index*1004})	
		$(this).addClass("on").siblings().removeClass("on")		
	})
	
	/*自动轮播*/
	// var t=setInterval(function(){
	// 	i++;
	// 	move()
	// },2400)
	
	
	/*对banner定时器的操作*/
	// $(".banner-box").hover(function(){
	// 	clearInterval(t);
	// },function(){
	// 	t=setInterval(function(){
	// 		i++;
	// 		move()
	// 	},2400)
	// })

	/*向左的按钮*/
	$(".banner .btn_l").click(function(){
		i--
		move();	
	})
	
	/*向右的按钮*/
	$(".banner .btn_r").click(function(){
		i++
		move()				
	})

	function move(){
		
		if(i==size){
			$(".banner-box  .banner-img").css({left:0})			
			i=1;
		}
		
		
		if(i==-1){
			$(".banner-box .banner-img").css({left:-(size-1)*1004})
			i=size-2;
		}
		
		$(".banner-box .banner-img").stop().animate({left:-i*1004})	
		
		if(i==size-1){
			$(".banner-box .num-banner li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(".banner-box .num-banner li").eq(i).addClass("on").siblings().removeClass("on")	
		}
	}

})

//新闻轮播1

$(function(){
	
	var i=0;
	var clone=$(".card-one .img-one li").first().clone();
	$(".card-one .img-one").append(clone);	
	var size=$(".card-one .img-one li").size();	
	for(var j=0;j<size-1;j++){
		$(".card-one .num-one").append("<li></li>");
	}
	$(".card-one .num-one li").first().addClass("on");
	
	
	/*鼠标划入圆点*/
	$(".card-one .num-one li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".card-one .img-one").stop().animate({left:-index*324})	
		$(this).addClass("on").siblings().removeClass("on")		
	})
	
	/*自动轮播*/
	// var t=setInterval(function(){
	// 	i++;
	// 	move()
	// },2400)
	
	
	/*对banner定时器的操作*/
	// $(".card-one").hover(function(){
	// 	clearInterval(t);
	// },function(){
	// 	t=setInterval(function(){
	// 		i++;
	// 		move()
	// 	},2400)
	// })

	/*向左的按钮*/
	$(".card-one .btn_l").click(function(){
		i--
		move();	
	})
	
	/*向右的按钮*/
	$(".card-one .btn_r").click(function(){
		i++
		move()				
	})

	function move(){
		
		if(i==size){
			$(".card-one  .img-one").css({left:0})			
			i=1;
		}
		
		
		if(i==-1){
			$(".card-one .img-one").css({left:-(size-1)*324})
			i=size-2;
		}
		
		$(".card-one .img-one").stop().animate({left:-i*324})	
		
		if(i==size-1){
			$(".card-one .num-one li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(".card-one .num-one li").eq(i).addClass("on").siblings().removeClass("on")	
		}
	}

})

//新闻轮播2

$(function(){
	
	var i=0;
	var clone=$(".card-two .img-two li").first().clone();
	$(".card-two .img-two").append(clone);	
	var size=$(".card-two .img-two li").size();	
	for(var j=0;j<size-1;j++){
		$(".card-two .num-two").append("<li></li>");
	}
	$(".card-two .num-two li").first().addClass("on");
	
	
	/*鼠标划入圆点*/
	$(".card-two .num-two li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".card-two .img-two").stop().animate({left:-index*324})	
		$(this).addClass("on").siblings().removeClass("on")		
	})
	
	/*自动轮播*/
	// var t=setInterval(function(){
	// 	i++;
	// 	move()
	// },2800)
	
	
	/*对banner定时器的操作*/
	// $(".card-two").hover(function(){
	// 	clearInterval(t);
	// },function(){
	// 	t=setInterval(function(){
	// 		i++;
	// 		move()
	// 	},2800)
	// })

	/*向左的按钮*/
	$(".card-two .btn_l").click(function(){
		i--
		move();	
	})
	
	/*向右的按钮*/
	$(".card-two .btn_r").click(function(){
		i++
		move()				
	})

	function move(){
		
		if(i==size){
			$(".card-two  .img-two").css({left:0})			
			i=1;
		}
		
		
		if(i==-1){
			$(".card-two .img-two").css({left:-(size-1)*324})
			i=size-2;
		}
		
		$(".card-two .img-two").stop().animate({left:-i*324})	
		
		if(i==size-1){
			$(".card-two .num-two li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(".card-two .num-two li").eq(i).addClass("on").siblings().removeClass("on")	
		}
	}

})

//新闻轮播3

$(function(){
	
	var i=0;
	var clone=$(".card-three .img-three li").first().clone();
	$(".card-three .img-three").append(clone);	
	var size=$(".card-three .img-three li").size();	
	for(var j=0;j<size-1;j++){
		$(".card-three .num-three").append("<li></li>");
	}
	$(".card-three .num-three li").first().addClass("on");
	
	
	/*鼠标划入圆点*/
	$(".card-three .num-three li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".card-three .img-three").stop().animate({left:-index*324})	
		$(this).addClass("on").siblings().removeClass("on")		
	})
	
	/*自动轮播*/
	// var t=setInterval(function(){
	// 	i++;
	// 	move()
	// },2000)
	
	
	/*对banner定时器的操作*/
	// $(".card-three").hover(function(){
	// 	clearInterval(t);
	// },function(){
	// 	t=setInterval(function(){
	// 		i++;
	// 		move()
	// 	},2000)
	// })

	/*向左的按钮*/
	$(".card-three .btn_l").click(function(){
		i--
		move();	
	})
	
	/*向右的按钮*/
	$(".card-three .btn_r").click(function(){
		i++
		move()				
	})

	function move(){
		
		if(i==size){
			$(".card-three  .img-three").css({left:0})			
			i=1;
		}
		
		
		if(i==-1){
			$(".card-three .img-three").css({left:-(size-1)*324})
			i=size-2;
		}
		
		$(".card-three .img-three").stop().animate({left:-i*324})	
		
		if(i==size-1){
			$(".card-three .num-three li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(".card-three .num-three li").eq(i).addClass("on").siblings().removeClass("on")	
		}
	}

})

//5G

$(function(){
	
	var i=0;
	var clone=$(".group-one .img-one li").first().clone();
	$(".group-one .img-one").append(clone);	
	var size=$(".group-one .img-one li").size();	
	for(var j=0;j<size-1;j++){
		$(".group-one .num-one").append("<li></li>");
	}
	$(".card-one .num-one li").first().addClass("on");
	
	
	/*鼠标划入圆点*/
	$(".group-one .num-one li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".group-one .img-one").stop().animate({left:-index*360})	
		$(this).addClass("on").siblings().removeClass("on")		
	})
	
	/*自动轮播*/
	// var t=setInterval(function(){
	// 	i++;
	// 	move()
	// },2400)
	
	
	/*对banner定时器的操作*/
	// $(".card-one").hover(function(){
	// 	clearInterval(t);
	// },function(){
	// 	t=setInterval(function(){
	// 		i++;
	// 		move()
	// 	},2400)
	// })

	/*向左的按钮*/
	$(".group-one .btn_l").click(function(){
		i--
		move();	
	})
	
	/*向右的按钮*/
	$(".group-one .btn_r").click(function(){
		i++
		move()				
	})

	function move(){
		
		if(i==size){
			$(".group-one  .img-one").css({left:0})			
			i=1;
		}
		
		
		if(i==-1){
			$(".group-one .img-one").css({left:-(size-1)*360})
			i=size-2;
		}
		
		$(".group-one .img-one").stop().animate({left:-i*360})	
		
		if(i==size-1){
			$(".group-one .num-one li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(".group-one .num-one li").eq(i).addClass("on").siblings().removeClass("on")	
		}
	}

})

