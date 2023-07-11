var popup = window.open("", "_blank");
if(popup == null || popup === undefined){
  document.body.style.display = "none"; 
  document.write("<h1>Disable your adblocker!</h1>");
}else{
  document.write("<p>If your adblocker is on please turn it off</p>");
  window.open("https://pytutorials.github.io", "_blank");
  popup.close();
}
