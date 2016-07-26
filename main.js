//This landing page using a technique I use to pick color schemes. I choose a picture I love and extract colors with a droplet to begin testing. I arrange different palattes based on the colors I selected. The original picture was deleted by the owner ( Learned to save a copy locally, incase you want to use it in your portfolio :D ), but I have another picture of the same beach

//A simple landing page to display my artistic talent, quarky idea and unlock your Potential

//GOAL: Make a page that moves people to action.

// Unlock your potential toggle button
var toggleButton = function() {
  // Binary Toggle
     var toggleLock = 0;
    $("#PADLOCKBTN").on("click", function() {
      //Change HTML based on Current State to appear like the lock is unlocking (click state)
      if (toggleLock == 0) {
    $("#PADLOCKBTN").html('<i id="PADLOCK" class="fa fa-unlock"></i> Maximum Potential Unleashed');
         toggleLock = 1;
      }
      else if (toggleLock == 1) {
      $("#PADLOCKBTN").html('<i id="PADLOCK" class="fa fa-lock"></i> Unlock Your Potential');
         toggleLock = 0;
      }
    }).mousedown(function() {
      //Change HTML based on Current State to appear like the lock is unlocking (hover state)
      if (toggleLock == 0) {
    $("#PADLOCKBTN").html('<i id="PADLOCK" class="fa fa-unlock-alt"></i> Unlocking Your Potential');
      }
      else if (toggleLock == 1) {
      $("#PADLOCKBTN").html('<i id="PADLOCK" class="fa fa-unlock-alt"></i> Locking Your Potential');
      }
    })
}

$(document).ready(function() {
  toggleButton();
});
