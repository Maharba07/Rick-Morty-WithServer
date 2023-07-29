const users = require('../utils/utils')
module.exports = (req, res)=> {
    const { email, password} = req.query;

    let access = false;
     const user = users.find(user => user.email === email && user.password === password)

     if(user){
        return res.status(200).json({access:true}) 
     }else{
         return res.status(403).json({access:false})
     }

}