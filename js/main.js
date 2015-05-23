if($( window ).width() >950){
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