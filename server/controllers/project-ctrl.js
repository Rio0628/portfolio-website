const Project = require('../models/project-model');

createProject = (req, res) => {
    const body = req.body;

    if (!body) { return res.status(400).json({ success: false, error: 'You must provide a Project!'}) };

    const project = new Project(body);

    if (!project) { return res.status(400).json({ success: false, error: err}) };

    project.save().then( () => { return res.status(201).json({
        success: true,
        id: project._id, 
        message: 'Project Created!'
    }) }).catch( error => { return res.status(400).json({ error, message: 'Project not created!' }) });
};

getProjects = async (req, res) => {
    await Project.find({}, (err, projects) => {
        if (err) { return res.status(400).json({ success: false, error: err }) };

        if (!projects.length) { return res.status(404).json({ success: false, error: 'Project not found' }) };

        return res.status(200).json({ success: true, data: projects });
    }).catch( err => console.log(err) );
}

module.exports = { createProject, getProjects };