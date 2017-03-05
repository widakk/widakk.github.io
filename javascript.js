 $(".tile").hover(function () {
    $(this).toggleClass("shadow");
 });

var body = $("body");
$(".toggle-about").on('click', function(){
    body.toggleClass("menu-open");
});