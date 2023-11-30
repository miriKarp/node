const express = require('express');
const router = express.Router();

const workers = require("../data/workers.json");


router.get('/worker/:workerId', (req, res) => {
    const id = Number(req.params.workerId);
    const worker = workers.find(worker => worker.id === id);

    if (!worker) {
        return res.status(404).send('worker not found');
    }

    res.json(worker);
});

router.get('/worker/query', (req, res) => {
    const condition = req.query.name.toLowerCase();
    const worker_result = workers.filter(worker => worker.name.toLowerCase().includes(condition))
    if (worker_result.length < 1) {
        return res.status(200).send('no worker matched your condition');
    }
    res.json(worker_result);
});

module.exports = router;
