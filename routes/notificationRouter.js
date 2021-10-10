const express = require("express");
const bodyParser = require("body-parser");

const notificationRouter = express.Router();

notificationRouter.use(bodyParser.json());

notificationRouter
.route("/")
.get(async (req, res, next) => {
    /*await ClassTimetable.find({})
        .populate("class")
        .populate("classType")
        .then(
            (classTimetables) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(classTimetables);
            },
            (err) => {
                next(err);
            }
        )
        .catch((err) => {
            next(err);
        });*/
})
.post(async (req, res, next) => {
    /*let timetable = req.body;
    let newArrayObject = createSubjectObject(timetable);
    let newTimetableOb = changeArrayValues(timetable);

    await ClassTimetable.create(newTimetableOb)
        .then(
            (classTimetable) => {
                console.log(classTimetable);
                ClassTimetable.updateOne(
                    {_id: classTimetable._id},
                    {
                        $set: {
                            monday: newArrayObject.monday,
                            tuesday: newArrayObject.tuesday,
                            wednesday: newArrayObject.wednesday,
                            thursday: newArrayObject.thursday,
                            friday: newArrayObject.friday,
                        },
                    },
                    {useFindAndModify: false}
                ).then((classTimetable) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(classTimetable);
                });
            },
            (err) => {
                next(err);
            }
        )
        .catch((err) => {
            next(err);
        });*/
});

notificationRouter
.route("/:id")
.get(async (req, res, next) => {
    /* await ClassTimetable.findById(req.params.id)
         .populate("class")
         .populate("classType")
         .then(
             (classTimetable) => {
                 res.statusCode = 200;
                 res.setHeader("Content-Type", "application/json");
                 res.json(classTimetable);
             },
             (err) => {
                 next(err);
             }
         )
         .catch((err) => {
             next(err);
         });*/
});


module.exports = notificationRouter;
