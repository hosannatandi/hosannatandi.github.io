var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
// this is a local resource // change it
button1.onclick = function(){
    location.href = "final.html";
};
button2.onclick = function(){
    location.href = "final2.html";
};
button3.onclick = function(){
  location.href = "final3.html";
};
button4.onclick = function(){
  location.href = "final4.html";
};
button5.onclick = function(){
  location.href = "final5.html";
};

audioPlayer();
function audioPlayer(){
  var currentSong = 0;
  $("#audioPlayer")[0].src = $("#playlist li a")[0];
  //$("#audioPlayer")[0].play();
  $("#playlist li a").click(function(e){
    e.preventDefault();
    $("#audioPlayer")[0].src = this;
    $("#audioPlayer")[0].play();
    $("#playlist li").removeClass("current-song");
      currentSong = $(this).parent().index();
      $(this).parent().addClass("current-song");
  });
    $("#audioPlayer")[0].addEventListener("ended", function(){
     currentSong++;
     if(currentSong == $("#playlist li a").length)
        currentSong = 0;
    $("#playlist li").removeClass("current-song");
    $("#playlist li:eq("+currentSong+")").addClass("current-song");
    $("audioPlayer")[0].src = $("playlist li a")[currentSong].href;
    $("audioPlayer")[0].play();
  });
}

jQuery(document).ready(function(){
"use strict"
  $('.slider').ripples({
    dropRadius: 10,
    perturbance: 0.01,
    
});

});
