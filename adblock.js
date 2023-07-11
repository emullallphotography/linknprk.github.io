var popup = window.open("", "_blank");
if(popup == null || typeof(popup) == 'undefined'){
  //adblocker may be present
  document.write("Disable your adblocker");
}else{
  //popup blocked or closed
  alert("Disable your adblocker!");
}
