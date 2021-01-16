$(document).ready(function(){
  PopUpHide();
  $(".burg-button").click(function(){
    $(".burg-button").toggleClass("active");

    $( ".burg-menu" ).toggle( 500, "linear", function(){ 
      console.log ("toggle completed");
      if( $(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});

function PopUpShow(){
  $(".popub").addClass('active');
}
function PopUpHide(){
  $(".popub").removeClass('active');
}
function PopUpShowAd(){
  $(".popub-ad").addClass('active');
  $(".popub").removeClass('active');
}
function PopUpHideAd(){
  $(".popub-ad").removeClass('active');
}



$(".burg").click(function(){
  $(".burg").toggleClass("active");

  $( ".burg-menu" ).toggle( 500, "linear", function(){ 
    console.log ("toggle completed");
    if( $(this).css('display') === "none"){
      $(this).removeAttr('style');
    }
  });
});
