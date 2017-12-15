/*Reference: W3Schools.com*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $("#toTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

//smooth scroll
$(document).ready(function(){
   $(".scroll").click(function(event){     
        event.preventDefault();
       $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});

function myFunction() {
    var e = document.getElementById("myNav")
    if (e.className === "topNav") {
        e.className += " resp";
    } else {
        e.className = "topNav";
    }
}
