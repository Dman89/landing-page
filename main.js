var lockToggle = function() {
  if ($("#PADLOCK").hasClass("fa-lock")) {
    $("#PADLOCK").addclass("fa-unlock-alt");
    $("#PADLOCK").removeclass("fa-lock");
  }
  if else (($"#PADLOCK").hasClass("fa-unlock-alt")) {
    $("#PADLOCK").addclass("fa-unlock");
    $("#PADLOCK").removeclass("fa-unlock-alt");
  }
  if else (($"#PADLOCK").hasClass("fa-unlock")) {
    $("#PADLOCK").addclass("fa-lock");
    $("#PADLOCK").removeclass("fa-unlock");
  }
}



$(document).ready(function() {
  $("#PADLOCKBTN").on("click", lockToggle())
})
