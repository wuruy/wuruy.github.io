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

//PopUp1

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

//PopUp2

function PopUpShow2(){
  $(".popub2").addClass('active');
}
function PopUpHide2(){
  $(".popub2").removeClass('active');
}
function PopUpShowAd2(){
  $(".popub-ad2").addClass('active');
  $(".popub2").removeClass('active');
}
function PopUpHideAd2(){
  $(".popub-ad2").removeClass('active');
}

//PopUp4

function PopUpShow3(){
  $(".popub3").addClass('active');
}
function PopUpHide3(){
  $(".popub3").removeClass('active');
}
function PopUpShowAd3(){
  $(".popub-ad3").addClass('active');
  $(".popub3").removeClass('active');
}
function PopUpHideAd3(){
  $(".popub-ad3").removeClass('active');
}

//PopUp4

function PopUpShow4(){
  $(".popub4").addClass('active');
}
function PopUpHide4(){
  $(".popub4").removeClass('active');
}
function PopUpShowAd4(){
  $(".popub-ad4").addClass('active');
  $(".popub4").removeClass('active');
}
function PopUpHideAd4(){
  $(".popub-ad4").removeClass('active');
}

//PopUp5

function PopUpShow5(){
  $(".popub5").addClass('active');
}
function PopUpHide5(){
  $(".popub5").removeClass('active');
}
function PopUpShowAd5(){
  $(".popub-ad5").addClass('active');
  $(".popub5").removeClass('active');
}
function PopUpHideAd5(){
  $(".popub-ad5").removeClass('active');
}

//PopUp6

function PopUpShow6(){
  $(".popub6").addClass('active');
}
function PopUpHide6(){
  $(".popub6").removeClass('active');
}
function PopUpShowAd6(){
  $(".popub-ad6").addClass('active');
  $(".popub6").removeClass('active');
}
function PopUpHideAd6(){
  $(".popub-ad6").removeClass('active');
}

//PopUp7

function PopUpShow7(){
  $(".popub7").addClass('active');
}
function PopUpHide7(){
  $(".popub7").removeClass('active');
}
function PopUpShowAd7(){
  $(".popub-ad7").addClass('active');
  $(".popub7").removeClass('active');
}
function PopUpHideAd7(){
  $(".popub-ad7").removeClass('active');
}

//PopUp8

function PopUpShow8(){
  $(".popub8").addClass('active');
}
function PopUpHide8(){
  $(".popub8").removeClass('active');
}
function PopUpShowAd8(){
  $(".popub-ad8").addClass('active');
  $(".popub8").removeClass('active');
}
function PopUpHideAd8(){
  $(".popub-ad8").removeClass('active');
}

//PopUp9

function PopUpShow9(){
  $(".popub9").addClass('active');
}
function PopUpHide9(){
  $(".popub9").removeClass('active');
}
function PopUpShowAd9(){
  $(".popub-ad9").addClass('active');
  $(".popub9").removeClass('active');
}
function PopUpHideAd9(){
  $(".popub-ad9").removeClass('active');
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
