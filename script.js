$(".button1").click(function() {
    $(".main1").fadeOut();
    $(".main2").fadeIn();
});

$(".button2").click(function() {
    $(".main2").fadeOut();
    $(".main3").fadeIn();
    $("body").css("background-image", "url('https://www.olenkadesign.co.uk/wp-content/uploads/2014/01/19-82-product/Milana-Gold-long-1.jpg')");

});
$(".button3").click(function() {
    $(".main2").fadeOut();
    $(".main4").fadeIn();
    $("body").css("background-image", "url('https://i.pinimg.com/originals/ef/88/26/ef88267d79827c96b81dfef78eee491c.jpg')");
});