jQuery(document).ready(function($){

//$(function() {
            
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
        
        $('.page-section').removeClass('hot');
        
//        var currentSlide = $.scrollify.current().data('slide');
        var currentSlide = $.scrollify.currentIndex() +1 ;
        $('span.count').text(currentSlide+ ' / 17');
//        $.scrollify.currentIndex()
        $('.counter h3').each(function() {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({
    countNum: $this.text()
  }).animate({
      countNum: countTo
    },

    {
      duration: 2000,
      easing: 'linear',
      step: function() {
        $this.text(commaSeparateNumber(Math.floor(this.countNum)));
      },
      complete: function() {
        $this.text(commaSeparateNumber(this.countNum));
        //alert('finished');
      }
    }
  );

});

function commaSeparateNumber(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
}
        
    },
    after: function() {
        current = $.scrollify.current();
        current.addClass('hot');
        
        if($.scrollify.currentIndex() !== '0') {
            $('.prev').removeClass('hide');
        } if($.scrollify.currentIndex() !== '16') {
            $('.next').removeClass('hide');
        } if($.scrollify.currentIndex() == '0'){
            $('.prev').addClass('hide');
        } if($.scrollify.currentIndex() == '16'){
            $('.next').addClass('hide');
        } 
    },
  });

  $(".next").click(function(e) { // e = event
        e.preventDefault();

        $.scrollify.next();
  });

  $(".prev").click(function(e) {
        e.preventDefault();

        $.scrollify.previous();
  });
    
  

});

