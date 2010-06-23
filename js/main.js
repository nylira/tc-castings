/*----------------------------------------------------------------------
	M A I N . J S
----------------------------------------------------------------------*/

$(document).ready(function() {
	
  // Hyphenator.run();
  
	// inline labels
  $("label.inline + .input").each(function (type) {

    if (!($(this).val() == "")) {
      $(this).prev("label.inline").addClass('has-text');
    };
    
   	$(this).focus(function () {
      $(this).prev("label.inline").addClass("focus");
   	});
   	
   	$(this).keypress(function () {
      $(this).prev("label.inline").addClass("has-text").removeClass("focus");
   	});
   	
   	$(this).blur(function () {
      if($(this).val() == "") {
    	  $(this).prev("label.inline").removeClass("has-text").removeClass("focus");
      }
    });
    
  });
  
  // fancybox
  $(".screenshots li a[href$=.jpg]").fancybox({
    'transitionIn' : 'elastic',
    'transitionOut' : 'elastic'
  });
  
});