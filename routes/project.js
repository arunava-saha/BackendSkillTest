const express = require('express');
const router = express.Router();
const { } = require('../controllers/project');
const { createProject, findProject, createIssue } = require('../controller/project');

router.post('/create', createProject);
router.route('/:id').get(findProject).post(createIssue);

module.exports = router;