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

app.post('/login', function(re, res){
    const userName = req.body.username;
    const password = req.body.password;

    // This should come from the database
    const mockUsername="billyTheKid";
	const mockPassword="superSecret";

    if(username === mockUsername && password == mockPassword){
        re.json({
            success:true,
            message: 'password and username match!',
			token: 'encrypted token goes here'
        })
    } else {
        res.json({
			success: false,
			message: 'password and username do not match'
		})
    }

})

app.listen(8000, function(){
    console.log("server is running")
})