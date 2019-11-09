        //navigation
        var nav = document.querySelector('nav');
        window.addEventListener('scroll', function () {
            if (document.body.scrollTop > 100 || this.document.documentElement.scrollTop > 100) {
                nav.className = " fixed"
            } else {
                nav.className = nav.className.replace("fixed");
            }
        })

        //bars
        var bar = document.querySelector('.bars');
        bar.addEventListener('click', function () {
            bar.classList.toggle('change');
            var myNavbar = document.getElementById('myNavbar');
            if (myNavbar.className === 'topnav') {
                myNavbar.className += ' responsive';
            } else {
                myNavbar.className = 'topnav';
            }
        });

        //hide expanded navbar when user click on link
        var a = document.querySelectorAll('a');
        for (var i = 0; i < a.length; i++) {
            a[i].addEventListener('click', function () {
                bar.classList.toggle('change');
                myNavbar.className = 'topnav';
            })
        }


        //slider
        $(function(){
                //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();

        });
