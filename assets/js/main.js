//$(document).ready(function(){
//
////	new WOW().init();
//
//	$('.people').eq(0);
//
//	var tl = new TimelineMax();
//
//	tl.to($('.people').eq(11), 1, {left:0, delay: 0}, 0)
//	.to($('.people').eq(10), 1, {left:0, delay: 0}, .1)
//    .to($('.people').eq(9), 1, {left:0, delay: 0}, .2)
//	.to($('.people').eq(8), 1, {left:0, delay: 0}, .3)
//	.to($('.people').eq(7), 1, {left:0, delay: 0}, .4)
//	.to($('.people').eq(6), 1, {left:0, delay: 0}, .5)
//	.to($('.people').eq(5), 1, {left:0, delay: 0}, .6)
//	.to($('.people').eq(4), 1, {left:0, delay: 0}, .7)
//	.to($('.people').eq(3), 1, {left:0, delay: 0}, .8)
//	.to($('.people').eq(2), 1, {left:0, delay: 0}, .9)
//	.to($('.people').eq(1), 1, {left:0, delay: 0}, 1)
//	.to($('.people').eq(0), 1, {left:0, delay: 0}, 1.1);
//    
//    $('.people2').eq(0);
//    
//    var tl2 = new TimelineMax();
//
//	tl2.to($('.people2').eq(11), 1, {left:0, delay: 0}, .1)
//	.to($('.people2').eq(10), 1, {left:0, delay: 0}, .2)
//    .to($('.people2').eq(9), 1, {left:0, delay: 0}, .3)
//	.to($('.people2').eq(8), 1, {left:0, delay: 0}, .4)
//	.to($('.people2').eq(7), 1, {left:0, delay: 0}, .5)
//	.to($('.people2').eq(6), 1, {left:0, delay: 0}, .6)
//	.to($('.people2').eq(5), 1, {left:0, delay: 0}, .7)
//	.to($('.people2').eq(4), 1, {left:0, delay: 0}, .8)
//	.to($('.people2').eq(3), 1, {left:0, delay: 0}, .9)
//	.to($('.people2').eq(2), 1, {left:0, delay: 0}, 1)
//	.to($('.people2').eq(1), 1, {left:0, delay: 0}, 1.1)
//	.to($('.people2').eq(0), 1, {left:0, delay: 0}, 1.2);
//});

var h = $('.flag').width();
for(var i = 0; i < h; i++){
    var flagElement = $("<div class='flag-element'>");
    flagElement.css('background-position', -i + "px 0");
    flagElement.css('animation-delay', i * 10 + 'ms');
    $('.flag').append(flagElement);
}