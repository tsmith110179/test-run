// HAMBURGLERv2

function togglescroll () {
  $('body').on('touchstart', function(e){
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

$(document).ready(function () {
    togglescroll()
    $(".icon").click(function () {
        $(".hamburglernav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $("body").toggleClass("noscroll");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });
});

// PUSH ESC KEY TO EXIT

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        $(".hamburglernav").fadeOut(500);
        $(".top-menu").removeClass("top-animate");
        $("body").removeClass("noscroll");
        $(".mid-menu").removeClass("mid-animate");
        $(".bottom-menu").removeClass("bottom-animate");
    }
});


$(document).ready(function(){
  $(".column-1").mouseover(function(){
    $(".sub-menu").css({'display':'block'});
  });
  $(".column-1").mouseout(function(){
    $(".sub-menu").css({'display':'none'});
  });
});

$(document).ready(function(){
  $(".column-2").mouseover(function(){
    $(".sub-menu-1").css({'display':'block'});
  });
  $(".column-2").mouseout(function(){
    $(".sub-menu-1").css({'display':'none'});
  });
});

$(document).ready(function(){
  $(".column-3").mouseover(function(){
    $(".sub-menu-2").css({'display':'block'});
  });
  $(".column-3").mouseout(function(){
    $(".sub-menu-2").css({'display':'none'});
  });
});

$(document).ready(function(){
  $(".sub-menu").mouseover(function(){
    $(".sub-menu").css({'display':'block'});
  });
  $(".sub-menu").mouseout(function(){
    $(".sub-menu").css({'display':'none'});
  });
});

$(document).ready(function(){
  $(".sub-menu-1").mouseover(function(){
    $(".sub-menu-1").css({'display':'block'});
  });
  $(".sub-menu-1").mouseout(function(){
    $(".sub-menu-1").css({'display':'none'});
  });
});

$(document).ready(function(){
  $(".sub-menu-2").mouseover(function(){
    $(".sub-menu-2").css({'display':'block'});
  });
  $(".sub-menu-2").mouseout(function(){
    $(".sub-menu-2").css({'display':'none'});
  });
});


function search_animal() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('animals'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item"; 
            $("#list").css({'display':'block'});                 
        } 
    } 
} 