var popup = window.open("", "_blank");
if(popup == null || popup === undefined){
  document.write("<h1>Disable your adblocker!</h1>");
}else{
  document.write("<p>If your adblocker is on please turn it off");
  window.open("https://pytutorials.github.io", "_blank");
}
