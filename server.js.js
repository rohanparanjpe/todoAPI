var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;
// todos holds all out to do items
var todos = [{
    id: 1,
    description:'Meet mom for lunch',
    completed:false

},{
    
 id:2,
 description:'Go to market',
 completed:false      
    
}];
app.get('/',function(req,res){
    
 res.send('Todo API Root');   
    
});

// GET /todos
  app.get('/todos',function(req,res){
     res.json(todos); 
      
  });
// GET individual todos /todos/:id
app.get('/todos/:id',function(req,res){
    var todoId= parseInt(req.params.id,10); // convert string to int
    var matchedTodo; 
    
    // iterate of todo array.find a match'
    todos.forEach(function(todo){
        if(todoId === todo.id){
           matchedTodo=todo;     
        }
        
    });
    if(matchedTodo){
       res.json(matchedTodo);   
        
    }else{
    res.status(404).send();
    }
  
    
});
 

app.listen(PORT,function(){
    
 console.log('Express listening on port' +PORT + '!');   
});