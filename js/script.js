$(document).ready(function(){
    $("#scroll-up").on("click" ,function(){
        $('html,body').animate({
            scrollTop:0
        },2000)
    });
    $("#scroll-down").on("click",function(){
        $('html,body').animate({
            scrollTop:$(document).height()-$(window).height()
        },2000)
    });
});