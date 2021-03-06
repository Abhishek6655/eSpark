const express =require('express');
const router =express.Router();
const {signup,signin,signout,requireSignin}=require('../controllers/auth');
//const {signin}=require('../controllers/user');
//const {signout}=require('../controllers/user');
const {userSignupValidator}=require('../validator/index');
router.post('/signup',userSignupValidator,signup);
router.post('/signin',signin);
router.get("/signout",signout);
module.exports = router;