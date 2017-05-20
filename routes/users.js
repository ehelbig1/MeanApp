const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Message = require('../models/message');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        permission: req.body.permission
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: 'Failed to register user'});
        }else{
            res.json({success: true, msg: 'User created!'});
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const permission = req.body.permission;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found!'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 86400 //1 day
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        permission: user.permission
                    }
                });
            }else{
                return res.json({success: false, msg: 'Password does not match database.'});
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

router.post('/message', (req, res) => {
    let newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    Message.addMessage(newMessage, (err, user) => {
        if(err){
            res.json({success: false, msg: 'Something went wrong.'});
        }else{
            res.json({success: true, msg: 'Your message has been sent!'});
        }
    });
});

module.exports = router;