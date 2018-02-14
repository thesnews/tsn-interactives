<script>
    jQuery(function($) {

        var $nav = $('.navbar-default');
        var $win = $(window);
        var winH = $win.height();   // Get the window height.

        $win.on("scroll", function () {
            if ($(this).scrollTop() > 0.6 * winH ) {
                $nav.addClass("reverse");
            } else {
                $nav.removeClass("reverse");
            }
        }).on("resize", function(){ // If the user resizes the window
           winH = $(this).height(); // you'll need the new height value
        });
    })


    $(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
    });
</script>