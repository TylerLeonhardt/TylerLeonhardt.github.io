if($( window ).width() >1000){
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