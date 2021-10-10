const express = require("express");
const bodyParser = require("body-parser");

const notificationRouter = express.Router();
const Notification = require("../models/Notifcation");
notificationRouter.use(bodyParser.json());

notificationRouter
.route("/")
.get(async (req, res, next) => {
    await Notification.find({})
        .then(
            (Notifications) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(Notifications);
            },
            (err) => {
                next(err);
            }
        )
        .catch((err) => {
            next(err);
        });
})
.post(async (req, res, next) => {
    await Notification.create(req.body)
        .then(
            (notification) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(notification);
            },
            (err) => {
                next(err);
            }
        )
        .catch((err) => {
            next(err);
        });
});

notificationRouter.route("/:id")
.delete(async (req, res, next) => {
    await Notification.findByIdAndRemove(req.params.id)
    .then((notification) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(notification);
    },(err) => {
        next(err);
    })
    .catch((err) => {
        next(err);
    })
});


module.exports = notificationRouter;
