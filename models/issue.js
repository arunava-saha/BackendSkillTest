const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    Type: {
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
    Labels: [{
        type: String,
        required: true
    }]
},
    {
        timestamps: true,
    });

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
