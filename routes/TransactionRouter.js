const express = require("express");
const bodyParser = require("body-parser");
const Transaction = require("../models/Transaction");

const transactionRouter = express.Router();

transactionRouter.use(bodyParser.json());

transactionRouter
    .route("/")
    .post(async (req, res, next) => {
        await Transaction.create(req.body)
            .then((transaction) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(transaction);
                },
                (err) => {
                    next(err);
                }
            )
            .catch((err) => {
                next(err);
            });
    });

transactionRouter
    .route("/")
    .get(async (req, res, next) => {
        await Transaction.find({})
            .populate("fromAccount")
            .then((transaction) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json")
                    res.json(transaction);
                },
                (err) => {
                    next(err);
                }
            )
            .catch((err) => {
                next(err);
            });

    });

transactionRouter
    .route("/:id")
    .get(async (req, res, next) => {
        await Transaction.find(req.params.id).sort({Date: 1})
            .populate("fromAccount")
            .then(
                (transaction) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(transaction);
                },
                (err) => {
                    next(err);
                }
            )
            .catch((err) => {
                next(err);
            });
    });


module.exports = transactionRouter;
