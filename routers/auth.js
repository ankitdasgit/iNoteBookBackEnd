express = require('express');
const User = require('../models/User');
router = express.Router(); 



router.get('/',(req, res)=>{
 
       console.log(req.body);

       const user= User(req.body);
        user.save()
       
       res.send(req.body);
})


router.post('/',(req, res)=>{
 
    console.log(req.body);

    const user= User(req.body);
     user.save()
    
    res.send(req.body);
})



module.exports= router