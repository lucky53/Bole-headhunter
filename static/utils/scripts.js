jQuery(document).ready(function() {
    //Smooth scrolling with links
    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
    $(function() {
            $('#main-menu').smartmenus({
                subMenusSubOffsetX: 1,
                subMenusSubOffsetY: -8
            });
        });
    /*
    $(window).on('resize load', function() {
       var windowHeight = $(window).height();
       $('.right-side-popup-form .dropdown-menu .box-div ').css('height',windowHeight/1.5)
    });*/

    /*$('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });*/

    $(".main-footer .mob-FM-toggle").click(function() {
        $(this).parent('h4').next('.footer-menu').slideToggle();
        $(this).toggleClass('active');
    });

    $("#open-popup-form").click(function(e) { 
        e.preventDefault();
        setTimeout(function() {
            $(".right-side-popup-form").addClass("open");
        }, 10);
    });
    $("#open-popup-form-new").click(function(e) { 
        e.preventDefault();
        setTimeout(function() {
            $(".right-side-popup-form").addClass("open");
        }, 10);
    });
    
    $(".open-popup-form-class").click(function(e) { console.log("test");
        e.preventDefault();
        setTimeout(function() {
            $(".right-side-popup-form").addClass("open");
        }, 10);
    });

    var popupdivs = document.getElementsByClassName("open-popup-form-class");
        $(popupdivs).each(function() {
            $( this ).addClass( "foo" );
            $( this ).click(function(e) {
                e.preventDefault();
                setTimeout(function() {
                    $(".right-side-popup-form").addClass("open");
                }, 10);
            });
        });
   

        
    $('.file-choose-div input[type=file]').change(function(){ 
        var filename = $(this).val();
        $(this).next('.file-name-text').text(filename);
        //alert(filename);
    });
 
    if($('.home-4tab-section .nav li .mob-tab-content').text().length == 0 ){
        if($('.home-4tab-section .nav li').hasClass('active')){
            var dataContentID = $('.home-4tab-section .nav li').attr('data-contentid');
            var contentHTML = $('#'+dataContentID).html(); 
            $(this).find('.mob-tab-content').html(contentHTML);
        }
    }
    $(".home-4tab-section .nav li").click(function() {
        var dataContentID = $(this).attr('data-contentid');
        var contentHTML = $('#'+dataContentID).html(); 
        $(this).find('.mob-tab-content').html(contentHTML);
    });

    $(".horizontal-tabs .nav li").click(function() {
        var dataContentID = $(this).attr('data-contentid');
        var contentHTML = $('#'+dataContentID).html(); 
       // alert(contentHTML);
       $(this).find('.mob-tab-content').html(contentHTML);
    });

    
    $("a.close-side-popup").click(function() {
        $(".right-side-popup-form .dropdown-btn").dropdown("toggle");
    });

    $('.right-side-popup-form .dropdown-menu').click(function(e) {
        e.stopPropagation();
    });
    // if ($('#counter').length) {
    //     var a = 0;
    //     $(window).scroll(function() {

    //         var oTop = $('#counter').offset().top - window.innerHeight;
    //         if (a == 0 && $(window).scrollTop() > oTop) {
    //             $('.counter-value').each(function() {
    //                 var $this = $(this),
    //                     countTo = $this.attr('data-count');
    //                 $({
    //                     countNum: $this.text()
    //                 }).animate({
    //                         countNum: countTo
    //                     },

    //                     {

    //                         duration: 2000,
    //                         easing: 'swing',
    //                         step: function() {
    //                             $this.text(Math.floor(this.countNum));
    //                         },
    //                         complete: function() {
    //                             $this.text(this.countNum);
    //                             //alert('finished');
    //                         }

    //                     });
    //             });
    //             a = 1;
    //         }

    //     });

    // }

    if ($('#counter').length) {
        $('.counter-value').counterUp({
            delay: 10,
            time: 1000
        });
    }
    
    var swiper = new Swiper('.swiper-container.swiper-slider-col5', {
        loop:false,
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-col5-next',
            prevEl: '.swiper-col5-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        
        breakpoints: {
            1199: {
                slidesPerView: 5,
                spaceBetween: 25,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }
    });


    var swiper = new Swiper('.home-banner-section .swiper-container', {
        loop:false,
        noSwiping: true,
        navigation: false,
        autoplay:false,
    });


    var swiper = new Swiper('.swiper-slider-other .swiper-container', {

        slidesPerView: 4,
        spaceBetween: 30,
        speed: 2000,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            }
        }

    });

    var swiper = new Swiper('.swiper-slider-four-column .swiper-container', {

        slidesPerView: 4,
        spaceBetween: 30,
        speed: 2000,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1140: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            }
        }

    });

    var galleryThumbs = new Swiper('.testimonials-section .left-slider', {
        simulateTouch: false,
        shortSwipes: false,

        spaceBetween: 0,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
        shortSwipes: false,
        slideToClickedSlide: true,
        preventClicksPropagation: false,
        preventClicks: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-testimonial-next',
            prevEl: '.swiper-testimonial-prev',
        },

    });

    var galleryThumbsText = new Swiper('.testimonials-section .copy-slider', {
        simulateTouch: false,
        shortSwipes: false,
        allowTouchMove: false,
        spaceBetween: 0,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-testimonial-next',
            prevEl: '.swiper-testimonial-prev',
        },


    });

    var galleryTop = new Swiper('.testimonials-section .right-slider', {
        spaceBetween: 0,
        simulateTouch: false,
        shortSwipes: false,
        allowTouchMove: false,
        shortSwipes: false,
        slideToClickedSlide: true,
        preventClicksPropagation: false,
        preventClicks: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-testimonial-next',
            prevEl: '.swiper-testimonial-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
 
    var swiper = new Swiper('.client-logos-section .swiper-container', {
        slidesPerView: 6,
        slidesPerColumn: 1,
        loop:true,
        spaceBetween: 0,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 6,
            },
            991: {
                slidesPerView: 6,
            },
            767: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 2,
            }
        }

    });



    var swiper = new Swiper('.swiper-container-double-row', {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 30,
                slidesPerColumn: 1,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            }
        }
    });


    var swiper = new Swiper('.swiper-slider-service .swiper-container', {

        slidesPerView: 4,
        spaceBetween: 30,
        speed: 2000,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            }
        }

    });

        var swiper = new Swiper('.swiper-col3-slider-custom .swiper-container', {

        slidesPerView: 3,
        spaceBetween: 50,
        speed: 2000,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            }
        }

    });

    var swiperourteam = new Swiper('.swiper-slider-our-team .swiper-container', {

        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            }
        }

    });

    $(".home .hr-outsourcing-section .swiper-container").each(function(elem, target){
        var swp = target.swiper;
        $(this).hover(function() {
            swp.autoplay.stop();
        }, function() {
            swp.autoplay.start();
        });
    });

    if($(window).width() <= 991){
        var swiper = new Swiper('.recruitment-service-journey .swiper-container', {
                loop: true,
                slidesPerView: 2,
                spaceBetween: 30,
                autoplay: {
                            delay: 3000,
                            disableOnInteraction: false,
                        },
                pagination: {
                    el: '.recruitment-service-swiper-pagination',
                    clickable: false,
                    renderBullet: function(index, className) {
                        return '<div class="number ' + className + '"><span>' + (index + 1) + '</span></div>';
                    },
                },
                autoplayDisableOnInteraction:true,
                breakpoints: {
                    991: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    }
                }
            });
    }
    if( $(window).width() > 991 ) {
        var swiper = new Swiper('.recruitment-service-journey .swiper-container', {
                loop: true,
                slidesPerView: 4,
                spaceBetween: 30,
                touchRatio: 0,
                pagination: {
                    el: '.recruitment-service-swiper-pagination',
                    clickable: false,
                    renderBullet: function(index, className) {
                        return '<div class="number ' + className + '"><span>' + (index + 1) + '</span></div>';
                    },
                },
                autoplayDisableOnInteraction:true,
                breakpoints: {
                    991: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    }
                }
            }); 
    }
    jQuery(window).resize(_.debounce(function() {
       if($(window).width() <= 991){
            var swiper = new Swiper('.recruitment-service-journey .swiper-container', {
                loop: true,
                slidesPerView: 4,
                spaceBetween: 30,
                autoplay: {
                            delay: 3000,
                            disableOnInteraction: false,
                        },
                pagination: {
                    el: '.recruitment-service-swiper-pagination',
                    clickable: false,
                    renderBullet: function(index, className) {
                        return '<div class="number ' + className + '"><span>' + (index + 1) + '</span></div>';
                    },
                },
                autoplayDisableOnInteraction:true,
                breakpoints: {
                    991: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    }
                }
            });
        }
        if($(window).width() > 991){
               var swiper = new Swiper('.recruitment-service-journey .swiper-container', {
                loop: true,
                slidesPerView: 4,
                spaceBetween: 30,
                touchRatio: 0,
                pagination: {
                    el: '.recruitment-service-swiper-pagination',
                    clickable: false,
                    renderBullet: function(index, className) {
                        return '<div class="number ' + className + '"><span>' + (index + 1) + '</span></div>';
                    },
                },
                autoplayDisableOnInteraction:true,
                breakpoints: {
                    991: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    }
                }
            }); 
        }
    }, 200));
    
     var swiper = new Swiper('.swiper-container-3d', {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 0,  
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
         
    });
    
    $(window).on('resize load', function() {
        if ($(window).width() < 767) { 
            $('.horizontal-tabs .nav li a[href^="#"]').on('click', function(event) {
                var target = $(this.getAttribute('href'));
                 
                if( target.length ) {
                    event.preventDefault();
                    setTimeout(function(){ 
                        $('html, body').stop().animate({
                            scrollTop: target.offset().top-110
                        }, 1000);
                    }, 200);
                    
                }
            }); 
            
              // alert('Less than 767');
            }
            else {
                $('.horizontal-tabs .nav li a[href^="#"]').on('click', function(event) {
                var target = $(this.getAttribute('href'));
                 
                if( target.length ) {
                    event.preventDefault();
                    setTimeout(function(){ 
                        $('html, body').stop().animate({
                            scrollTop: target.offset().top-260
                        }, 1000);
                    }, 200);
                    
                }
            }); 
             //  alert('More than 767');
            }
            if($('.team-counter').length){
                var slides = document.querySelectorAll('.our-team-section .swiper-slider-col3 .swiper-container .team-counter');
                if(window.innerWidth > 991){
                    if(slides[0].childElementCount == 3){
                        $('.our-team-section .swiper-slider-col3.box-block-with-down-arrow .bottom-arrow').hide();
                    }
                }
                else {
                    $('.our-team-section .swiper-slider-col3.box-block-with-down-arrow .bottom-arrow').show();
                }
            }
         if($('.award-counter').length){
            var award = document.querySelectorAll('.awards-section .swiper-container.swiper-slider-col5 .award-counter');
            if(window.innerWidth > 1199){
                if(award[0].childElementCount == 5){
                    $('.awards-section .swiper-bottom-arrow.swiper-slider-col5 .bottom-arrow').hide();
                }
            }
            else {
                $('.awards-section .swiper-bottom-arrow.swiper-slider-col5 .bottom-arrow').show();
            }
        }
    });
    if($('.team-counter').length){
        var slides = document.querySelectorAll('.our-team-section .swiper-slider-col3 .swiper-container .team-counter');
        if(window.innerWidth > 991){
            if(slides[0].childElementCount == 3){
                $('.our-team-section .swiper-slider-col3.box-block-with-down-arrow .bottom-arrow').hide();
            }
        }
        else {
            $('.our-team-section .swiper-slider-col3.box-block-with-down-arrow .bottom-arrow').show();
        }
    }
    if($('.award-counter').length){
        var award = document.querySelectorAll('.awards-section .swiper-container.swiper-slider-col5 .award-counter');
        if(window.innerWidth > 1199){
            // if(award[0].childElementCount == 5){
                $('.awards-section .swiper-bottom-arrow.swiper-slider-col5 .bottom-arrow').hide();
            // }
        }
        else {
            $('.awards-section .swiper-bottom-arrow.swiper-slider-col5 .bottom-arrow').show();
        }
    }
    if($('.hr-outsourcing-section').length){
        var award = document.querySelectorAll('.hr-outsourcing-section .swiper-slide');
        if(window.innerWidth > 640){
            $('.hr-outsourcing-section .bottom-arrow').hide();
        }
        else {
            $('.hr-outsourcing-section .bottom-arrow').show();
        }
    }
    var swiper = new Swiper('.swiper-container.Cascading-banner', {
        slidesPerView: 2.2,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplayDisableOnInteraction:true,
        breakpoints: {
            991: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }
    }); 
});