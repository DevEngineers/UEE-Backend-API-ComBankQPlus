const express = require("express");
const bodyParser = require("body-parser");
const Card = require("../models/Card");

const cardRouter = express.Router();

cardRouter.use(bodyParser.json());

cardRouter
    .route("/")
    .post(async (req, res, next) => {
        await Card.create(req.body)
            .then(
                (card) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(card);
                },
                (err) => {
                    next(err);
                }
            )
            .catch((err) => {
                next(err);
            });
    });

cardRouter
    .route("/")
    .get(async (req, res, next) => {
        await Card.find({})
            .then((card) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json")
                    res.json(card);
                },
                (err) => {
                    next(err);
                }
            )
            .catch((err) => {
                next(err);
            });

    });

cardRouter
    .route("/:id")
    .get(async (req, res, next) => {
        await Card.findById(req.params.id)
            .then(
                (card) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(card);
                },
                (err) => {
                    next(err);
                }
            )
            .catch((err) => {
                next(err);
            });
    });

cardRouter
    .route("/:id")
    .delete(async (req, res, next) => {
        await Card.findByIdAndRemove(req.params.id)
            .then((card) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(card);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
    });

module.exports = cardRouter;
