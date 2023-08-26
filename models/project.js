const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    ProjectName: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    Issues: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue'
    }],
    Labels: [{
        type: String
    }]
},
    {
        timestamps: true,
    });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
