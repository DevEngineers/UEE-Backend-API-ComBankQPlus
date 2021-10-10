const express = require("express");
const bodyParser = require("body-parser");
const BillAccount = require("../models/BillAccount");

const billAccountRouter = express.Router();

billAccountRouter.use(bodyParser.json());

billAccountRouter
.route("/")
.post(async (req, res, next) => {
    let account = req.body;
    await BillAccount.create(account)
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

billAccountRouter
.route("/:id")
.get(async (req, res, next) => {
    await BillAccount.find({accountNo:req.params.id})
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


module.exports = billAccountRouter;
