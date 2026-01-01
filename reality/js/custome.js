

$(".mobileNavBtn, .overLay").click(function(){
  if ($(this).parents('body').hasClass('openNav')) {
    $(this).parents('body').removeClass('openNav');
  } else {
    $(this).parents('body').addClass('openNav');
  }
});

// if ($(window).width() < 768) {
//   $(".navigation>ul>li>a").click(function(){
//     $('body').removeClass('openNav');
//   });
// }


if ($(window).width() < 1025) {
  $(".hasChild>a").click(function(){
    if ($(this).next('.subMenu').is(':visible')) {
      $(this).next('.subMenu').slideUp();
    } else {
      $(this).next('.subMenu').slideDown();
    }
  });
}

$(window).scroll(function(){
	var top = $(window).scrollTop();
	if (top > 5) {
		$('.header').addClass('fix');
	} else {
		$('.header').removeClass('fix');
	}
});


$(".offers-sec .tab-nav span").click(function(){
  if(!$(this).hasClass('active')) {
    $(".offers-sec .tab-nav span").removeClass('active');
    $(this).addClass('active');
    $(this).parents('.offers-sec').find('.tab-block').slideUp();
    $(this).parents('.offers-sec').find('.tab-block').eq($(this).index()).slideDown();
  }
});

$(".offer-block-tab .title").click(function(){
  if($(this).parent().hasClass('act')){
    $(this).parent().removeClass('act');
    $(this).next().slideUp();
  } else {
    $(".offer-block-tab").removeClass('act');
    $(".offer-block-desc").slideUp();
    $(this).parent().addClass('act');
    $(this).next().slideDown();
  }
})






var $animation_elements = $('.animation');
var $window = $(window);
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('ani');
    } else {
      //$element.removeClass('ani');
    }
  });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');