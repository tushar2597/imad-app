var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles={
var articleone = {
  
  title:'article one',
  heading:'article one',
  date:'3 sep 2017',
  content: ` <p>
                    this is the content of my first article. this is what i want to share in my first article
                </p>
                <p>
                    hope u all like it well.this is the content of my first article. this is what i want to share in my first article
                </p>
                <p>
 }, 
 var articletwo={
     
     
     
     
     
     
 },
 var articlethree={
     
     
     
     
 }
 
};
 
 
 
 
 
 
 
 
function createtemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplate =`
<html>
    <head>
        <title>
            ${title}
        
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class='container'>
        <div>
            <a href='/'>home</a>
            <hr/>
            <h3>
                ${heading}
                </h3>
            <div>
                ${date}
            </div>    
            <div>
                
               ${content}
            </div>
            
            
        </div>
        </div>
    </body>

`;
return htmltemplate;
}


app.get('/article-one',function(req,res){
     res.send(createtemplate(articleone));
}

);
app.get('/article-two',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
}

);
app.get('/article-three',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
}

);
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
