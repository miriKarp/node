const express = require('express');
const workers = require('./controllers/workersControllers');
const courses = require('./controllers/coursesControllers');
const app = express();

const port = 3000;

app.use(workers);
app.use(courses);


app.listen(port, () => {
    console.log("port 8000");
});