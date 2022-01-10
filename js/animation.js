
 $(document).ready(function () {



    $('#getInTouch').waypoint(function (direction) {
        $('#getInTouch').removeClass('hidden');
        $('#getInTouch-title').removeClass('hidden');
        $('#getInTouch-title').addClass('animate__fadeInUp');
    }, { offset: '70%' });
    
    
    doAnimation('#navbar', '100%', 0, 'animate__fadeIn');
    
    doAnimation('#about-me-title', '70%', 0, 'animate__fadeInLeft');
    doAnimation('#about-me-content', '70%', 0, 'animate__fadeInRight');
    
    doAnimation('#left-header', '70%', 0, 'animate__fadeInLeft');
    doAnimation('#center-header', '70%', 0, 'animate__fadeInDown');
    doAnimation('#about-me-content', '70%', 100, 'animate__fadeInRight');
    
    
    doAnimation('#right-header', '70%', 0, 'animate__fadeInRight');
    doAnimation('#skills', '100%', 0, 'animate__fadeInUp');
    doAnimation('#getInTouch-right', '70%', 0, 'animate__fadeInRight');
    doAnimation('#getInTouch-left', '70%', 0, 'animate__fadeInLeft');
    
    doAnimation('#skill-html', '70%', 300, 'animate__fadeInUp');
    doAnimation('#skill-css', '70%', 430, 'animate__fadeInUp');
    doAnimation('#skill-javascript', '70%', 460, 'animate__fadeInUp');
    doAnimation('#skill-json', '70%', 490, 'animate__fadeInUp');
    doAnimation('#skill-java', '70%', 420, 'animate__fadeInUp');
    doAnimation('#skill-kotlin', '70%', 450, 'animate__fadeInUp');
    doAnimation('#skill-github', '70%', 480, 'animate__fadeInUp');
    doAnimation('#skill-sass', '70%', 510, 'animate__fadeInUp');
    doAnimation('#skill-sql', '70%', 540, 'animate__fadeInUp');
    doAnimation('#skill-typescript', '70%', 570, 'animate__fadeInUp');
    doAnimation('#skill-rest', '70%', 600, 'animate__fadeInUp');
    doAnimation('#skill-docker', '70%', 630, 'animate__fadeInUp');
    doAnimation('#skill-cucumber', '70%', 660, 'animate__fadeInUp');
    doAnimation('#skill-bootstrap', '70%', 690, 'animate__fadeInUp');
    doAnimation('#skill-spring', '70%', 690, 'animate__fadeInUp');
    

    doAnimation('#portfolio','70%', 0, 'animate__fadeInUp')

    doAnimation('#wip-image-portfolio','70%', 0, 'animate__fadeInRight')
    doAnimation('#social-photo','70%', 0, 'animate__fadeInLeft');
    
    //animation
    function doAnimation(title, offsetValue, time, animationType) {
        setTimeout(function () {
            $(title).waypoint(function (direction) {
                $(title).removeClass('hidden');
                $(title).addClass(animationType);
            }, { offset: offsetValue });
        }, time);
    }
});
