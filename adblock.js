var popup = window.open("", "_blank")
if(popup == null || popup == undefined){
  alert("If you feel like disabling your adblock please do");
}else{
  window.open("https://pytutorials.github.io/", "_blank");
  popup.close();
}
