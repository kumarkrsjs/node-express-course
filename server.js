const express = require('express');
const app = express();

const mockData = [
    {id:1,name:'Mark'},
    {id:2, name:'Jill'}
]

app.get('/users/:id', function(req, res){
    console.log(req.params.id)
    res.json(
        {
            success: true,
            message: 'successfully got users. Nice!',
            user: req.params.id
        }
    )
})

app.listen(8000, function(){
    console.log("server is running")
})