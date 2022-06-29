// contributions he made
const mongoose=require('mongoose')

const userProfileSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    contributions:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=UserProfile=mongoose.model('userprofile',userProfileSchema);