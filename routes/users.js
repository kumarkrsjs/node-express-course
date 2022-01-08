const express = require('express');
var router = express.Router();


router.get('/:id', function(req, res){
    console.log(req.params.id)
    res.json(
        {
            success: true,
            message: 'successfully got users. Nice!',
            user: req.params.id
        }
    )
});