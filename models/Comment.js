const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    }
}, {timestamps: true});