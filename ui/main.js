console.log('Loaded!');

var element= document.getElementById("maintext");// changing the tewxt using javascript.
element.innerHTML="NEW VALUES SET USING JAVASCRIPT";

var img= document.getElementById('image');
var marginleft=0;
function moveright(){
    marginleft=marginleft+10;
    img.style.marginleft=marginleft+'px';
}
img.onclick=function(){
  var interval=setInterval(moveright,100)  ;
}
    
