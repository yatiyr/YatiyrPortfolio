const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const blogSchema = new Schema({
    slug : {type: String, unique: true, sparse: true},
    title: {type: String, required: true, maxlength: 96},
    publishedAt: {type: Date, required: true, default: Date.now},
    summary: {type: String, required: true},
    headImageUrl: {type: String, required: false},
    highlighted: {type: String, required: true},
    content: {type: String, required: true},
    postType: {type: String, default: 'ed_job', enum: ['ed_job', 'travel', 'friends_family']},
    status: {type: String, default: 'draft', enum: ['draft', 'published', 'deleted']},
    updatedAt: {type: Date}
});

module.exports = mongoose.model('Blog', blogSchema);