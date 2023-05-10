$(function(){
	
	//팝업
	
	$(window).load(function(){
		$("#popall").fadeIn(800);
	});
	$("#popall span").click(function(){
		$("#popall").hide();
	});
	
	
	/* #topH(헤더) 페이드인&hover */
	$("#topH").fadeIn(800);
	var fill = $(".icon img").css('filter');
	$("#topH").hover(function(){
		
		$(this).stop().animate({'backgroundColor':'rgba(239,230,231,1)'},800);
		$("#nav h4").stop().animate({'color':'#866b56'},800);
		$(".icon img").css('filter','none');
		
	},	function() {
		
		var toTop = $('#slide1').height(); //슬라이드1 높이
		var toScroll = $(window).scrollTop(); // 윈도우 스크롤탑
		
		if ( toScroll < toTop) {
		$(this).stop().animate({'backgroundColor':'rgba(239,230,231,0)'},600);
		$("#nav h4").stop().animate({'color':'#efe6e7'},600);
		$(".icon img").css('filter',fill); }
	});
	
	$(window).scroll(function(){
		var toTop = $('#slide1').height(); //슬라이드1 높이
		var toScroll = $(window).scrollTop(); // 윈도우 스크롤탑
		// .ToTop 페이드인아웃
		if(toScroll > toTop-500) {
			$(".ToTop").fadeIn(1000);
		} else {
			$(".ToTop").fadeOut(1000);
		}
		
		// #TopH 배경색
		if(toScroll > toTop-100) {
			$("#topH").stop().animate({'backgroundColor':'rgba(239,230,231,1)', 'boxShadow':'0 10px 10px #fff'},500);
			$("#nav h4").stop().animate({'color':'#866b56'},500);
			$(".icon img").css('filter','none');
		} else {
			$("#topH").stop().animate({'backgroundColor':'rgba(239,230,231,0)'});
			$("#nav h4").stop().animate({'color':'#efe6e7'});
			$(".icon img").css('filter',fill);
		}
		
		//#slide4 페이드인
		var Fprev = $("#slide4").prev().offset().top;
		if(toScroll>=(Fprev-200)) {
			$("#slide4").animate({'opacity':1},2000);
		}
		
		//#slide5 페이드인
		var Fprev = $("#slide5").prev().offset().top;
		if(toScroll>=(Fprev-200)) {
			$("#slide5").fadeIn(1000);
		}
		
		//footer 페이드인
		var Fprev = $('footer').prev().offset().top;
		if(toScroll>=(Fprev)) {
			$("footer").animate({'opacity':1},1500);
		}	
	});
	
	$(".ToTop").click(function(){
		$('html, body').animate({'scrollTop':0},500);
	});
	
	/* //slide1 마우스휠
	$("#slide1").mousewheel(function(e,d){
		var scrollSize = $(this).height();
		console.log(scrollSize);
		if(d>0) {
			$('html, body').stop().animate({'scrollTop':0},600);
		} else if(d<0) {
			$('html, body').stop().animate({'scrollTop':scrollSize-200},600);
		}
		
	});*/
	
	
	/* slide3 슬라이드 */
	$("#slide3 .block2 ul li").each(function(thidx){
		$(this).css('left',1000*(thidx-1));
		
	});
	
	var imgP = 2;
	var thSlide = $("#slide3 .block2 ul");
	var imgC = thSlide.children().length;
	//console.log($(thSlide).css('left'));
	$("#slide3 .click .Cleft").click(function(){
		imgP--;
		
		$(thSlide).animate({'left':'+=1000px'}, 800, function(){
			if(imgP == 1) {
				$(thSlide).css('left',-1000);
				imgP = 3;
			}
		//console.log($(thSlide).css('left'));
		});
	});
	
	$("#slide3 .click .Cright").click(function(){
		imgP++;
		$(thSlide).animate({'left':'-=1000px'}, 800, function(){
			if(imgP == 4) {
				$(thSlide).css('left',0);
				imgP = 2;
			}
		//console.log($(thSlide).css('left'));	
		});
	});	
	
	// #slide4 hover
	$("#slide4 .BestP .BestP1 a").hover(function(){
		$(this).children('span').fadeIn();
	}, function(){ $(this).children('span').fadeOut(); });
});