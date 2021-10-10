const express = require("express");
const bodyParser = require("body-parser");
const CustomerProfile = require("../models/CustomerProfile");

const CustomerProfileRouter = express.Router();

CustomerProfileRouter.use(bodyParser.json());

CustomerProfileRouter.route('/')
    .get(async (req,res,next) =>{
        await CustomerProfile.find({})
            .then((profile) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(profile);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })

    })
    .post(async(req,res,next) =>{
        await CustomerProfile.create(req.body)
            .then((profile) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(profile);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })
    });
CustomerProfileRouter.route('/:id')
    .get(async (req,res,next) => {
        await CustomerProfile.findById(req.params.id)
            .then((profile) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(profile);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
    })

module.exports = CustomerProfileRouter;
