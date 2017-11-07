$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css({'background-color': '#FFFFFF','border-bottom':'2px solid #3D9EE3'});
       } else {
          $('.navbar').css({'background-color': 'transparent','border-bottom':'0'});
       }
   });
    }
    //    TASK PAGE SCRIPT
   $(".project-card").click(function(){
      var num = $(this).attr('id');
      var numberPattern = /\d+/g;

      var mod = num.match( numberPattern );
     $('#myModal'+mod).modal();
      });
    //    PROJECT PAGE SCRIPT
    $("#profile").hover(function(){
      $("#prof-info").slideToggle("slow");
    });
    $("#crypto").hover(function(){
      $("#cryp-info").slideToggle("slow");
    });
    $("#droid").hover(function(){
      $("#droid-info").slideToggle("slow");
    });
    $("#app").hover(function(){
      $("#app-info").slideToggle("slow");
    });
    $("#finance").hover(function(){
      $("#finance-info").slideToggle("slow");
    });
    $("#carhire").hover(function(){
      $("#carhire-info").slideToggle("slow");
    });

});