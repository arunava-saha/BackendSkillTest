const Project = require('../models/project');
const Issue = require('../models/issue');
const { findById } = require('../models/project');

// create a project 
module.exports.createProject = async function (req, res) {
    try {
        Project.create({
            ProjectName: req.body.Name,
            Description: req.body.Description,
            Author: req.body.Author,
        });
        return res.redirect('back');
    } catch (err) {
        console.log(err);
        return res.redirect('back');
    }
};

// find a project by ID and display it in the project page
module.exports.findProject = async function (req, res) {
    try {
        let project = await Project.findById(req.params.id).populate({
            path: 'issues',
        });
        if (project) {
            return res.render('project', {
                Title: 'Project Page',
                project,
            });
        }
        return res.redirect('back');
    } catch (err) {
        console.log(err);
        return res.redirect('back');
    }
};

// create issue of the project
module.exports.createIssue = async function (req, res) {
    try {
        let project = await Project.findById(req.params.id);
        if (project) {
            let issue = await Issue.create({
                Type: req.body.issue,
                Description: req.body.Description,
                Labels: req.body.Labels,
                Author: req.body.Author,
            });
            project.Issues.push(issue);

            if (!(typeof req.body.Labels === 'string')) {
                for (let label of req.body.Labels) {
                    let isPresent = project.Labels.find((obj) => obj == label);
                    if (!isPresent) {
                        project.Labels.push(label);
                    }
                }
            } else {
                let isPresent = project.labels.find((obj) => obj == req.body.Labels);
                if (!isPresent) {
                    project.Labels.push(req.body.Labels);
                }
            }
            await project.save();
            return res.redirect(`back`);
        } else {
            return res.redirect('back');
        }
    } catch (err) {
        return res.redirect('back');
    }
};
