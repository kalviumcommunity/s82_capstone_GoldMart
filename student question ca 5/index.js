const express = require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const user = require('./models/users');
const course = require('./models/course');
const app = express();
app.use(express.json());

const db = async()=>{


mongoose.connect(process.env.MONGO_URI => {
    .then {
        console.log('mongodb is connected')
    }

    .catch(err) {
        console.log('error',err)
    }
})
app.get ('./user:id', async (req,res =>{
    try{
        const user{name,age,email,course} = req.body;
        await tofindbyId(user);
        await user.save();
        res.status(201).json('users')
    }catch(err){
        res.status(400).json('error:',err.message)
    }
}));

app.post ('./user ',async (req,res=>{
    try{
        const user { name , age,email,course} = req.body;
        const newuser = new user(name , age,email,course)
        await save.newuser()
        res.status(201).json('user') 
    }catch(err){
        res.status(400).json('error:',err.message);
    };
}));
app.post('./course',async(req,res=>{
    try{
        const course { course Name} = req.body;
        if (!user) res.status(400).json('error:',err.message)
        const newcourse = newcourse(coursename)
        await save.newcourse()
        res.status(201).json('user')

    }catch(err){
        res.status(400).json('error:',err.message);
    }
}))
app.put('./user',async(req,res=>{
    try{
        const user {name , age , email , course} = req.body
        await user.update(assignedTO);
        await tofindbyId('user');
        const update ={name , age , email , course}
        await user.update();
        res.status(201).json('user')
    }catch(err){
        res.status(400).json('error:',err.message)
    };

}));
db();
app.post('')
const PORT(process.env.PORT)||3000;
app.listen(PORT()=>{
    console.log(`server is running on the PORT${PORT}`)
});
