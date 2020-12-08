var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

button1.onclick = function(){
    location.href = "file:///Users/hosannatandi/Desktop/WebDev/hosannatandi.github.io/final/final.html";
};
button2.onclick = function(){
    location.href = "file:///Users/hosannatandi/Desktop/WebDev/hosannatandi.github.io/final/final2.html";
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
