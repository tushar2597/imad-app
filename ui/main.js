console.log('Loaded!');

 //  var element= document.getElementById("maintext");// changing the tewxt using javascript.
  //  element.innerHTML="NEW VALUES SET USING JAVASCRIPT";




//making the image move
//var t=document.getElementById('image');
//t.onclick=function(){
    //image.style.marginLeft='100px';
//}



// code to move image continuously on click
//  var img= document.getElementById('image');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft +'px';
}
img.onclick=function(){
  var interval=setInterval(moveRight,100)  ;
};
    
    
    //counter code.
    var button=document.getElementById('counter');
    botton.onclick=function(){
        //make 
        
        
        
    }
