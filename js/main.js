$(document).ready(function() {
    var scene = document.getElementById('scene1');
    parallax = new Parallax(scene, {
        calibrateX: true,
        calibrateY: true,
        frictionX: 0.1,
        frictionY: 0.1,
        scalarX: 22,
        scalarY: 15
    });
    var adjustScalar = function() {
        var width = window.document.body.clientWidth;
        if(width <= 400) {
            parallax.scalar(100, 0);
        } else if (width <= 450) {
            parallax.scalar(80, 0);
        } else if (width <= 768) {
            parallax.scalar(120, 15);
        } else if (width <= 810) {
            parallax.scalar(120, 15);
        } else if (width <= 1600) {
            parallax.scalar(35, 30);
        } else if (width <= 1920) {
            parallax.scalar(22, 15);
        }
        console.log('set scalar to', parallax.scalarX, parallax.scalarY);
        console.log('parallax scalar properties have been adjusted for document width of', width);
    };

    adjustScalar();

    $(window).resize(function() {
       adjustScalar();
    });

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage', 'thirdPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 475,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: true,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : [],
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){
            if(index == 1 && direction =='down'){
                $("#header").removeClass("scrolled-top");
                $('#header-logo').removeClass('scrolled-top');
                $('#header-logo-text').removeClass('scrolled-top');
            } else if(nextIndex === 1 && direction == 'up'){
                $("#header").addClass("scrolled-top");
                $('#header-logo').addClass('scrolled-top');
                $('#header-logo-text').addClass('scrolled-top');
            }
        },
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});


