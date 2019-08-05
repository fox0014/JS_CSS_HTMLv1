
window.onload = appendText;


var status = true;
DiGui = appendText
$.ajax({ 
 success: function (returnValue) {       
  if (status) {
   status= false; 
　　　　　　　window.setInterval("DiGui()", 60000); 
　　　　}
 　　} 
　});