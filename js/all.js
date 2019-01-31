
$(document).ready(function() {
    $(".middle-list a").click(function(event){
     event.preventDefault();
    });
    $('.thumb a').hoverpulse().each(function() {
        $('.thumb a').click(function(event) {  
        event.preventDefault();
    	var $img = $(this);
    	var link = $img.attr('data-link');
    	$img.attr('title','Goto: ' + link);
    });
});
});
   