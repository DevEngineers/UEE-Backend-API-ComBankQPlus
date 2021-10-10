const express = require("express");
const bodyParser = require("body-parser");
const ForgotPin = require("../models/ForgotPin");

const ForgotPinRouter = express.Router();

ForgotPinRouter.use(bodyParser.json());

ForgotPinRouter.route('/')
    .get(async (req,res,next) =>{
        await ForgotPin.find({})
            .then((forgotpin) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(forgotpin);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })

    })
    .post(async(req,res,next) =>{
        await ForgotPin.create(req.body)
            .then((forgotpin) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(forgotpin);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })
    });
ForgotPinRouter.route('/:id')
    .get(async (req,res,next) => {
        await ForgotPin.findById(req.params.id)
            .then((forgotpin) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(forgotpin);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
    })

module.exports = ForgotPinRouter;
