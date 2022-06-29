const { Double } = require('bson');
const mongoose=require('mongoose')

const messSchema = new mongoose.Schema(
    {
        user:{
            type:moongose.Schema.types.ObjectId,
            ref:'admin'
        },
        total: {
            type: Number,
            required: true
        },

        absentL: {
            type: Number
        },

        absentD: {
           type: Number
        },
        
        foodwastage : {
            type : Double,
            required : true
        },

        messages :{
            type : String,
            
        }
    }
)

module.exports=Mess=mongoose.model('mess',messSchema);