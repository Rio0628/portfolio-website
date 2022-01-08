const mongoose = require('mongoose');

const Project = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    technologies: { type: [String], required: true },
    url: { type: String, required: true },
}, { timestamps: true } );

module.exports = mongoose.model( 'projects', Project );