$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: true,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'left',
            'tooltips': ['section1', 'section2', 'section3']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});

let text = baffle('.textEffect');
text.reveal([1000], [2000]),
text.start (3000),
text.set ({
    characters: '¿⊥∠√∧@$&†¤¢∂≡£∨¬α∧',
    speed: 120
});