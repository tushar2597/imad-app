console.log('Loaded!');

var element= document.getElementById("maintext");// changing the tewxt using javascript.
element.innerHTML="NEW VALUES SET USING JAVASCRIPT";




//making the image move
//var t=document.getElementById('image');
//t.onclick=function(){
    //image.style.marginLeft='100px';
//}
var img= document.getElementById('image');
var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onClick=function(){
  var interval=setInterval(moveright,100)  ;
};
    
