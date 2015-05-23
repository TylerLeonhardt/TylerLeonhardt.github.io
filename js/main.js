var mq = window.matchMedia( "(min-width: 900px)" );
if(mq.matches){
	$(function(){
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 40
		});
	});

	$(document).ready(function() {
		$('.tooltip').tooltipster({
			position: "bottom"
		});
	});
}else{

	
}