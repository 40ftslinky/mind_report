//jQuery(document).ready(function($){

$(function() {
            
//        var i = 0;
            
  $.scrollify({
    section : ".page-section",
    updateHash: false,
    scrollbars:false,
    sectionName:false,
    setHeights:false,
    overflowScroll:false,
    before: function() {
        if($.scrollify.current().hasClass('video-sect')){
            $("#video").get(0).play();
        } else {
            $("#video").get(0).pause();
        }
    },
    after: function() {}
  });

  $(".down-btn").click(function(e) { // e = event
        e.preventDefault();

        $.scrollify.next();
  });

  $(".up-btn").click(function(e) {
        e.preventDefault();

        $.scrollify.previous();
  });

});