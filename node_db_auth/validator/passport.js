const passport = require('passport');
const localpassport = require('passport-local').Strategy;
const db = require('../Model/index');
const register_user = db.register_user;
const bcrypt  = require('bcrypt');


passport.use(
   new localpassport({ usernameField: "email"},
   async (email,password,done)=>{
       try{
        const user = await register_user.findOne({where:{email:email}},
            function(err){
                    console.log(err)
                return done(err);})
                if(!user){
                    return done(null,false,{message:"Incorrect email"})
                 }
                 const result = user;
               const value = await bcrypt.compareSync(password,result.password);
                if(value===true){
                    return done(null,user);
                }
                else{
                    return done(null,false,{message:"password is wrong"})
                }
    
                

            }
        
            
        catch(error){
            console.log(error);
        }               
          
            
   })
)