const express = require('express');
const router = express.Router();
const { findProject, createIssue, createProject } = require('../controller/project');

router.post('/create', createProject);
router.get('/:id', findProject);
router.post('/:id', createIssue);

module.exports = router;