const express = require('express');
const router = express.Router();

const courses = require('../data/courses.json');

router.get('/course/:courseId', (req, res) => {
    const id = Number(req.params.courseId);
    const course_result = courses.find(course => course.id === id);

    if (!course_result) {
        return res.status(404).send('course not found');
    }

    res.json(courses);
});

router.get('/course', (req, res) => {
    res.send(courses);
});

module.exports = router;

