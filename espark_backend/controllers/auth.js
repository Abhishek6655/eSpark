const User = require('../models/user');
const {errorHandler}=require('../helpers/dbErrorHandler')
const jwt =require('jsonwebtoken');
const expressjwt=require('express-jwt');


exports.signup = (req,res)=>{
    console.log("req.body",req.body);
    const user= new User(req.body);
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err:errorHandler(err)
            });
        }
        user.salt=undefined;
        user.hashed_password=undefined;
        res.json({
            user
        });
    });
};

exports.signin=(req,res)=>{
const {email,password}=req.body;
User.findOne({email},(err,user)=>{
    if(err || !user){
        return res.status(400).json({
            error:"user not found please signup"
        })
    }
    if(!user.authenticate(password)){
        return res.status(401).json({
             error:"wrong password"
        })
    }
    const token =jwt.sign({_id:user._id},process.env.JWT_SECRET)
    const cookie=("t",token,{expire: new Date()+9999});
    const {_id,email,name,role}=user;
    return res.json({token,user:{_id,email,name,role}})
})
};
exports.signout=(req,res)=>{
    res.clearCookie('t');
    res.json({
        message:"signout succesful"
    });

};

exports.requireSignin=expressjwt({
    secret:process.env.JWT_SECRET,
    userProperty:'auth'
})
exports.isAuth=(req,res,next)=>{
    let user = req.profile && req.auth && req.profile.id==req.auth._id;
    if(!user){
        return res.status(403).json({
            error:"access denied "
        });
    };
    next();
};

exports.isAdmin=(req,res,next)=>{
    if(req.profile.role===0){
        return res.status(403).json({
            error:"access denied,only for admin "
        });
    };
    next();
};