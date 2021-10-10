const express = require("express");
const bodyParser = require("body-parser");
const Signup = require("../models/Signup");

const SignupRouter = express.Router();

SignupRouter.use(bodyParser.json());

SignupRouter.route('/')
    .get(async (req,res,next) =>{
        await Signup.find({})
            .then((signup) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(signup);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })

    })
    .post(async(req,res,next) =>{
        await Signup.create(req.body)
            .then((signup) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(signup);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })
    });
SignupRouter.route('/:id')
    .get(async (req,res,next) => {
        await Signup.findById(req.params.id)
            .then((signup) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(signup);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
    })

module.exports = SignupRouter;
