const express = require("express");
const bodyParser = require("body-parser");
const ChangePin = require("../models/ChangePin");

const ChangePinRouter = express.Router();

ChangePinRouter.use(bodyParser.json());

ChangePinRouter.route('/')
    .get(async (req,res,next) =>{
        await ChangePin.find({})
            .then((changepin) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(changepin);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })

    })
    .post(async(req,res,next) =>{
        await ChangePin.create(req.body)
            .then((changepin) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(changepin);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })
    });
ChangePinRouter.route('/:id')
    .get(async (req,res,next) => {
        await ChangePin.findById(req.params.id)
            .then((changepin) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(changepin);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
    })

module.exports = ChangePinRouter;
