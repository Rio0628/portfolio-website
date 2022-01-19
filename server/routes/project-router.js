const express = require('express');
const ProjectCtrl = require('../controllers/project-ctrl');
const router = express.Router();

router.post('/project', ProjectCtrl.createProject);
router.get('/project', ProjectCtrl.getProjects);

module.exports = router; 