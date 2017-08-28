var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles={
 'article-one': {
   title:'article one|tushar goayl',
  heading:'article one',
  date:'3 sep 2017',
  content: ` <p>
                    this is the content of my first article. this is what i want to share in my first article
                </p>
                <p>
                    hope u all like it well.this is the content of my first article. this is what i want to share in my first article
                </p>
                <p>`
 }, 
  'article-two':{
      title:'article two|tushar goyal',
  heading:'article two',
  date:'5 sep 2017',
  content: `
  <p>
this is the content of my second article.
       </p>    `        
     
 },
  'article-three':{
     
     title:'article three|tushar goyal',
  heading:'article three',
  date:'8 sep 2017',
  content: `<p>
                    this is the content of my third article.
             </p>
             `
     
  }
};
 
function createtemplate(data){
    var title =data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplate =   `                                                                         
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
                
                <p>
                  ${content}
                </p>
            </div>
            
            
        </div>
        </div>
    </body>
              
</html>
`
;
return htmltemplate;
}


app.get('/:articlename',function(reg,res){
//articlename==article-one
//articles[articlename]==contents for article one
var articlename=reg.params.articlename;
     res.send(createtemplate(articles[articlename]));
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
