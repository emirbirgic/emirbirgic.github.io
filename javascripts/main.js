// This is what changes body from hidden
(function($) {

  $(document.body).fadeIn(1500);

})(jQuery);
// This is what makes going top slow and fluid.
$(document).ready(function() {
    $("a[href$='#top']").click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
});
