$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:3,
		centerMode:true,
		initialSlide:0,
		asNavFor:".sliderbig"
	});

	$('.sliderbig').slick({
		arrows:false,
		fade:true,
		asNavFor:".slider"
	});
});