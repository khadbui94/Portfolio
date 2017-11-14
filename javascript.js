/*Reference: W3Schools.com*/
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

 $(document).ready(function() {
            $(function() {
                var toggle = $('#toggle');
                menu = $('.navbar ul');
                h = menu.height();

                $(toggle).on('click', function(e) {
                    e.preventDefault();
                    menu.slideToggle();
                });
            });

            $(window).resize(function() {
                var w = $(window).width();
                if (w > 650 && menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
            });
        });