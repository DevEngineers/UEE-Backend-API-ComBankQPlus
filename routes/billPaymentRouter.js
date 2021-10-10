const express = require("express");
const bodyParser = require("body-parser");
const BillCategory = require("../models/BillCategory");

const billPaymentRouter = express.Router();

billPaymentRouter.use(bodyParser.json());

billPaymentRouter
    .route("/")
    .post(async (req, res, next) => {
        let category = req.body;
        await BillCategory.create(category)
            .then(
                (category) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(category);
                },
                (err) => {
                    next(err);
                }
            )
            .catch((err) => {
                next(err);
            });
    });

billPaymentRouter
    .route("/:id")
    .get(async (req, res, next) => {
        await BillCategory.find({id:req.params.id})
            .then(
                (category) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(category);
                },
                (err) => {
                    next(err);
                }
            )
            .catch((err) => {
                next(err);
            });
    });

billPaymentRouter
.route("/bill/payment")
.get(async (req, res, next) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({message:"bill paid"});
});


module.exports = billPaymentRouter;
