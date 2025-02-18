(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated slideInDown");
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-plus"></span></div>');
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
		$('.mobile-menu').append('<div class="close-btn"><span class="icon flaticon-cancel-music"></span></div>');
		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	///Side Content Toggle
	if($('.main-header .outer-box .sidebar-btn').length){
		//Show Form
		$('.main-header .outer-box .sidebar-btn').on('click', function(e) {
			e.preventDefault();
			$('body').addClass('side-content-visible');
		});
		//Hide Form
		$('.hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu').on('click', function(e) {
			e.preventDefault();
			$('body').removeClass('side-content-visible');
		});
	}

	//Header Search
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.main-header').addClass('moblie-search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.main-header').removeClass('moblie-search-active');
		});
	}

	//Banner Carousel
	if($('.banner-carousel').length){
		var swiper = new Swiper('.banner-carousel', {
		  loop:true,
		  effect: 'fade',
	      pagination: {
	        el: '.banner-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.prev-slide',
	        prevEl: '.next-slide',
	      },
	    });
	}

	//Products Carousel
	if($('.products-carousel').length){
		var swiper = new Swiper('.products-carousel', {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 30,
			navigation: {
			nextEl: '.next-product',
			prevEl: '.prev-product',
			},
			pagination: {
	          el: '.products-pagination',
	          clickable: true,
	      	},
			breakpoints: {
				600: {
				  slidesPerView: 2,
				},
				768: {
				  slidesPerView: 3,
				},
				1140: {
				  slidesPerView: 4,
				},
			}
	    });
	}

	//Products Carousel
	if($('.related-products-carousel').length){
		var swiper = new Swiper('.related-products-carousel', {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 30,
			navigation: {
			nextEl: '.next-product',
			prevEl: '.prev-product',
			},
			breakpoints: {
				600: {
				  slidesPerView: 1,
				},
				768: {
				  slidesPerView: 2,
				},
				1023: {
				  slidesPerView: 3,
				},
				1200: {
				  slidesPerView: 4,
				},
			}
	    });
	}

	//Services Carousel
	if($('.services-carousel').length){
		var swiper = new Swiper('.services-carousel', {
		  slidesPerView: 1,
		  loop: true,
	      spaceBetween: 30,
	      navigation: {
	        nextEl: '.service-next',
	        prevEl: '.service-prev',
	      },
	       breakpoints: {
	        600: {
	          slidesPerView: 2,
	        },
	        768: {
	          slidesPerView: 2,
	        },
	        1024: {
	          slidesPerView: 3,
	        },
	        1366: {
	          slidesPerView: 4,
	        },
	        1600: {
	          slidesPerView: 5,
	        },
	        1920: {
	          slidesPerView: 6,
	        },
	      }
	    });
	}


	//Services Carousel
	if($('.services-carousel-two').length){
		var swiper = new Swiper('.services-carousel-two', {
		  slidesPerView: 1,
		  loop: true,
	      spaceBetween: 30,
	      navigation: {
	        nextEl: '.service2-next',
	        prevEl: '.service2-prev',
	      },
	       breakpoints: {
	        600: {
	          slidesPerView: 2,
	        },
	        768: {
	          slidesPerView: 2,
	        },
	        1200: {
	          slidesPerView: 3,
	        },
	      }
	    });
	}


	// Testinomials Carousel
	if($('.testimonial-content').length){
		var  testimonial_thumbs = new Swiper('.testimonial-thumbs', {
	      spaceBetween: 100,
	      slidesPerView: 3,
		  breakpoints: {
		  	320: {
	          slidesPerView: 2,
	      	  spaceBetween: 30,
	        },
	        600: {
	          slidesPerView: 3,
	      	  spaceBetween: 50,
	        },
	      }
	    });

	    var testimonial_content = new Swiper('.testimonial-content', {
	      spaceBetween: 0,
	      loop:true,
	      thumbs: {
	        swiper: testimonial_thumbs
	      },
	      pagination: {
	        el: '.testimonial-pagination',
	        clickable: true,
	      },
	    });
	}

	//Testinomials Carousel Two
	if($('.testimonial-carousel-two').length){
		var swiper = new Swiper('.testimonial-carousel-two', {
		  slidesPerView: 1,
		  loop: true,
	      spaceBetween: 0,
	      pagination: {
	        el: '.testimonial-pagination',
	        clickable: true,
	      },
	       breakpoints: {
	        600: {
	          slidesPerView: 1,
	        },
	        768: {
	          slidesPerView: 2,
	        },
	        1200: {
	          slidesPerView: 3,
	        },
	      }
	    });
	}

	//Testinomials Carousel Three
	if($('.testimonial-carousel-three').length){
		var swiper = new Swiper('.testimonial-carousel-three', {
		  slidesPerView: 1,
		  loop: true,
	      spaceBetween: 0,
	      pagination: {
	        el: '.testimonial-pagination',
	        clickable: true,
	      },
	       breakpoints: {
	        600: {
	          slidesPerView: 1,
	        },
	        768: {
	          slidesPerView: 1,
	        },
	        1024: {
	          slidesPerView: 2,
	        }
	      }
	    });
	}

	//Projects Carousel
	if($('.projects-carousel').length){
		var swiper = new Swiper('.projects-carousel', {
		  slidesPerView: 1,
		  loop: true,
	      spaceBetween: 0,
	      navigation: {
	        nextEl: '.project-next',
	        prevEl: '.project-prev',
	      },
	       breakpoints: {
	        600: {
	          slidesPerView: 2,
	        },
	        768: {
	          slidesPerView: 2,
	        },
	        1024: {
	          slidesPerView: 3,
	        },
	        1200: {
	          slidesPerView: 4,
	        },
	      }
	    });
	}

	//News Carousel
	if($('.news-carousel').length){
		var swiper = new Swiper('.news-carousel', {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 30,
			navigation: {
			nextEl: '.next-post',
			prevEl: '.prev-post',
			},
			breakpoints: {
				600: {
				  slidesPerView: 1,
				},
				768: {
				  slidesPerView: 2,
				},
				1140: {
				  slidesPerView: 2,
				},
			}
	    });
	}

	//Clients Carousel
	if($('.clients-carousel').length){
		var swiper = new Swiper('.clients-carousel', {
		  slidesPerView: 1,
		  loop: true,
	      spaceBetween: 0,
	       breakpoints: {
	       	480: {
	          slidesPerView: 1,
	        },
	        600: {
	          slidesPerView: 2,
	        },
	        768: {
	          slidesPerView: 3,
	        },
	        1024: {
	          slidesPerView: 4,
	        },
	        1200: {
	          slidesPerView: 5,
	        },
	      }
	    });
	}


	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}

	// Open modal in AJAX callback
	$('#appointment-btn').on('click', function(event) {
	  event.preventDefault();
	  this.blur();
	  $.get(this.href, function(html) {
	    $(html).appendTo('body').modal({
			clickClose: false,
			fadeDuration: 300,
			fadeDelay: 0.15
	    });
	  });
	});

	//Coming Soon Coundown.
	if($('.cs-countdown').length){
	   $(function(){
		    $('[data-countdown]').each(function() {
		   var $this = $(this), finalDate = $(this).data('countdown');
		   $this.countdown(finalDate, function(event) {
		     $this.html(event.strftime('%D days %H:%M:%S'));
		   });
		 });
		});

	   $('.cs-countdown').countdown('').on('update.countdown', function(event) {
		  var $this = $(this).html(event.strftime('<div><span>%D</span><h6>days</h6></div> <div><span>%H</span><h6>Hours</h6></div> <div><span>%M</span><h6>Minutes</h6></div> <div><span>%S</span><h6>Seconds</h6></div>'));
		});
	}
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block animated fadeInUp');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block animated fadeInUp');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}

	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//MixItup Gallery
	if($('.filter-list').length){
	 	 $('.filter-list').mixItUp();
	 }

	//Product Tabs
	if($('.project-tab').length){
		$('.project-tab .tab-btns .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.project-tab .tab-btns .tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.project-tab .tabs-content .tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true,
				},
				subject: {
					required: true,
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	//Jquery Spinner / Quantity Spinner
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);