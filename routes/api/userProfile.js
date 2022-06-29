const express=require('express')
const User=require('../../models/User')
const auth=require('../../middleware/auth')
const UserProfile=require('../../models/Userprofile')
const jwt=require('jsonwebtoken')
const app=express();

app.get('/me',auth,async(req,res)=>{

    try{
        const profile = await UserProfile.findOne({user:req.user.id}).populate('user',['name','email']);
        if(!profile)
        {
            return res.json({msg:'There is no such user'})
        }

        res.send(profile)


    }
    catch(err)
    {
        console.log(err);
        res.send('server error');
    }
});

// POST api/profile
// create user 
// private

// here automatically when my api is called here in the internal database will check for the user and number of NO's
// that internal DB contains [username,date,time,yes/no,..any other]
// find data from there and input this to userProfile data or increment contributions

app.post('/',auth,async(req,res)=>{

    const {contributions}=req.body;

    const usProfile={}
    usProfile.user=req.user.id;
    if(contributions) usProfile.contributions=contributions;

   //console.log(usProfile)
   try{
         let  profile=await UserProfile.findOne({user:req.user.id});
         if(profile)
         {
             console.log("In update")
             profile=await UserProfile.findOneAndUpdate({user:req.user.id},{$set:usProfile},{new:true})
             return res.json(profile)
         }
       

         //create
         profile= new UserProfile(usProfile)
         await profile.save();
         res.json(profile)
   }
   catch(err)
   {
       res.send(err)
   }

})

module.exports=app;