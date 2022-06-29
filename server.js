const express=require('express')
const connectDB=require('./config/db')
const User=require('./models/User')
const {check,validationResult}=require('express-validator')
const bcrypt=require('bcryptjs')
const cors=require('cors')
const path=require('path')
const app=express();
const PORT=process.env.PORT || 5000
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))



connectDB();
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/users',require('./routes/api/users'))
app.use('/api/admin/auth',require('./routes/api/adminauth'))
app.use('/api/admin/users',require('./routes/api/admin'))
app.use('/api/profile',require('./routes/api/userProfile'))
if(process.env.NODE_ENV==='production')
{
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}
app.listen(PORT,()=>{
    console.log("listening in port 5000")
})