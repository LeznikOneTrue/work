document.addEventListener("DOMContentLoaded", function() {

//   	jQuery(".slider").owlCarousel({
//  		loop: false,
//  		autoplay: false,
//  		autoplayTimeout: 3000,
//  		autoplaySpeed: 3000,
//  		autoWidth: false,
//  		items: 1,
//  		nav: true

 		
//   })

	$('.js-lang').on('click', function () {
		if ($(this).hasClass('ua')) {
			$(this).removeClass('ua')
			$(this).addClass('eng')
		}
		else {
			$(this).removeClass('eng')
			$(this).addClass('ua')
		}
	})

	$('.js-open-search').on('click', function() {
		if ($('.search').hasClass('active')) {
			$('.search').removeClass('active')
			$('.search').animate({
				top: '0%'
			}, 0);
		}
		else {
			$('.menuToggle').css('display', 'none')
			$('.menu_wrapper').css('display', 'none')
			$('.search').animate({
				top: '100%'
			}, 0, function() {
				$('.search').addClass('active');
			});
		}
	});

	$('.js-about').hover(function () {
		$('.menuToggle').css('display', 'block')
		$('.menu_wrapper').css('display', 'none')
		$('.menu_wrapper.about').css('display', 'flex')
		$('.search').removeClass('active');
		$('.search').animate({
			top: '0%'
		}, 0)
	})

	$('.js-news').hover(function () {
		$('.menuToggle').css('display', 'block')
		$('.menu_wrapper').css('display', 'none')
		$('.menu_wrapper.news').css('display', 'flex')
		$('.search').removeClass('active');
		$('.search').animate({
			top: '0%'
		}, 0)
	})

	$('.js-activity').hover(function () {
		$('.menuToggle').css('display', 'block')
		$('.menu_wrapper').css('display', 'none')
		$('.menu_wrapper.activity').css('display', 'flex')
		$('.search').removeClass('active');
		$('.search').animate({
			top: '0%'
		}, 0)
	})
	
	$('.js-market').hover(function () {
		$('.menuToggle').css('display', 'block')
		$('.menu_wrapper').css('display', 'none')
		$('.menu_wrapper.market').css('display', 'flex')
		$('.search').removeClass('active');
		$('.search').animate({
			top: '0%'
		}, 0)
	})

	$('.js-new').hover(function () {
		$('.menuToggle').css('display', 'block')
		$('.menu_wrapper').css('display', 'none')
		$('.menu_wrapper.new').css('display', 'flex')
		$('.search').removeClass('active');
		$('.search').animate({
			top: '0%'
		}, 0)
	})

	$(document).mouseup(function (e) {
		var div = $('.header');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			$('.menuToggle').css('display', 'none')
			$('.menu_wrapper').css('display', 'none')
			$('.search').removeClass('active');
			$('.search').animate({
				top: '0%'
			}, 0);
		}
	});

	if ($('.header').on('mouseleave', function() {
		$('.menuToggle').css('display', 'none')
		$('.menu_wrapper').css('display', 'none')
		$('.search').removeClass('active');
		$('.search').animate({
			top: '0%'
		}, 0);
	}))

	$('.count').on('mouseenter', function () {
    	$('.count_info').hide();
    	$(this).next('.count_info').show();
    	if ($('.count_info').on('mouseleave', function () {
            $(this).hide();
        	})
    	);
	});

	$('.mobile-menu_button').on('click', function () {
		$(this).toggleClass('active')
		$('.mobile-menu').slideToggle(300)
		$('.header').toggleClass('active')
	})


	$('.mobile-menu .menu .link').on('click', function() {
		$(this).find('.menu_wrapper').slideToggle('slow');
		$(this).toggleClass('active');
	})

	$('.js-lang-mobile .lang').on('click', function () {
		$('.js-lang-mobile .lang').removeClass('selected')
		$(this).addClass('selected')
	})

	$('.js-opensearch-mobile').on('click', function () {
		$('.js-toggleinput').toggleClass('active');
	})

	$('.js-closesearch-mobile').on('click', function () {
		$('.js-toggleinput').toggleClass('active');
	})

	$(window).scroll(function (e) {
		if ($('html').scrollTop() > 93) {
			jQuery('.header_wrapper').addClass('scrolled');

		}
		else {
			jQuery('.header_wrapper').removeClass('scrolled');
		}
	})

	$.fancybox.defaults.closeExisting = true;

	jQuery(".slider").owlCarousel({
 		loop: true,
 		autoplay: true,
 		autoplayTimeout: 4000,
 		autoplaySpeed: 4000,
 		autoWidth: false,
 		items: 1,
 		nav: false,
 		dots: false,
 		mouseDrag: !1,
        touchDrag: !1,
        animateOut: 'animate__fadeOut',
    	animateIn: 'animate__fadeIn',

 	 })

	jQuery(".events").owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplaySpeed: 700,
		autoWidth: false,
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],

 	 })

	var o = $('.count_time');
    var cc = 1;

    if (o.length > 0) {
        include('js/jquery.countTo.js');

        $(window).scroll(function(){
            var targetPos = o.offset().top;
            var winHeight = $(window).height();
            var scrollToElem = targetPos - winHeight;
            var winScrollTop = $(this).scrollTop();

            if (winScrollTop > scrollToElem) {
                if (cc < 2){

                    cc = cc + 2;
                    $(document).ready(function () {
                        $(o).countTo();
                    });
                }
            }
        });
    }

    function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

	// $('.count_time').countTo();

	wow = new WOW(
      {
        animateClass: 'animated',
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
	wow.init();
	
	$('.js-nightdaymode').on('click', function () {
		$('body').toggleClass('nm')
	})

	$('.calendar_days-item').on('click', function() {
		$('.calendar_days-item').removeClass('active');
		$(this).toggleClass('active');
	})

	$('.filter_letters span').on('click', function() {
		$('.filter_letters span').removeClass('active');
		$(this).toggleClass('active');
	})
	
	$('.calendar_title').on('click', function () {
		$(this).siblings('.calendar_wrapper').slideToggle();
		$(this).toggleClass('active');
	})

	$('.js-togglecalendar').on('click', function () {
		$(this).siblings('.calendar_wrapper').toggleClass('active');
	})

	$('.filter_top').on('click', function () {
		$('.filter_wrapper').toggleClass('active');
		$('.filter').toggleClass('active');
	})

	$('.select').styler();

});