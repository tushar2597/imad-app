console.log('Loaded!');

var button =document.getElementById('counter');
button.onclick=function(){
    
   //create a request object
   
   var request=new XMLHttpRequest();
   
 
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.Done)
        {
            //take some action
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
                
            }
            
        }
    };
    // make a request
    request.open('GET', 'http://tushargoyal2597.imad.hasura-app.io/counter',true);
    request.send(null);
    
};
















   //changing valvue by simply clicking button.
  /*var button = document.getElementById('counter');
    var counter=0;
    button.onclick=function(){
         counter = counter+1;
        var span=document.getElementById('count');
        span.innerHTML=counter.toString();                                                                          
    };*/
        



 /*  var element= document.getElementById("maintext");// changing the tewxt using javascript.
    element.innerHTML="NEW VALUES SET USING JAVASCRIPT";
    */




/*making the image move
var t=document.getElementById('image');
t.onclick=function(){
    image.style.marginLeft='100px';
}*/



                              /* code to move image continuously on click
                                    //  var img= document.getElementById('image');
                            //                                    var marginLeft=0;
                                //function moveRight(){
                                //marginLeft=marginLeft+10;
                                // img.style.marginLeft=marginLeft +'px';
                            //}
                     //img.onclick=function(){
                            // var interval=setInterval(moveRight,100)  ;
                               //                              };
                              */
    
                                                    
  
        
        
    
