const express = require('express');
const router = express.Router();
const { createProject, findProject, createIssue } = require('../controller/project');

router.post('/createProject', createProject);
router.route('/:id').get(findProject).post(createIssue);

module.exports = router;