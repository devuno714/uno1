jQuery(document).ready(function($) {
    $(".m-nav-container").hide();
    $(".m-nav-btn").click(function() {
         $(".m-nav-container").slideToggle("slow");
    });                            
});