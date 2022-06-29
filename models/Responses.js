const mongoose=require('mongoose')

const messSchema = new mongoose.Schema(
    {
        user:{
            type:moongose.Schema.types.id,
            ref:'user'
        },
        absentL: {
            type: Boolean,
            default:true
        },

        absentD: {
           type: Boolean,
           default:true
        },
       
        date:{
            type:Date,
            default:Date.now
        }
    }
)

module.exports=Mess=mongoose.model('mess',messSchema);