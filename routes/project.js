const express = require('express');
const router = express.Router();
const project = require('../controller/project');

router.post('/create', project.create);
router.get('/:id', project.project);
router.post('/:id', project.createIssue);

module.exports = router;