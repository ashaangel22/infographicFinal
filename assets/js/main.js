$(document).ready(function(){

//	new WOW().init();
    
    var controller = new ScrollMagic.Controller();

    TweenMax.from("header h1", 1, {left: "-100%", opacity: 0, delay: 1});
    TweenMax.from(".heading .notice", 2, {top:"-325%", delay: 2});

	$('.people').eq(0);

	var tl = new TimelineMax();

	tl.to($('.people').eq(19), 1, {left:0, delay: 0}, 0.1)
	.to($('.people').eq(18), 1, {left:0, delay: 0}, 0.2)
    .to($('.people').eq(17), 1, {left:0, delay: 0}, 0.3)
	.to($('.people').eq(16), 1, {left:0, delay: 0}, 0.4)
	.to($('.people').eq(15), 1, {left:0, delay: 0}, 0.5)
	.to($('.people').eq(14), 1, {left:0, delay: 0}, 0.6)
	.to($('.people').eq(13), 1, {left:0, delay: 0}, 0.7)
	.to($('.people').eq(12), 1, {left:0, delay: 0}, 0.8)
    .to($('.people').eq(11), 1, {left:0, delay: 0}, 0.9)
	.to($('.people').eq(10), 1, {left:0, delay: 0}, 1)
    .to($('.people').eq(9), 1, {left:0, delay: 0}, 1.1)
	.to($('.people').eq(8), 1, {left:0, delay: 0}, 1.2)
	.to($('.people').eq(7), 1, {left:0, delay: 0}, 1.3)
	.to($('.people').eq(6), 1, {left:0, delay: 0}, 1.4)
	.to($('.people').eq(5), 1, {left:0, delay: 0}, 1.5)
	.to($('.people').eq(4), 1, {left:0, delay: 0}, 1.6)
	.to($('.people').eq(3), 1, {left:0, delay: 0}, 1.7)
	.to($('.people').eq(2), 1, {left:0, delay: 0}, 1.8)
	.to($('.people').eq(1), 1, {left:0, delay: 0}, 1.9)
	.to($('.people').eq(0), 1, {left:0, delay: 0}, 2);
    
    var row1 = new ScrollMagic.Scene({
        triggerElement: "#trigger4",
    }) 
        .addTo(controller)
        .setTween(tl);
    
    $('.people2').eq(0);
    
    var tl2 = new TimelineMax();

	tl2.to($('.people2').eq(19), 1, {left:0, delay: 0}, 0.1)
	.to($('.people2').eq(18), 1, {left:0, delay: 0}, 0.2)
    .to($('.people2').eq(17), 1, {left:0, delay: 0}, 0.3)
	.to($('.people2').eq(16), 1, {left:0, delay: 0}, 0.4)
	.to($('.people2').eq(15), 1, {left:0, delay: 0}, 0.5)
	.to($('.people2').eq(14), 1, {left:0, delay: 0}, 0.6)
	.to($('.people2').eq(13), 1, {left:0, delay: 0}, 0.7)
	.to($('.people2').eq(12), 1, {left:0, delay: 0}, 0.8)
    .to($('.people2').eq(11), 1, {left:0, delay: 0}, 0.9)
	.to($('.people2').eq(10), 1, {left:0, delay: 0}, 1)
    .to($('.people2').eq(9), 1, {left:0, delay: 0}, 1.1)
	.to($('.people2').eq(8), 1, {left:0, delay: 0}, 1.2)
	.to($('.people2').eq(7), 1, {left:0, delay: 0}, 1.3)
	.to($('.people2').eq(6), 1, {left:0, delay: 0}, 1.4)
	.to($('.people2').eq(5), 1, {left:0, delay: 0}, 1.5)
	.to($('.people2').eq(4), 1, {left:0, delay: 0}, 1.6)
	.to($('.people2').eq(3), 1, {left:0, delay: 0}, 1.7)
	.to($('.people2').eq(2), 1, {left:0, delay: 0}, 1.8)
	.to($('.people2').eq(1), 1, {left:0, delay: 0}, 1.9)
	.to($('.people2').eq(0), 1, {left:0, delay: 0}, 2);
    
    $('.people2').eq(0);
    
    var row2 = new ScrollMagic.Scene({
        triggerElement: "#trigger5",
    }) 

        .addTo(controller)
        .setTween(tl2);
    
    var tl3 = new TimelineMax();

	tl3.to($('.people3').eq(11), 1, {left:0, delay: 0}, 0.1)
	.to($('.people3').eq(10), 1, {left:0, delay: 0}, 0.2)
    .to($('.people3').eq(9), 1, {left:0, delay: 0}, 0.3)
	.to($('.people3').eq(8), 1, {left:0, delay: 0}, 0.4)
	.to($('.people3').eq(7), 1, {left:0, delay: 0}, 0.5)
	.to($('.people3').eq(6), 1, {left:0, delay: 0}, 0.6)
	.to($('.people3').eq(5), 1, {left:0, delay: 0}, 0.7)
	.to($('.people3').eq(4), 1, {left:0, delay: 0}, 0.8)
	.to($('.people3').eq(3), 1, {left:0, delay: 0}, 0.9)
	.to($('.people3').eq(2), 1, {left:0, delay: 0}, 1)
	.to($('.people3').eq(1), 1, {left:0, delay: 0}, 1.1)
	.to($('.people3').eq(0), 1, {left:0, delay: 0}, 1.2);

    
    var row3 = new ScrollMagic.Scene({
        triggerElement: "#trigger6",
    }) 
        .addTo(controller)
        .setTween(tl3);

	new Waypoint({
		element: $(".wage .money .current"),
		handler: function(direction){
			$(".wage .money .current").addClass("animate");
		},
		offset: '50%'
	});
    
    new Waypoint({
		element: $(".wage .money .textBox .povertyText"),
		handler: function(direction){
			$(".wage .money .textBox .povertyText").addClass("animate");
		},
		offset: '50%'
	});
    
    new Waypoint({
		element: $(".wage .money .textBox .currentText"),
		handler: function(direction){
			$(".wage .money .textBox .currentText").addClass("animate");
		},
		offset: '80%'
	});
    
    new Waypoint({
		element: $(".schools .badSchool .imageTwo"),
		handler: function(direction){
			$(".schools .badSchool .imageTwo").addClass("animate");
		},
		offset: '80%'
	});
    
    var black = TweenMax.staggerTo(".jobs .black img", 1, {opacity: 1}, 0.3);
    var white = TweenMax.staggerTo(".jobs .white img", 1, {opacity: 1}, 0.3);
    var old = TweenMax.staggerTo(".jobs .old img", 1, {opacity: 1}, 0.3);
    
    $('.count').countTo({
		from: 0,
		to: 14,
		speed: 1000, //2seconds
		refreshInterval: 1,
        
	});
    
    $('.count2').countTo({
		from: 0,
		to: 6.6,
		speed: 1000, //2seconds
		refreshInterval: 1,
        decimals: "1"
	});
    
    $('.count3').countTo({
		from: 0,
		to: 13.1,
		speed: 1000, //2seconds
		refreshInterval: 1,
        decimals: "1"
	});
    
    $('.count').countTo('stop');
    $('.count2').countTo('stop');
    $('.count3').countTo('stop');
    
    var black1 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
    }) 
        .on('start', function(){
            $('.count').countTo('start');   
    })
        .addTo(controller)
//        .addIndicators({name: "1"})
        .setTween(black);
    
    var white1 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
    }) 
        .on('start', function(){
            $('.count2').countTo('start');   
    })
        .addTo(controller)
//        .addIndicators({name: "2"})
        .setTween(white);
    
    var old1 = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
    }) 
        .on('start', function(){
            $('.count3').countTo('start');   
    })
        .addTo(controller)
//        .addIndicators({name: "3"})
        .setTween(old);
    
});

var h = $('.flag').width();
for(var i = 0; i < h; i++){
    var flagElement = $("<div class='flag-element'>");
    flagElement.css('background-position', -i + "px 0");
    flagElement.css('animation-delay', i * 10 + 'ms');
    $('.flag').append(flagElement);
}