const express = require("express");
const bodyParser = require("body-parser");
const Complaint = require("../models/Complaint");
const ComplaintRouter = express.Router();

ComplaintRouter.use(bodyParser.json());

ComplaintRouter.route('/')
    .get(async (req,res,next) =>{
        await Complaint.find({})
            .then((complaint) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(complaint);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })

    })
    .post(async(req,res,next) =>{
        await Complaint.create(req.body)
            .then((complaint) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(complaint);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })
    });
ComplaintRouter.route('/:id')
    .get(async (req,res,next) => {
        await Complaint.findById(req.params.id)
            .then((complaint) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(complaint);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
    })


module.exports = ComplaintRouter;
