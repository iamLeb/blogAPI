const mongoose = require('mongoose');
const {Schema} = mongoose;

const PostSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;