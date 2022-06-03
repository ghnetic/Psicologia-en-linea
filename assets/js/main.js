jQuery(function ($) {
    'use strict';
	
        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 350){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
		});

		// Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "1199"
        });
		
		// Others Option For Responsive JS
		$(".others-option-for-responsive .dot-menu").on("click", function(){
			$(".others-option-for-responsive .container .container").toggleClass("active");
		});

		// Top Header Responsive JS
		$(".header-information").on("click", function(){
			$(".top-header-area").toggleClass("active");
		});

		// Search JS
        $(".others-options .search-box i").on("click", function(){
            $(".search-overlay").toggleClass("search-overlay-active");
        });
        $(".search-overlay-close").on("click", function(){
            $(".search-overlay").removeClass("search-overlay-active");
		});
		
		// Home Slides
		$('.home-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			autoplayHoverPause: true,
			autoplay: true,
            items: 1,
            margin: 5,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ]
        });
        $(".home-slides").on("translate.owl.carousel", function(){
            $(".main-slides-content h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-slides-content p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-slides-content .slides-btn .default-btn").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-slides-content .slides-btn .optional-btn").removeClass("animated fadeInUp").css("opacity", "0");
        });
        $(".home-slides").on("translated.owl.carousel", function(){
            $(".main-slides-content h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-slides-content p").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-slides-content .slides-btn .default-btn").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-slides-content .slides-btn .optional-btn").addClass("animated fadeInUp").css("opacity", "1");
		});
		
		// Partner Slides
		$('.partner-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			smartSpeed: 500,
			margin: 30,
			autoplayHoverPause: true,
			autoplay: true,
			
			responsive: {
				0: {
					items: 2
				},
				576: {
					items: 2
				},
				768: {
					items: 4
				},
				1200: {
					items: 6
				}
			}
		});

		// Philosophy Slides
		$('.philosophy-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			autoplayHoverPause: false,
			autoplay: false,
            items: 1,
            margin: 30,
        });
        $(".philosophy-slides").on("translate.owl.carousel", function(){
            $(".philosophy-content h3").removeClass("animated fadeInUp").css("opacity", "0");
            $(".philosophy-content h4").removeClass("animated fadeInUp").css("opacity", "0");
            $(".philosophy-content p").removeClass("animated fadeInUp").css("opacity", "0");
			$(".philosophy-content .philosophy-btn .default-btn").removeClass("animated fadeInUp").css("opacity", "0");
			$(".philosophy-image").removeClass("animated fadeInUp").css("opacity", "0");
        });
        $(".philosophy-slides").on("translated.owl.carousel", function(){
            $(".philosophy-content h3").addClass("animated fadeInUp").css("opacity", "1");
            $(".philosophy-content h4").addClass("animated fadeInUp").css("opacity", "1");
            $(".philosophy-content p").addClass("animated fadeInUp").css("opacity", "1");
			$(".philosophy-content .philosophy-btn .default-btn").addClass("animated fadeInUp").css("opacity", "1");
			$(".philosophy-image").addClass("animated fadeInUp").css("opacity", "1");
		});

		// Products Slides
		$('.products-slides').owlCarousel({
			loop: true,
			nav: true,
			stagePadding: 150,
			dots: false,
            center: true,
			smartSpeed: 500,
			margin: 30,
			autoplayHoverPause: true,
			autoplay: true,
			navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
			responsive: {
				0: {
					items: 1,
					stagePadding: 0,
				},
				576: {
					items: 1,
					stagePadding: 0,
				},
				768: {
					items: 3,
					stagePadding: 0,
				},
				1200: {
					items: 5,
				}
			}
		});

		// Blog Slides
		$('.blog-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			smartSpeed: 500,
			margin: 30,
			autoplayHoverPause: true,
			autoplay: true,
			navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
			responsive: {
				0: {
					items: 1
				},
				576: {
					items: 1
				},
				768: {
					items: 2
				},
				1200: {
					items: 2
				}
			}
		});

		// Clients Slides
		$('.clients-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			smartSpeed: 500,
			margin: 30,
			autoplayHoverPause: true,
			autoplay: true,
			items: 1,
			navText: [
                "<i class='bx bxs-left-arrow'></i>",
                "<i class='bx bxs-right-arrow'></i>"
            ],
		});
		
		// Reviews Slides
		var $imagesSlider = $(".reviews-slides .reviews-feedback>div"),
		$thumbnailsSlider = $(".reviews-thumbnails>div");
		// Images Options
		$imagesSlider.slick({
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			cssEase: 'linear',
			fade: true,
			autoplay: false,
			draggable: true,
			asNavFor: ".reviews-thumbnails>div",
			prevArrow: '.reviews-feedback .prev-arrow',
			nextArrow: '.reviews-feedback .next-arrow'
		});
		// Thumbnails Options
		$thumbnailsSlider.slick({
			speed: 300,
			slidesToShow: 5,
			slidesToScroll: 1,
			cssEase: 'linear',
			autoplay: false,
			centerMode: true,
			draggable: false,
			focusOnSelect: true,
			asNavFor: ".reviews-slides .reviews-feedback>div",
			prevArrow: '.reviews-thumbnails .prev-arrow',
            nextArrow: '.reviews-thumbnails .next-arrow',
		});

		// Popup Video
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		// Tabs
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').on('click', function (g) {
			var tab = $(this).closest('.tab'), 
			index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});

		// FAQ Accordion
        $('.accordion').find('.accordion-title').on('click', function(){
			$(this).toggleClass('active');
			$(this).next().slideToggle('fast');
			$('.accordion-content').not($(this).next()).slideUp('fast');
			$('.accordion-title').not($(this)).removeClass('active');		
		});

		// Subscribe form
		$(".newsletter-form").validator().on("submit", function (event) {
			if (event.isDefaultPrevented()) {
				formErrorSub();
				submitMSGSub(false, "Escriba un correo electrónico válido");
			} 
			else {
				event.preventDefault();
			}
		});
		function callbackFunction (resp) {
			if (resp.result === "success") {
				formSuccessSub();
			}
			else {
				formErrorSub();
			}
		}
		function formSuccessSub(){
			$(".newsletter-form")[0].reset();
			submitMSGSub(true, "Gracias!");
			setTimeout(function() {
				$("#validator-newsletter").addClass('hide');
			}, 4000)
		}
		function formErrorSub(){
			$(".newsletter-form").addClass("animated shake");
			setTimeout(function() {
				$(".newsletter-form").removeClass("animated shake");
			}, 1000)
		}
		function submitMSGSub(valid, msg){
			if(valid){
				var msgClasses = "validation-success";
			} 
			else {
				var msgClasses = "validation-danger";
			}
			$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
		}
		// AJAX MailChimp
		$(".newsletter-form").ajaxChimp({
			url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
			callback: callbackFunction
		});

		// Nice Select JS
		$('select').niceSelect();

		// Odometer JS
        $('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});

		// Products Details Slides
		var $imagesSlider = $(".products-details-slides .products-feedback>div"),
		$thumbnailsSlider = $(".products-thumbnails>div");
		// Images Options
		$imagesSlider.slick({
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			cssEase: 'linear',
			fade: true,
			autoplay: false,
			draggable: true,
			asNavFor: ".products-thumbnails>div",
			prevArrow: '.products-feedback .prev-arrow',
			nextArrow: '.products-feedback .next-arrow'
		});
		// Thumbnails Options
		$thumbnailsSlider.slick({
			speed: 300,
			slidesToShow: 5,
			slidesToScroll: 1,
			cssEase: 'linear',
			autoplay: false,
			centerMode: true,
			draggable: false,
			focusOnSelect: true,
			asNavFor: ".products-details-slides .products-feedback>div",
			prevArrow: '.products-thumbnails .prev-arrow',
            nextArrow: '.products-thumbnails .next-arrow',
		});

		// Count Time 
		function makeTimer() {
			var endTime = new Date("September 26, 2022 17:00:00 PDT");			
			var endTime = (Date.parse(endTime)) / 1000;
			var now = new Date();
			var now = (Date.parse(now) / 1000);
			var timeLeft = endTime - now;
			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }
			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");
		}
		setInterval(function() { makeTimer(); }, 0);

		// Input Plus & Minus Number JS
		$('.input-counter').each(function() {
			var spinner = jQuery(this),
			input = spinner.find('input[type="text"]'),
			btnUp = spinner.find('.plus-btn'),
			btnDown = spinner.find('.minus-btn'),
			min = input.attr('min'),
			max = input.attr('max');
			
			btnUp.on('click', function() {
				var oldValue = parseFloat(input.val());
				if (oldValue >= max) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue + 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});
			btnDown.on('click', function() {
				var oldValue = parseFloat(input.val());
				if (oldValue <= min) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue - 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});
		});
		
        // WOW JS
		$(window).on ('load', function (){
			if ($(".wow").length) { 
				var wow = new WOW({
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       20,          // distance to the element when triggering the animation (default is 0)
				mobile:       true, // trigger animations on mobile devices (default is true)
				live:         true,       // act on asynchronously loaded content (default is true)
				});
				wow.init();
			}
        });

        // Go to Top
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
		
        // Preloader
		$(window).on('load', function() {
			$('.preloader-area').fadeOut();
		});
        
}(jQuery));