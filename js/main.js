// JavaScript Document

(function () {
    "use strict";

    new WOW().init();
    $("a").removeAttr("href");
    $('.main-top-menu').click(function () {
       var $this = $(this);
       if($this.hasClass('active')){
           $this.removeClass('active');
       }else{
           $this.addClass('active');
       }
    });
    $(".form-control").click(function () {
        $(this).parent('.form-group').addClass('active');
    });
    $(".form-control").focusin(function () {
        $(this).parent('.form-group').addClass('active');
    });
    $(".form-control").focusout(function () {
        if ($(this).val().length === 0) {
            $(this).parent('.form-group').removeClass('active');
        } else {

        }
    });
    //circle menu animation     
    $('.center-menu-icon').click(function () {
        var rotate = $(this).attr('data-rotate');
        $(this).css("transform", "rotate(" + (-rotate) + "deg)");
        $(this).parents('.center-menu-circle').css("transform", "translate(-50%,-50%) rotate(" + rotate + "deg)");
    });
    $('.center-menu-icon1').click(function () {
        $('.center-menu-icon2').css("transform", "rotate(180deg)");
        $('.center-menu-icon3').css("transform", "rotate(180deg)");
    });
    $('.center-menu-icon2').click(function () {
        $('.center-menu-icon1').css("transform", "rotate(60deg)");
        $('.center-menu-icon3').css("transform", "rotate(60deg)");
    });
    $('.center-menu-icon3').click(function () {
        $('.center-menu-icon1').css("transform", "rotate(-60deg)");
        $('.center-menu-icon2').css("transform", "rotate(-60deg)");
    });


    //main section 
    setTimeout(function () {
        window.typed2 = new Typed('#typed2', {
            strings: ['<h1>magLabs</h1>'],
            typeSpeed: 70,
            loop: false,
            showCursor: false,
            onComplete: function () {
                $('.contact-link').html('<span>Contact</span>');
                $('.contact-link').addClass('active');
                setTimeout(function () {
                    var typed = new Typed('#typed', {
                        strings: ['<h2>explore <br>our <strong>solutions</strong><br>for your<br><strong>Business</strong></h2>'],
                        typeSpeed: 40,
                        loop: false,
                        showCursor: false,
                    });
                }, 500);

            },
        });

    }, 1100);

    //back home

    $('.page-nav-banner').hover(function () {
        if ($(this).hasClass('about_btn')) {
            $('#about').toggleClass('open_nav');
        }
    });
    $('.page-nav-banner').mouseout(function () {
        if ($(this).hasClass('about_btn')) {
            $('#about').removeClass('open_nav');
        }
    });
    $('#typed, .page-nav-banner, .our-solution-btn').click(function () {
        if($(this).hasClass('about_btn')){
            $('#about').toggleClass('open_nav');
        }else{
            if($(this).hasClass('our-solution-btn')){
                setTimeout(function () {
                    $('.center-menu').css('display','block');
                },100);

                $('.center-menu').css('animation-name','zoomIn');
                $('.about-link').css('display','block');

                setTimeout(function () {
                    if($(window).width() > 1660) {
                        $('.main-right h1').animate({fontSize: "7rem"}, 2000);
                    }
                    if($(window).width() > 1200 && $(window).width() <= 1660) {
                        $('.main-right h1').animate({fontSize: "5.5rem"}, 2000);
                    }
                    var width = $(window).width();
                    $('.center-menu').css({ 'right': '', 'left': '-'+(width/2-150)+'px' }).animate({
                        'left' : '0px'
                    },500);
                }, 800);
                setTimeout(function () {
                    var width = $(window).width();
                    if(width > 1660){
                        $('.about-link').css({ 'top': '-200px', 'left': '-'+(width/2-150)+'px' }).animate({
                            'top' : '0px',
                            'left' : '-16px',
                            'width' : '78px',
                            'height' : '78px'
                        },300);
                    }else if(width > 1024 && width <= 1600){
                        $('.about-link').css({ 'top': '-200px', 'left': '-'+(width/2-150)+'px' }).animate({
                            'top' : '100px',
                            'left' : '-16px',
                            'width' : '78px',
                            'height' : '78px'
                        },300);
                    }else{
                        $('.about-link').css({ 'top': '-200px', 'left': '0px' }).animate({
                            'top' : '55%',
                            'left': '0px',
                            'width' : '48px',
                            'height' : '48px'
                        },300);
                    }
                }, 500);


                $('#digital, #enterprise, #contact, #about, #product').removeClass('active');
                $('body').removeClass('contact_active');
                $(".page-nav-banner.sub-button").removeClass('active');
                $('.main-section').removeClass('inner_page')

                setTimeout(function () {
                    $('.main-left').stop().animate({
                        "height": "140px",
                        "padding-left": "20px",
                        "z-index": 9
                    }, 500, "easeOutSine",function(){
                        $(".bubble").removeClass('animated');
                        $('.bubble').removeAttr('style');
                        $(".bubble").remove();
                    });
                    $('.main-center').stop().delay(500).fadeIn(500);
                    $('.main-center, #typed2, .about-link').stop().delay(500).fadeIn(500);
                }, 400);

                $('.main-left').removeClass('hidden');
                $('#about').removeClass('open_nav');
                $('.our-solution-btn').removeClass('active');
                $('#typed').fadeIn();
            }else{
                $('.center-menu').css('animation-name','');
                setTimeout(function () {
                    $(".main-center").fadeIn()
                        .css({top:"-100%",position:'relative'})
                        .animate({top:"0%"}, 1000, function() {

                        });
                }, 500);
                if($(window).width() > 1200) {
                    $('.main-right h1').animate({fontSize: "5.5rem"}, 1000);
                }
                $('.center-menu-icon1').css("visibility", "visible");
                $('.center-menu-icon2').css("visibility", "visible");
                $('.center-menu-icon3').css("visibility", "visible");
                setTimeout(function () {
                    $('.center-menu-circle').css("transform", "translate(-50%,-50%) rotate(0)");
                    $('.center-menu-icon1').css("transform", "rotate(0deg)");
                    $('.center-menu-icon2').css("transform", "rotate(0deg)");
                    $('.center-menu-icon3').css("transform", "rotate(0deg)");
                }, 2000);
                setTimeout(function () {
                    $('#digital, #enterprise, #contact, #about, #product').removeClass('active');
                }, 300);

                $('body').removeClass('contact_active');
                $(".page-nav-banner.sub-button").removeClass('active');
                $('.main-section').removeClass('inner_page');

                setTimeout(function () {
                    $('.main-left').stop().animate({
                        "height": "140px",
                        "padding-left": "20px",
                        "z-index": 9
                    }, 500, "easeOutSine",function(){
                        $(".bubble").removeClass('animated');
                        $('.bubble').removeAttr('style');
                        $(".bubble").remove();
                    });
                    $('.main-center').stop().delay(500).fadeIn(500);
                    $('.main-center, #typed2, .about-link').stop().delay(500).fadeIn(500);
                }, 400);

                $('.main-left').removeClass('hidden');
                $('#about').removeClass('open_nav');
                $('.our-solution-btn').removeClass('active');
                $('#typed').fadeIn();
            }


        }

    });

    /*about nav*/
    $('.sub-button1').click(function(){
        $('#about').animate({scrollTop:'0'},1000)
    })
    $('.sub-button2').click(function(){
        $('#about').animate({scrollTop:$('#about .bubble-wrap').height()+340},1000)
    })

    $('.sub-button3').click(function(){
        $('#about').animate({scrollTop:($('#about .bubble-wrap').height()+$('#about .bubble-wrap').height()+($('#about .bubble-wrap').height())/2)+200},1000)
    })

    //    contact link
    $('.contact-link').click(function () {
        if($('#contact').hasClass('active')){
            $('.contact-link').html('<span>Contact</span>');
            $('#contact').addClass('active');
            setTimeout(function () {
                $('.main-center').stop().fadeIn(1500);
            },500);

            $('#typed2, .about-link').stop().fadeIn(500);
            $('.main-left').stop().animate({
                "height": "140px",
                "padding-left": "20px",
                "z-index": 9
            }, 500);

            $('#contact').removeClass('active');
            $('body').removeClass('contact_active');

        }else{
            $('.contact-link').html('<span>Back</span>');
            $('#digital, #enterprise, #contact, #about, #product').removeClass('active');
            $('.main-center').stop().fadeOut(500);
            $('.main-center, #typed2, .about-link').stop().fadeOut(500);
            $('.main-left').stop().animate({
                "height": "100%",
                "padding-left": "20px",
                "z-index": 9
            }, 500);

            $('#contact').addClass('active');
            $('body').addClass('contact_active');
            $('#contact .bubble.wow').css("visibility", "hidden");

            setTimeout(function () {
                $('#contact .wow').removeClass('animated');
                $('#contact .wow').removeAttr('style');
                new WOW().init();
            }, 800);

        }

    });

    //  find job
    $('#findJob').click(function () {
        $('#contact-form').stop().fadeOut(500);
        $('#job-form').stop().delay(500).fadeIn(500);
    });
    $('#contact-btn').click(function () {
        $('#job-form').stop().fadeOut(500);
        $('#contact-form').stop().delay(500).fadeIn(500);
    });
    // What is the viewport
    var viewport = 'p';
    var win_wid = $(window).width();
    if (window.matchMedia("(orientation: landscape)").matches && win_wid < 1024) {
        viewport = 'l'
        // you're in LANDSCAPE mode
    }
    $(window).resize(function(){
        if (window.matchMedia("(orientation: landscape)").matches && win_wid < 1024) {viewport = 'l'}
    })


    //   digital
    $('#digital-btn').click(function () {
        // $('.main-center').stop().fadeOut(500);
        $('.main-section').addClass('inner_page');
        if($(window).width() > 1200){
            $('.main-right h1').animate({fontSize: "5rem" }, 1000 );
        }
        setTimeout(function () {
            $(".main-center").fadeIn()
                .css({top:"0%",position:'relative'})
                .animate({top:"-100%"}, 1000, function() {

                });
            $('#digital').addClass('active');
        }, 500);

        $('.about-link').fadeOut(500);
        $('.main-left').stop().animate({
            "height": "100%",
            "padding-left": "20px",
            "z-index": 9
        }, 500);



        var _x_;
        ($(window).width() < 960) ? _x_ = 85 : _x_ = 180; 
        var width = $(window).width();
        var height = $(window).height();
        // screen center position
        var c_x = Math.ceil(width / 2);
        var c_y = Math.ceil(height / 2);
        var offsetTop = 0;
        var offsetTop1, offsetTop2;
        // calculate the max number of bubble (w/h)
        var h_count = Math.ceil((width / (2 * _x_))) * 2;
        var v_count = Math.ceil((height - offsetTop) / _x_) * 2;
        // temp: count of bubble in each row, flag: 1/-1
        var temp1 = 0,
            flag1 = -1;
        var temp2 = 0,
            flag2 = 1;
        // bubble index
        var b_index = 0;
        // calculate row index
        for (var i = 0; i <= h_count; i++) {
            // position for each bubble
            var p_x1 = 0,
                p_x2 = 0,
                p_y = 0;
            // calculate the position
            p_x1 = width / 2 - _x_ * Math.sin(60 * Math.PI / 180) * (i + 1);
            p_x2 = width / 2 + _x_ * Math.sin(60 * Math.PI / 180) * i;
            // temp: 0,1,2,1,0,-1,-2,-1,0,1,2....
            temp1 = (i != 0) ? (temp1 + flag1) : temp1;
            temp2 = (temp2 + flag2);
            if (Math.abs(temp1) >= 1) flag1 = -flag1;
            if (Math.abs(temp2) >= 1) flag2 = -flag2;
            // original Start position of each row(Y Axis)
            offsetTop1 = 0 - (_x_/2) * temp1;
            offsetTop2 = 0 - (_x_/2) * temp2;

            for (var j = 0; j < temp1 + 6; j++) {
                // calculate each bubble's Y position
                p_y = offsetTop1 + _x_ * j;
                $("#digital .bubble-wrap").append("<div id='bubble" + b_index + "' data-wow-duration='0." + (b_index + 0.70) + "s' class='bubble wow zoomIn' style='position:absolute;background:#EAEAEA70;left:" + p_x1 + "px;top:" + p_y + "px;'></div>");
                b_index++;
            }
            // draw bubbles for each row
            for (var j = 0; j < temp2 + 6; j++) {
                // calculate each bubble's Y position
                p_y = offsetTop2 + _x_ * j;
                $("#digital .bubble-wrap").append("<div id='bubble" + b_index + "' data-wow-duration='0." + (b_index + 0.70) + "s' class='bubble wow zoomIn' style='position:absolute;background:#EAEAEA70;left:" + p_x2 + "px;top:" + p_y + "px'></div>");
                b_index++;
            }
        }

        // clone exact position, overlay of Object
        var _id;
        (viewport == 'l') ? _id = 13 : _id = 0; 
        var _id2;
        (viewport == 'l') ? _id2 = 18 : _id2 = 6; 
        var _id3;
        (viewport == 'l') ? _id3 = 0 : _id3 = 1; 


        $("#digital  #bubble"+_id2).clone().attr("id", "bubble-i-6").addClass("dbubble").appendTo("#digital .bubble-wrap").hide();
        $("#digital  #bubble"+_id).clone().attr("id", "bubble-i-0").addClass("dbubble").addClass("open-hover-left").appendTo("#digital .bubble-wrap").hide();
        $("#digital  #bubble7").clone().attr("id", "bubble-i-7").addClass("dbubble").appendTo("#digital .bubble-wrap").hide();
        $("#digital  #bubble"+_id3).clone().attr("id", "bubble-i-1").addClass("dbubble").addClass("open-hover-left").appendTo("#digital .bubble-wrap").hide();

        $("#bubble-i-6").html($("#svg-hover-1").html()).fadeIn();
        $("#bubble-i-0").html($("#svg-hover-2").html()).fadeIn();
        $("#bubble-i-7").html($("#svg-hover-3").html()).fadeIn();
        $("#bubble-i-1").html($("#svg-hover-4").html()).fadeIn();

        setTimeout(function () {
            if (window.type3) window.type3.destroy();
            window.type3 = new Typed('#typed3', {
                strings: ['Our missions is to demystify digital!'],
                typeSpeed: 40,
                loop: false,
                showCursor: false,
            });
        }, 100);
        $('#bubble-i-1').css('display','none');
        setTimeout(function () {
            $('#digital .bubble.wow').css("visibility", "hidden");
            $('#digital .wow').removeClass('animated');
            $('.center-menu').removeClass('wow zoomIn');
            $('.center-menu-icon1').removeClass('wow zoomIn');
            $('.center-menu-icon2').removeClass('wow zoomIn');
            $('.center-menu-icon3').removeClass('wow zoomIn');

            new WOW().init();
            $('#bubble-i-1').css('display','block');
            setTimeout(function(){
                $('#digital .bubble').each(function(){
                    if($(this).css('visibility') == 'hidden'){
                        $(this).addClass('mobile_hidden');
                    }
                });

            },1000)
        }, 2000);

        $(".dbubble", "#digital").on("click", function() {
            var $this = $(this);
            var position = $this.position();
            var width_ = ($(window).width() / 2);
            if($(this).hasClass("active"))
            {
                $(this).removeClass("active");
                if($(window).width() < 768)
                    $('.bubble-wrap').css({transform:"translateX(0px)"});
            }
            else
            {
                $(".dbubble").removeClass("active");
                $(this).addClass("active");
                if($(window).width() < 768)
                    if(position.left < width_){
                        $('.bubble-wrap').css({transform:"translateX("+width_ / 2+"px)"});
                    }
                    else{
                        $('.bubble-wrap').css({transform:"translateX(-"+width_ / 2+"px)"});
                    }
            }
        });
    });


    //   enterprise
    $('#enterprise-btn').click(function () {

        $('.main-section').addClass('inner_page');
        if($(window).width() > 1200){
            $('.main-right h1').animate({fontSize: "5rem" }, 1000 );
        }
        setTimeout(function () {
            $(".main-center").fadeIn()
                .css({top:"0%",position:'relative'})
                .animate({top:"-100%"}, 1000, function() {

                });

        }, 500);
        setTimeout(function () {
            $('#enterprise').addClass('active');
        }, 500);

        $('.about-link').fadeOut(500);
        // $('.main-center').stop().fadeOut(500);
        // $('.main-section').addClass('inner_page')
        // $('.main-center, .about-link').stop().fadeOut(500);

        $('.main-left').stop().animate({
            "height": "100%",
            "padding-left": "20px",
            "z-index": 9
        }, 500);

        $('.main-left').addClass('hidden');
        var _x_ ;
        ($(window).width() > 960) ? _x_ = 180 : _x_ = 85;


        var width = $(window).width();
        var height = $(window).height();
        // screen center position
        var c_x = Math.ceil(width / 2);
        var c_y = Math.ceil(height / 2);
        var offsetTop = 0;
        var offsetTop1, offsetTop2;
        // calculate the max number of bubble (w/h)
        var h_count = Math.ceil((width / (2 * _x_))) * 2;
        var v_count = Math.ceil((height - offsetTop) / _x_) * 2;
        // temp: count of bubble in each row, flag: 1/-1
        var temp1 = 0,
            flag1 = -1;
        var temp2 = 0,
            flag2 = 1;
        // bubble index
        var b_index = 0;
        // calculate row index
        for (var i = 0; i <= h_count; i++) {
            // position for each bubble
            var p_x1 = 0,
                p_x2 = 0,
                p_y = 0;
            // calculate the position
            p_x1 = width / 2 - _x_ * Math.sin(60 * Math.PI / 180) * (i + 1);
            p_x2 = width / 2 + _x_ * Math.sin(60 * Math.PI / 180) * i;
            // temp: 0,1,2,1,0,-1,-2,-1,0,1,2....
            temp1 = (i != 0) ? (temp1 + flag1) : temp1;
            temp2 = (temp2 + flag2);
            if (Math.abs(temp1) >= 1) flag1 = -flag1;
            if (Math.abs(temp2) >= 1) flag2 = -flag2;
            // original Start position of each row(Y Axis)
            offsetTop1 = 0 - (_x_/2) * temp1;
            offsetTop2 = 0 - (_x_/2) * temp2;


            for (var j = 0; j < temp1 + 6; j++) {
                // calculate each bubble's Y position
                p_y = offsetTop1 + _x_ * j;
                $("#enterprise .bubble-wrap").append("<div id='ebubble" + b_index + "' data-wow-duration='0." + (b_index + 0.70) + "s' class='bubble wow zoomIn' style='position:absolute;background:#EAEAEA70;left:" + p_x1 + "px;top:" + p_y + "px;'></div>");
                b_index++;
            }
            // draw bubbles for each row
            for (var j = 0; j < temp2 + 6; j++) {
                // calculate each bubble's Y position
                p_y = offsetTop2 + _x_ * j;
                $("#enterprise .bubble-wrap").append("<div id='ebubble" + b_index + "' data-wow-duration='0." + (b_index + 0.70) + "s' class='bubble wow zoomIn' style='position:absolute;background:#EAEAEA70;left:" + p_x2 + "px;top:" + p_y + "px'></div>");
                b_index++;
            }
        }

        var _id;
        (viewport == 'l') ? _id = 13 : _id = 0; 
        var _id2;
        (viewport == 'l') ? _id2 = 18 : _id2 = 6; 
        var _id3;
        (viewport == 'l') ? _id3 = 0 : _id3 = 1; 

        // clone exact position, overlay of Object
        $("#enterprise  #ebubble"+_id2).clone().attr("id", "ebubble-i-6").addClass("dbubble").appendTo("#enterprise .bubble-wrap").hide();
        $("#enterprise  #ebubble"+_id).clone().attr("id", "ebubble-i-0").addClass("dbubble").addClass("open-hover-left").appendTo("#enterprise .bubble-wrap").hide();
        $("#enterprise  #ebubble7").clone().attr("id", "ebubble-i-7").addClass("dbubble").appendTo("#enterprise .bubble-wrap").hide();
        $("#enterprise  #ebubble"+_id3).clone().attr("id", "ebubble-i-1").addClass("dbubble").addClass("open-hover-left").appendTo("#enterprise .bubble-wrap").hide();

        $("#ebubble-i-6").html($("#svg-hover-e1").html()).fadeIn();
        $("#ebubble-i-0").html($("#svg-hover-e2").html()).fadeIn();
        $("#ebubble-i-7").html($("#svg-hover-e3").html()).fadeIn();
        $("#ebubble-i-1").html($("#svg-hover-e4").html()).fadeIn();

        setTimeout(function () {
            // reinitialize the Typed animation on EnterPrise
            if (window.type4) window.type4.destroy();
            window.type4 = new Typed('#typed4', {
                strings: ['Simple, cost effective technical solutions for complex business challenges.'],
                typeSpeed: 40,
                loop: false,
                showCursor: false,
            });
        }, 100);
        $('#ebubble-i-1').css('display','none');
        setTimeout(function () {
            $('#enterprise .bubble.wow').css("visibility", "hidden");
            $('#enterprise .wow').removeClass('animated');
            $('.center-menu-icon1').removeClass('wow zoomIn');
            $('.center-menu-icon2').removeClass('wow zoomIn');
            $('.center-menu-icon3').removeClass('wow zoomIn');
            new WOW().init();
            $('#ebubble-i-1').css('display','block');
            setTimeout(function(){
                $('#enterprise .bubble').each(function(){
                    if($(this).css('visibility') == 'hidden'){
                        $(this).addClass('mobile_hidden');
                    }
                })
            },1000)

        }, 2000);

        $(".dbubble", "#enterprise").on("click", function() {
            var $this = $(this);
            var position = $this.position();
            var width_ = ($(window).width() / 2);
            if($(this).hasClass("active"))
            {
                $(this).removeClass("active");
                if($(window).width() < 768)
                    $('.bubble-wrap').css({transform:"translateX(0px)"});
            }
            else
            {
                $(".dbubble").removeClass("active");
                $(this).addClass("active");
                if($(window).width() < 768)
                    if(position.left < width_){
                        $('.bubble-wrap').css({transform:"translateX("+width_ / 2+"px)"});
                    }
                    else{
                        $('.bubble-wrap').css({transform:"translateX(-"+width_ / 2+"px)"});
                    }
            }
        });

    });

    //   about
    $('#about-btn').click(function () {

        // setTimeout(function () {
        var width = $(window).width();
        $('.center-menu').css({ 'right': '', 'left': '0px' }).animate({
            'left' : '-'+(width/2-150)+'px'
        },500);


        if($(window).width() > 1024) {
            $('.about-link').css({ 'right': '', 'left': '0px'  }).animate({
                'top' : '-150px',
                'left' : '-'+(width/2-150)+'px',
                'width': '300px',
                'height': '300px'
            },600);
        }else{
            $('.about-link').css({ 'right': '', 'left': '0px'  }).animate({
                'top' : '-150px',
                'left' : '0px',
                'width': '300px',
                'height': '300px'
            },600);
        }

        if($(window).width() > 1200) {
            $('.main-right h1').animate({
                fontSize: "5.5rem"
            }, 500);
        }
        setTimeout(function () {
            $('.about-link').css('display', 'none');
        },800);

        // $('.main-center').fadeOut(500);
        $('.main-section').addClass('inner_page');

        $('#typed').fadeOut();
        $('.main-left').stop().animate({
            "height": "100%",
            "padding-left": "20px",
            "z-index": 9
        }, 500);

        $('#about').addClass('active');
        setTimeout(function () {
            $('.our-solution-btn').addClass('active');
        },800);

        $("#about").scrollTop(0);

        var width = $(window).width();
        var height = $(window).height();
        // screen center position
        var c_x = Math.ceil(width / 2);
        var c_y = Math.ceil(height / 2);
        var offsetTop = 0;
        var offsetTop1, offsetTop2;
        // calculate the max number of bubble (w/h)
        var _x_;
        ($(window).width() > 960) ? _x_ = 180 : _x_ = 85;
        var h_count = Math.ceil((width / (2 * _x_)));
        var v_count = Math.ceil((height - offsetTop) / _x_) * 2;
        console.log(h_count,v_count);
        // temp: count of bubble in each row, flag: 1/-1
        var temp1 = 0,
            flag1 = -1;
        var temp2 = 0,
            flag2 = 1;
        // bubble index
        var b_index = 0;
        // calculate row index
        for (var i = 0; i <= 2; i++) {
            // position for each bubble
            var p_x1 = 0,
                p_x2 = 0,
                p_y = 0;
            // calculate the position
            p_x1 = width / 2 - _x_ * Math.sin(60 * Math.PI / 180) * (i + 1);
            p_x2 = width / 2 + _x_ * Math.sin(60 * Math.PI / 180) * i;
            // temp: 0,1,2,1,0,-1,-2,-1,0,1,2....
            temp1 = (i != 0) ? (temp1 + flag1) : temp1;
            temp2 = (temp2 + flag2);
            if (Math.abs(temp1) >= 1) flag1 = -flag1;
            if (Math.abs(temp2) >= 1) flag2 = -flag2;
            // original Start position of each row(Y Axis)
            offsetTop1 = 0 - (_x_/2) * temp1;
            offsetTop2 = 0 - (_x_/2) * temp2;


            for (var j = 0; j < temp1 + 8; j++) {
                // calculate each bubble's Y position
                p_y = offsetTop1 + _x_ * j;
                $("#about .bubble-wrap").append("<div id='abubble" + b_index + "' data-wow-duration='0." + (b_index + 0.70) + "s' data-nleft='"+p_x1+"'  class='bubble wow zoomIn' style='position:absolute;left:" + p_x1 + "px;top:" + p_y + "px;'></div>");
                b_index++;
            }
            // draw bubbles for each row
            for (var j = 0; j < temp2 + 8; j++) {
                // calculate each bubble's Y position
                p_y = offsetTop2 + _x_ * j;
                $("#about .bubble-wrap").append("<div id='abubble" + b_index + "' data-wow-duration='0." + (b_index + 0.70) + "s' data-nleft='"+p_x2+"'  class='bubble wow zoomIn' style='position:absolute;left:" + p_x2 + "px;top:" + p_y + "px'></div>");
                b_index++;
            }

            for (var j = 0; j < temp1 + 4; j++) {
                // calculate each bubble's Y position
                p_y = offsetTop1 + 180 * j;
                $("#about .bubble-wrap2").append("<div id='tbubble" + b_index + "' data-wow-duration='0." + (b_index + 0.70) + "s' data-nleft='"+p_x1+"'  class='bubble animated' style='position:absolute;left:" + p_x1 + "px;top:" + p_y + "px;'></div>");
                b_index++;
            }
            // draw bubbles for each row
            for (var j = 0; j < temp2 + 4; j++) {
                // calculate each bubble's Y position
                p_y = offsetTop2 + _x_ * j;
                $("#about .bubble-wrap2").append("<div id='tbubble" + b_index + "' data-wow-duration='0." + (b_index + 0.70) + "s' data-nleft='"+p_x2+"'  class='bubble animated' style='position:absolute;left:" + p_x2 + "px;top:" + p_y + "px'></div>");
                b_index++;
            }

            for (var j = 0; j < temp1 + 5; j++) {
                // calculate each bubble's Y position
                p_y = offsetTop1 + _x_ * j;
                $("#about .bubble-wrap3").append("<div id='nbubble" + b_index + "' data-wow-duration='0." + (b_index + 0.70) + "s' data-nleft='"+p_x1+"'  class='bubble zoomIn' style='position:absolute;left:" + p_x1 + "px;top:" + p_y + "px;'></div>");
                b_index++;
            }
            // draw bubbles for each row
            for (var j = 0; j < temp2 + 5; j++) {
                // calculate each bubble's Y position
                p_y = offsetTop2 + _x_ * j;
                $("#about .bubble-wrap3").append("<div id='nbubble" + b_index + "' data-wow-duration='0." + (b_index + 0.70) + "s' data-nleft='"+p_x2+"' class='bubble zoomIn' style='position:absolute;left:" + p_x2 + "px;top:" + p_y + "px'></div>");
                b_index++;
            }
        }


        // clone exact position, overlay of Object
        var _id;
        (viewport == 'l') ? _id = 8 : _id = 10;
        var _id2;
        (viewport == 'l') ? _id2 = 44 : _id2 = 11;
        var _id3;
        (viewport == 'l') ? _id3 = 0 : _id3 = 12;
        var _id4;
        (viewport == 'l') ? _id4 = 37 : _id4 = 2;
        var _id5;
        (viewport == 'l') ? _id5 = 1 : _id5 = 3;
        var _id6;
        (viewport == 'l') ? _id6 = 9 : _id6 = 4;
        var _id7;
        (viewport == 'l') ? _id7 = 76 : _id7 = 9;
        var _id8;
        (viewport == 'l') ? _id8 = 45 : _id8 = 1;
        var _id9;
        (viewport == 'l') ? _id9 = 10 : _id9 = 0;

        /* Clients */
        $("#about #abubble"+_id).clone().attr("id", "abubble-i-10").addClass("abubble").appendTo("#about .bubble-wrap").hide();
        $("#about #abubble"+_id2).clone().attr("id", "abubble-i-11").addClass("abubble").appendTo("#about .bubble-wrap").hide();
        $("#about #abubble"+_id3).clone().attr("id", "abubble-i-12").addClass("abubble").appendTo("#about .bubble-wrap").hide();
        $("#about #abubble"+_id4).clone().attr("id", "abubble-i-2").addClass("open-hover-left abubble").appendTo("#about .bubble-wrap").hide();
        $("#about #abubble"+_id5).clone().attr("id", "abubble-i-3").addClass("open-hover-left abubble").appendTo("#about .bubble-wrap").hide();
        $("#about #abubble"+_id6).clone().attr("id", "abubble-i-4").addClass("open-hover-left abubble").appendTo("#about .bubble-wrap").hide();
        $("#about #abubble"+_id7).clone().attr("id", "abubble-i-6").addClass("open-hover-right abubble").appendTo("#about .bubble-wrap").hide();
        $("#about #abubble"+_id8).clone().attr("id", "abubble-i-7").addClass("open-hover-left abubble").appendTo("#about .bubble-wrap").hide();
        $("#about #abubble"+_id9).clone().attr("id", "abubble-i-8").addClass("open-hover-left abubble").appendTo("#about .bubble-wrap").hide();


        $("#abubble-i-8").html($("#about-hover-icon-7").html()).fadeIn();
        $("#abubble-i-7").html($("#about-hover-icon-8").html()).fadeIn();
        $("#abubble-i-6").html($("#about-hover-icon-9").html()).fadeIn();
        $("#abubble-i-2").html($("#about-hover-icon-5").html()).fadeIn();
        $("#abubble-i-3").html($("#about-hover-icon-6").html()).fadeIn();
        $("#abubble-i-4").html($("#about-hover-icon-4").html()).fadeIn();
        $("#abubble-i-10").html($("#about-hover-icon-1").html()).fadeIn();
        $("#abubble-i-11").html($("#about-hover-icon-2").html()).fadeIn();
        $("#abubble-i-12").html($("#about-hover-icon-3").html()).fadeIn();

        /* Teams */
        $("#about  #tbubble17").clone().attr("id", "tbubble-i-17").addClass("open-hover-left abubble").appendTo("#about .bubble-wrap2").hide();
        $("#about  #tbubble21").clone().attr("id", "tbubble-i-21").addClass("abubble").appendTo("#about .bubble-wrap2").hide();
        $("#about  #tbubble22").clone().attr("id", "tbubble-i-22").addClass("abubble").appendTo("#about .bubble-wrap2").hide();
        $("#tbubble-i-17").html($("#team-hover-icon-1").html()).fadeIn();
        $("#tbubble-i-21").html($("#team-hover-icon-2").html()).fadeIn();
        $("#tbubble-i-22").html($("#team-hover-icon-3").html()).fadeIn();


        var _id7;
        (viewport == 'l') ? _id7 = 63 : _id7 = 27;
        var _id8;
        (viewport == 'l') ? _id8 = 64 : _id8 = 33;
        var _id9;
        (viewport == 'l') ? _id9 = 27 : _id9 = 28;
        /* News */
        $("#about  #nbubble26").clone().attr("id", "nbubble-i-26").addClass("open-hover-left nbubble").appendTo("#about .bubble-wrap3").hide();        
        $("#about  #nbubble"+_id7).clone().attr("id", "nbubble-i-27").addClass("open-hover-left nbubble").appendTo("#about .bubble-wrap3").hide();        
        $("#about  #nbubble"+_id9).clone().attr("id", "nbubble-i-28").addClass("open-hover-left nbubble").appendTo("#about .bubble-wrap3").hide();        
        // $("#about  #nbubble29").clone().attr("id", "nbubble-i-29").addClass("open-hover-left nbubble").appendTo("#about .bubble-wrap3").hide();        
        $("#about  #nbubble32").clone().attr("id", "nbubble-i-32").addClass("nbubble").appendTo("#about .bubble-wrap3").hide();        
        $("#about  #nbubble"+_id8).clone().attr("id", "nbubble-i-33").addClass("nbubble").appendTo("#about .bubble-wrap3").hide();        
        //$("#about  #nbubble34").clone().attr("id", "nbubble-i-34").addClass("nbubble").appendTo("#about .bubble-wrap3").hide();        
        $("#about #nbubble-i-26").html($('#news-hover-icon').html()).fadeIn();
        $("#about #nbubble-i-27").html($('#news-hover-icon-3').html()).fadeIn();
        $("#about #nbubble-i-28").html($('#news-hover-icon-5').html()).fadeIn();
        // $("#about #nbubble-i-29").html($('#news-hover-icon-4').html()).fadeIn();
        $("#about #nbubble-i-32").html($('#news-hover-icon-2').html()).fadeIn();
        $("#about #nbubble-i-33").html($('#news-hover-icon-4').html()).fadeIn();
        //$("#about #nbubble-i-34").html($('#news-hover-icon').html()).fadeIn();

        setTimeout(function () {
            $('#about .bubble.wow').css("visibility", "hidden");
            $('#about .wow').removeClass('animated');
            $('.center-menu').css('animation-name','zoomOut');
            $('.center-menu-icon1').removeClass('wow zoomIn');
            $('.center-menu-icon2').removeClass('wow zoomIn');
            $('.center-menu-icon3').removeClass('wow zoomIn');
            new WOW().init();
            $('.center-menu').css('animation-name','zoomOut');
            setTimeout(function () {
                $('.center-menu').css("display", "none");
            },1000);

            $(".sub-button1").addClass("active");
        }, 1000);
        var team_click_flag = 0;
        $(".abubble", "#about .bubble-wrap2")
            .on("mouseover", function() {
                // if(team_click_flag == 0){
                    var $this = $(this);
                    var position = $this.position();
                    var width_ = ($(window).width() / 2);
                    if($(this).hasClass("open-hover-left")) {
                        $('#tbubble-i-17').css('z-index', '9');
                    }
                    if(!$(this).hasClass("active"))
                        $(this).addClass("preactive");
                    if($(this).hasClass("active"))
                    {
                        $(this).removeClass("active");
                        if($(window).width() < 768)
                            $('.bubble-wrap2').css({transform:"translateX(0px)"});
                    }
                    else
                    {
                        $(".abubble").removeClass("active");
                        $(this).addClass("active");
                        if($(window).width() < 768)
                            if(position.left < width_){
                                $('.bubble-wrap2').css({transform:"translateX("+width_ / 2+"px)"});
                            }
                            else{
                                $('.bubble-wrap2').css({transform:"translateX(-"+width_ / 2+"px)"});
                            }
                    }
                // }

        });
        $(".abubble", "#about .bubble-wrap2")
            .on("mouseout", function() {
                // if(team_click_flag == 0){
                    var $this = $(this);
                    var position = $this.position();
                    var width_ = ($(window).width() / 2);
                    if($(this).hasClass("open-hover-left")){
                        $('#tbubble-i-17').css('z-index','0');
                    }
                    if($(this).hasClass("active"))
                    {
                        $(this).removeClass("active");
                        if($(window).width() < 768)
                            $('.bubble-wrap2').css({transform:"translateX(0px)"});
                    }
                    else
                    {
                        $(".abubble").removeClass("active");
                        $(this).addClass("active");
                        if($(window).width() < 768)
                            if(position.left < width_){
                                $('.bubble-wrap2').css({transform:"translateX("+width_ / 2+"px)"});
                            }
                            else{
                                $('.bubble-wrap2').css({transform:"translateX(-"+width_ / 2+"px)"});
                            }
                    }
                // }

            });

        $(".abubble", "#about .bubble-wrap2")
            .on("click", function() {
                // var clickedid = $(this).attr('id');
                var $this = $(this);
                // if(team_click_flag == 0){
                //
                //     $('.digital-hover-panel ').css("background-color",'#1d4c9b');
                //     $('.digital-hover-panel ').css("opacity",'0.7');
                //     $('.digital-hover-panel ').css("color",'#fff');
                //     if(clickedid == "tbubble-i-21"){
                //         $('#tbubble-i-17').removeClass("open-hover-left");
                //         $('#tbubble-i-21').addClass('active');
                //         setTimeout(function () {
                //             $('#tbubble-i-21').addClass('active');
                //         },500);
                //         setTimeout(function () {
                //             $('#tbubble-i-21').removeClass('active');
                //         },1100);
                //         setTimeout(function () {
                //             $('#tbubble-i-21').addClass('active');
                //         },2200);
                //         setTimeout(function () {
                //             $('#tbubble-i-17').addClass('active');
                //         },2400);
                //         setTimeout(function () {
                //             $('#tbubble-i-22').addClass('active');
                //         },2600);
                //     }else if(clickedid == "tbubble-i-17"){
                //         $('#tbubble-i-21').addClass("open-hover-left");
                //         $('#tbubble-i-22').addClass("open-hover-left");
                //         $('#tbubble-i-17').addClass('active');
                //         setTimeout(function () {
                //             $('#tbubble-i-17').addClass('active');
                //         },500);
                //         setTimeout(function () {
                //             $('#tbubble-i-17').removeClass('active');
                //         },1100);
                //         setTimeout(function () {
                //             $('#tbubble-i-17').addClass('active');
                //         },2200);
                //         setTimeout(function () {
                //             $('#tbubble-i-22').addClass('active');
                //         },2400);
                //         setTimeout(function () {
                //             $('#tbubble-i-21').addClass('active');
                //         },2600);
                //     }else if(clickedid == "tbubble-i-22"){
                //         $('#tbubble-i-17').removeClass("open-hover-left");
                //         $('#tbubble-i-22').removeClass('active');
                //         setTimeout(function () {
                //             $('#tbubble-i-22').addClass('active');
                //         },500);
                //         setTimeout(function () {
                //             $('#tbubble-i-22').removeClass('active');
                //         },1100);
                //         setTimeout(function () {
                //             $('#tbubble-i-22').addClass('active');
                //         },2200);
                //         setTimeout(function () {
                //             $('#tbubble-i-21').addClass('active');
                //         },2400);
                //         setTimeout(function () {
                //             $('#tbubble-i-17').addClass('active');
                //         },2600);
                //     }else{
                //
                //     }
                //
                //     team_click_flag = 1;
                // }else{
                //
                //     setTimeout(function () {
                //         $('#tbubble-i-21').removeClass("open-hover-left");
                //         $('#tbubble-i-17').addClass("open-hover-left");
                //         $('#tbubble-i-22').removeClass("open-hover-left");
                //     },500);
                //     $('#tbubble-i-17').removeClass('active');
                //     $('#tbubble-i-21').removeClass('active');
                //     $('#tbubble-i-22').removeClass('active');
                //     setTimeout(function () {
                //         $('.digital-hover-panel ').css("background-color",'#fff');
                //         $('.digital-hover-panel ').css("opacity",'0.7');
                //         $('.digital-hover-panel ').css("color",'#000');
                //     },500);
                //
                //
                //
                //     team_click_flag = 0;
                // }

                //
                var position = $this.position();
                var width_ = ($(window).width() / 2);
                if($(this).hasClass("open-hover-left")){
                    $('#tbubble-i-17').css('z-index','0');
                }
                if($(this).hasClass("active"))
                {
                    $(this).removeClass("active");
                    if($(window).width() < 768)
                        $('.bubble-wrap2').css({transform:"translateX(0px)"});
                }
                else
                {
                    $(".abubble").removeClass("active");
                    $(this).addClass("active");
                    if($(window).width() < 768)
                        if(position.left < width_){
                            $('.bubble-wrap2').css({transform:"translateX("+width_ / 2+"px)"});
                        }
                        else{
                            $('.bubble-wrap2').css({transform:"translateX(-"+width_ / 2+"px)"});
                        }
                }
            });

        $(".bubble-wrap .abubble").on("mouseover", function(){
            if(!$(this).hasClass("active"))
                $(this).addClass("preactive");
        }).on("mouseout", function(){
            $(this).removeClass("preactive");
        }).on("click", function() {
            // var object = $(this);
            // var $this = $(this);
            // var position = $this.position();
            // var width_ = ($(window).width() / 2);
            // $(this).removeClass("preactive");
            //
            // if($(this).hasClass("active"))
            // {
            //     $(".client-container","#about").removeClass("active");
            //     setTimeout(function(){
            //         $(".bubble-wrap .abubble.active").removeClass("active");
            //     }, 300);
            //     $('.bubble_container').removeClass('active')
            //     if($(window).width() < 768)
            //         $('.bubble-wrap').css({transform:"translateX(0px)"});
            // }
            // else
            // {
            //     $(".bubble-wrap .abubble.active").removeClass("active");
            //     $(".client-container","#about").addClass("active");
            //     $(this).addClass("active");
            //     if($(window).width() < 768)
            //         if(position.left < width_){
            //             $('.bubble-wrap').css({transform:"translateX("+width_ / 2+"px)"});
            //         }
            //         else{
            //             $('.bubble-wrap').css({transform:"translateX(-"+width_ / 2+"px)"});
            //         }
            // }
            /* temporary disable the click functionality */
            var object = $(this);
            var $this = $(this);
            var position = $this.position();
            var width_ = ($(window).width() / 2);
            $(this).removeClass("preactive");
            if($(this).hasClass("active"))
            {
                setTimeout(function(){
                    $(".client-container","#about").removeClass("active");
                }, 300);

                setTimeout(function(){
                    $(".bubble-wrap .abubble.active").removeClass("active");
                }, 300);
                if($(this).hasClass('open-hover-left')){
                    $(this).css('left',$(this).position().left - 180 + 'px');
                }
                // $('.bubble_container').removeClass('active');
                if($(window).width() < 768)
                    $('.bubble-wrap').css({transform:"translateX(0px)"});
            }
            else
            {
                // Scroll To Relative position
                if($(window).width() > 960){
                    $('#about').animate({scrollTop:$('#about .bubble-wrap').height()/2}, 400);
                }
                $(".bubble-wrap .abubble.active").removeClass("active");
                $(".client-container","#about").addClass("active");
                $(this).addClass("active");
                if($(this).hasClass('open-hover-left')){
                    $(this).css('left',$(this).position().left + 180 + 'px');
                }
                var ind_ = $(this).attr('id');
                if($(window).width() < 768)
                    if(position.left < width_){
                        $('.bubble-wrap').css({transform:"translateX("+width_ / 2+"px)"});
                    }
                    else{
                        $('.bubble-wrap').css({transform:"translateX(-"+width_ / 2+"px)"});
                    }

                // $('.bubble_container').eq(102-ind_).addClass('active')
                $('.bubble_container').each(function(){
                    if($(this).attr('data-content')==ind_){
                        $(this).addClass('active')
                    }
                })
            }
        });
        $('.overlay_news').click(function(){
            $(".nbubble.active").trigger('click')
        })
        $(".nbubble", "#about").on("mouseover", function(){
            if(!$(this).hasClass("active"))
                $(this).addClass("preactive");
        }).on("mouseout", function(){
            $(this).removeClass("preactive");
        }).on("click", function() {
            var object = $(this);
            var $this = $(this);
            var position = $this.position();
            var width_ = ($(window).width() / 2);
            $(this).removeClass("preactive");
            if($(this).hasClass("active"))
            {
                $(this).removeClass("active");
                $(".info-container","#about").removeClass("active");
                $(this).css('left',$(this).attr('data-nLeft')+"px");
                if($(window).width() < 768)
                    $('.bubble-wrap3').css({transform:"translateX(0px)"});
                $('.bubble-wrap3 .info-container').css({transform:"translateX(0px)"});
                $('.overlay_news').removeClass('active');
            }
            else
            {
                if($(window).width() > 960){
                    $('#about').animate({scrollTop: $('#about .bubble-wrap3').height()+$('#about .bubble-wrap2').height()+$('#about .bubble-wrap1').height()+350}, 400);
                }
                $('.overlay_news').addClass('active');
                $(".nbubble.active").css({left:$(".nbubble.active").attr('data-nLeft')+"px"});
                $(".nbubble.active").removeClass("active");
                $(".info-container","#about").addClass("active");
                $(this).addClass("active");
                var $this = $(this);
                $('.bubble-wrap3 .info-container .text').html($(this).find('.news_txt').html());
                setTimeout(function(){
                    if($(window).width() > 960){
                        $this.css({left:$(".info-container.active .text").offset().left});
                    }
                },300)
                if($(window).width() < 768){
                    $('#about').animate({scrollTop: $('#about .bubble-wrap3').height()+$('#about .bubble-wrap2').height()+$('#about .bubble-wrap1').height()+400}, 400); 

                    if(position.left < width_){

                        $('.bubble-wrap3').css({transform:"translateX("+width_ / 2+"px)"});
                        $('.bubble-wrap3 .info-container').css({transform:"translateX(-"+width_ / 2+"px)"});
                    }
                    else{
                        $('.bubble-wrap3').css({transform:"translateX(-"+width_ / 2+"px)"});
                        $('.bubble-wrap3 .info-container').css({transform:"translateX("+width_ / 2+"px)"});
                    }
                }
            }
        });
        window.bwrap2 = $(".bubble-wrap2").position().top;
    });
    //   product
    $('#product-btn').click(function () {

        $('.main-section').addClass('inner_page');
        if($(window).width() > 1200){
            $('.main-right h1').animate({fontSize: "5rem" }, 1000 );
        }
        setTimeout(function () {
            $(".main-center").fadeIn()
                .css({top:"0%",position:'relative'})
                .animate({top:"-100%"}, 1000, function() {

                });
            $('#product').addClass('active');
        }, 500);

        $('.about-link').fadeOut(500);
        $('.main-left').stop().animate({
            "height": "100%",
            "padding-left": "20px",
            "z-index": 9
        }, 500);

        var _x_ ;
        ($(window).width() > 960) ? _x_ = 180 : _x_ = 85;

        var width = $(window).width();
        var height = $(window).height();
        // screen center position
        var c_x = Math.ceil(width / 2);
        var c_y = Math.ceil(height / 2);
        var offsetTop = 0;
        var offsetTop1, offsetTop2;
        // calculate the max number of bubble (w/h)
        var h_count = Math.ceil((width / (2 * _x_)));
        var v_count = Math.ceil((height - offsetTop) / _x_) * 2;
        // temp: count of bubble in each row, flag: 1/-1
        var temp1 = 0,
            flag1 = -1;
        var temp2 = 0,
            flag2 = 1;
        // bubble index
        var b_index = 0;
        // calculate row index
        for (var i = 0; i <= h_count; i++) {
            // position for each bubble
            var p_x1 = 0,
                p_x2 = 0,
                p_y = 0;
            // calculate the position
            p_x1 = width / 2 - _x_ * Math.sin(60 * Math.PI / 180) * (i + 1);
            p_x2 = width / 2 + _x_ * Math.sin(60 * Math.PI / 180) * i;
            // temp: 0,1,2,1,0,-1,-2,-1,0,1,2....
            temp1 = (i != 0) ? (temp1 + flag1) : temp1;
            temp2 = (temp2 + flag2);
            if (Math.abs(temp1) >= 1) flag1 = -flag1;
            if (Math.abs(temp2) >= 1) flag2 = -flag2;
            // original Start position of each row(Y Axis)
            offsetTop1 = 100 - (_x_/2) * temp1;
            offsetTop2 = 100 - (_x_/2) * temp2;


            for (var j = 0; j < temp1 + 5; j++) {
                // calculate each bubble's Y position
                p_y = offsetTop1 + _x_ * j;
                $("#product .bubble-wrap").append("<div id='pbubble" + b_index + "' data-wow-duration='0." + (b_index + 0.70) + "s' class='bubble wow zoomIn' style='position:absolute;background:#EAEAEA70;left:" + p_x1 + "px;top:" + p_y + "px;'></div>");
                b_index++;
            }
            // draw bubbles for each row
            for (var j = 0; j < temp2 + 5; j++) {
                // calculate each bubble's Y position
                p_y = offsetTop2 + _x_ * j;
                $("#product .bubble-wrap").append("<div id='pbubble" + b_index + "' data-wow-duration='0." + (b_index + 0.70) + "s' class='bubble wow zoomIn' style='position:absolute;background:#EAEAEA70;left:" + p_x2 + "px;top:" + p_y + "px'></div>");
                b_index++;
            }
        }

        // clone exact position, overlay of Object
        // clone exact position, overlay of Object
        var _id;
        (viewport == 'l') ? _id = 15 : _id = 5;
        var _id2;
        (viewport == 'l') ? _id2 = 11 : _id2 = 1;
        var _id3;
        (viewport == 'l') ? _id3 = 25 : _id3 = 7;

        $("#product  #pbubble0").clone().attr("id", "pbubble-i-0").addClass("pbubble").addClass("open-hover-left").addClass("open-hover-left").appendTo("#product .bubble-wrap").hide();
        $("#product  #pbubble"+_id2).clone().attr("id", "pbubble-i-1").addClass("pbubble").addClass("open-hover-left").addClass("open-hover-left").appendTo("#product .bubble-wrap").hide();
        $("#product  #pbubble"+_id).clone().attr("id", "pbubble-i-5").addClass("pbubble").appendTo("#product .bubble-wrap").hide();
        $("#product  #pbubble6").clone().attr("id", "pbubble-i-6").addClass("pbubble").appendTo("#product .bubble-wrap").hide();
        $("#product  #pbubble"+_id3).clone().attr("id", "pbubble-i-7").addClass("pbubble").appendTo("#product .bubble-wrap").hide();

        // clone the content of Hover Panel
        $("#pbubble-i-5").html($("#svg-hover-p1").html()).fadeIn();
        $("#pbubble-i-6").html($("#svg-hover-p2").html()).fadeIn();
        $("#pbubble-i-7").html($("#svg-hover-p3").html()).fadeIn();
        $("#pbubble-i-0").html($("#svg-hover-p4").html()).fadeIn();
        $("#pbubble-i-1").html($("#svg-hover-p5").html()).fadeIn();

        setTimeout(function () {
            if (window.type5) window.type5.destroy();
            window.type5 = new Typed('#typed5', {
                strings: ['Empowering teams globally to collaborate on projects.'],
                typeSpeed: 40,
                loop: false,
                showCursor: false,
            });
        }, 100);
        $('#pbubble-i-6').css('display','none');
        $('#pbubble-i-7').css('display','none');
        setTimeout(function () {
            $(".page-nav-banner.sub-button", "#product").addClass('active');
            $('#product .bubble.wow').css("visibility", "hidden");
            $('#product .wow').removeClass('animated');
            new WOW().init();
            $('#pbubble-i-6').css('display','block');
            $('#pbubble-i-7').css('display','block');
            setTimeout(function(){
                $('#product .bubble').each(function(){
                    if($(this).css('visibility') == 'hidden'){
                        $(this).addClass('mobile_hidden');
                    }
                })
            },1000)
        }, 2000);

        $(".pbubble", "#product").on("click", function() {
            var $this = $(this);
            var position = $this.position();
            var width_ = ($(window).width() / 2);
            if($(this).hasClass("active"))
            {
                $(this).removeClass("active");
                if($(window).width() < 768)
                    $('.bubble-wrap').css({transform:"translateX(0px)"});
            }
            else
            {
                $(".pbubble").removeClass("active");
                $(this).addClass("active");  
                if($(window).width() < 768)
                    if(position.left < width_){
                        $('.bubble-wrap').css({transform:"translateX("+width_ / 2+"px)"});
                    }
                    else{
                        $('.bubble-wrap').css({transform:"translateX(-"+width_ / 2+"px)"});
                    }
            }
        });
    });

    $("#about").on("scroll", function(){
        if(isScrolledIntoView($(".bubble-wrap3"))) {
            // $(".sub-button.active").removeClass("active");
            $(".sub-button.active").removeClass("active");
            $(".sub-button3").addClass("active");
            $(".nbubble").addClass("zoomIn");
        }
        else if(isScrolledIntoView($(".bubble-wrap2"))) {
            $(".sub-button.active").removeClass("active");
            $(".sub-button2").addClass("active");
        }
        else if(isScrolledIntoView($(".bubble-wrap"))) {
            $(".sub-button.active").removeClass("active");
            $(".sub-button1").addClass("active");
        }
        if(isScrolledIntoView($('#tbubble-i-17'))){
            $('#tbubble-i-17').addClass('zoomIn');
        }
        if(isScrolledIntoView($('#tbubble-i-21'))){
            $('#tbubble-i-21').addClass('zoomIn');
        }
        if(isScrolledIntoView($('#tbubble-i-22'))){
            $('#tbubble-i-22').addClass('zoomIn');
        }
        var top = $(window).scrollTop(),
            divBottom = $('#tbubble-i-22').offset().top + $('#tbubble-i-22').outerHeight();
        if (divBottom > (top+300) ){
            $('#tbubble-i-22').css('animation-name','zoomIn').animate();
        } else {
            $('#tbubble-i-22').css('animation-name','zoomOut').animate();
        }

        divBottom = $('#tbubble-i-17').offset().top + $('#tbubble-i-17').outerHeight();
        if (divBottom > (top+300) ){
            $('#tbubble-i-17').css('animation-name','zoomIn').animate();
        } else {
            $('#tbubble-i-17').css('animation-name','zoomOut').animate();
        }

        divBottom = $('#tbubble-i-21').offset().top + $('#tbubble-i-21').outerHeight();
        if (divBottom > (top+300) ){
            $('#tbubble-i-21').css('animation-name','zoomIn').animate();
        } else {
            $('#tbubble-i-21').css('animation-name','zoomOut').animate();
        }

        divBottom = $('#abubble-i-8').offset().top + $('#abubble-i-8').outerHeight();
        if (divBottom > (top+300) ){
            $('#abubble-i-8').css('opacity','1').animate();
        } else {
            $('#abubble-i-8').css('opacity','0').animate();
        }

        divBottom = $('#abubble-i-7').offset().top + $('#abubble-i-7').outerHeight();
        if (divBottom > (top+300) ){
            $('#abubble-i-7').css('opacity','1').animate();
        } else {
            $('#abubble-i-7').css('opacity','0').animate();
        }

        divBottom = $('#abubble-i-6').offset().top + $('#abubble-i-6').outerHeight();
        if (divBottom > (top+300) ){
            $('#abubble-i-6').css('opacity','1').animate();
        } else {
            $('#abubble-i-6').css('opacity','0').animate();
        }

        divBottom = $('#abubble-i-2').offset().top + $('#abubble-i-2').outerHeight();
        if (divBottom > (top+300) ){
            $('#abubble-i-2').css('opacity','1').animate();
        } else {
            $('#abubble-i-2').css('opacity','0').animate();
        }

        divBottom = $('#abubble-i-3').offset().top + $('#abubble-i-3').outerHeight();
        if (divBottom > (top+300) ){
            $('#abubble-i-3').css('opacity','1').animate();
        } else {
            $('#abubble-i-3').css('opacity','0').animate();
        }

        divBottom = $('#abubble-i-4').offset().top + $('#abubble-i-4').outerHeight();
        if (divBottom > (top+300) ){
            $('#abubble-i-4').css('opacity','1').animate();
        } else {
            $('#abubble-i-4').css('opacity','0').animate();
        }

        divBottom = $('#abubble-i-10').offset().top + $('#abubble-i-10').outerHeight();
        if (divBottom > (top+300) ){
            $('#abubble-i-10').css('opacity','1').animate();
        } else {
            $('#abubble-i-10').css('opacity','0').animate();
        }

        divBottom = $('#abubble-i-11').offset().top + $('#abubble-i-11').outerHeight();
        if (divBottom > (top+300) ){
            $('#abubble-i-11').css('opacity','1').animate();
        } else {
            $('#abubble-i-11').css('opacity','0').animate();
        }

        divBottom = $('#abubble-i-12').offset().top + $('#abubble-i-12').outerHeight();
        if (divBottom > (top+300) ){
            $('#abubble-i-12').css('opacity','1').animate();
        } else {
            $('#abubble-i-12').css('opacity','0').animate();
        }

        divBottom = $('#nbubble-i-26').offset().top + $('#nbubble-i-26').outerHeight();
        if (divBottom > (top+300) ){
            $('#nbubble-i-26').css('opacity','1').animate();
        } else {
            $('#nbubble-i-26').css('opacity','0').animate();
        }

        divBottom = $('#nbubble-i-27').offset().top + $('#nbubble-i-27').outerHeight();
        if (divBottom > (top+300) ){
            $('#nbubble-i-27').css('opacity','1').animate();
        } else {
            $('#nbubble-i-27').css('opacity','0').animate();
        }

        divBottom = $('#nbubble-i-28').offset().top + $('#nbubble-i-28').outerHeight();
        if (divBottom > (top+300) ){
            $('#nbubble-i-28').css('opacity','1').animate();
        } else {
            $('#nbubble-i-28').css('opacity','0').animate();
        }

        divBottom = $('#nbubble-i-32').offset().top + $('#nbubble-i-32').outerHeight();
        if (divBottom > (top+300) ){
            $('#nbubble-i-32').css('opacity','1').animate();
        } else {
            $('#nbubble-i-32').css('opacity','0').animate();
        }

        // if(isScrolledIntoView($('#tbubble-i-26'))){
        //     $('#tbubble-i-26').addClass('zoomIn');
        // }
        // if(isScrolledIntoView($('#tbubble-i-17'))){
        //     $('#tbubble-i-17').addClass('zoomIn');
        // }
        // if(isScrolledIntoView($('#tbubble-i-18'))){
        //     $('#tbubble-i-18').addClass('zoomIn');
        // }
        // if(isScrolledIntoView($('#tbubble-i-19'))){
        //     $('#tbubble-i-19').addClass('zoomIn');
        // }
        // if(isScrolledIntoView($('#tbubble-i-20'))){
        //     $('#tbubble-i-20').addClass('zoomIn');
        // }
    });

    // // cascade hover animation
    // $(document).on("mouseover", ".pbubble" , function(){
    //     $(this).addClass("active");
    //     $(".product-hover-icon",this).addClass("active");
    // }).on("mouseout", ".pbubble", function(){
    //     $(this).removeClass("active");
    //     $(".product-hover-icon",this).removeClass("active");
    // });

    // // bubble click animation
    // $(document).on("mousedown", ".bubble", function() {
    //     $(this).addClass("down");
    // }).on("mouseup", ".bubble", function() {
    //     $(this).removeClass("down");
    //     $(this).addClass("click");
    //     $(".a-hover-panel").addClass("active");
    //     $(".a-content").addClass("active");
    // });
})();

function isScrolledIntoView(elem)
{
    var docViewTop = $("#about").scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var parent = elem.parent()[0].offsetTop;
    var elemTop = parent + elem[0].offsetTop;

    // return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    return (docViewBottom > elemTop);
}

$(document).ready(function(){
    setTimeout(function(){
        //      $('.about-link').trigger('click')
    },300)
    if($(window).width()<1025){
        $('body').addClass('mobile_css');
    }
    if($('#enterprise').hasClass('active')){

    }
})

$('#contact .available-position').click(function(){
    $(this).parent().toggleClass('active')
})