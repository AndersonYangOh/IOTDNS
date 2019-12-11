//查询

 
$(document).ready(function() { 
	$("#search .button").click(function() {
		$("#search .button").removeClass("active");
		var a = $(this).addClass("active");
		$("#search_box").attr("placeholder",function(n,v){
			return "请输入" + a.val() +"名称";
		});

	});
	
	$("#btn4").click(function() {
		var a = $(this).addClass("active");
		$("#search_box").attr("placeholder",function(n,v){
			return "请输入" + a.val() +"标识";
		});

	});



	$("#btn1").click(function() { 
		$("#hy").css("display","inline-block");
		$("#dy").css("display","none");
		$("#qy").css("display","none");
		$("#sb").css("display","none");
	});
	$("#btn3").click(function() {
		$("#hy").css("display","none");
		$("#dy").css("display","inline-block");
		$("#qy").css("display","none");
		$("#sb").css("display","none");
	});

	$("#btn2").click(function() {
		$("#qy").css("display","inline-block");
		$("#hy,#dy,#sb").css("display","none");
	});
	$("#btn4").click(function() {
		$("#sb").css("display","inline-block");
		$("#hy,#dy,#qy").css("display","none");
	});


	$("#search_box").focus(function(){
		var b = $(this).attr("placeholder");
		$(this).attr("placeholder","");
		$("#search_box").blur(function(){
  			$(this).attr("placeholder",b);
		});
	});

/*	$("#search_button").click(function(){
		$("#fix_center,#mask").removeClass("box_hidden");
	});*/
	$("#search_button").mouseover(function(){
		$(this).css("background-color","#ceb02b");
	});
	$("#search_button").mouseout(function(){
		$(this).css("background-color","#f2cf32");
	});
	$("#search_button").mousedown(function(){
		$(this).css("background-color","#877c47");
	});



	$("#close").click(function() {
		$("#fix_center,#mask").addClass("box_hidden");
	});

// 箭头动效
	$(function() {

    var usercenter = {

     init:function(){

            this.modal();

     },

        modal: function() {

            $(".arrow,#drop_hy,#drop_dy").click(function(){                            

                if($(".arrow").hasClass("rotate")){ //点击箭头旋转180度

                    $(".arrow").removeClass("rotate");

                    $(".arrow").addClass("rotate1");

                }else{

                    $(".arrow").removeClass("rotate1"); //再次点击箭头回来

                    $(".arrow").addClass("rotate");

                }

            })

           $("#drop_hy,#drop_dy").blur(function(){
  			  $(".arrow").removeClass("rotate"); //再次点击箭头回来
              $(".arrow").addClass("rotate1");
		});
		 

        }

    }

    usercenter.init();

})

});	
