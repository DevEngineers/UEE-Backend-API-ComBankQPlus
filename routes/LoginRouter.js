const express = require("express");
const bodyParser = require("body-parser");
const Login = require("../models/Login");

const LoginRouter = express.Router();

LoginRouter.use(bodyParser.json());

LoginRouter.route('/')
    .get(async (req,res,next) =>{
        await Login.find({})
            .then((login) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(login);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })

    })
    .post(async(req,res,next) =>{
        await Login.create(req.body)
            .then((login) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(login);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })
    });
LoginRouter.route('/:id')
    .get(async (req,res,next) => {
        await Login.findById(req.params.id)
            .then((login) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(login);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
    })

module.exports = LoginRouter;
