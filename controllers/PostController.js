const Post = require('../models/Post');

const createPost = async (req, res) => {
    try {
        const { user_id, title, slug, content, image } = req.body;
        const posts = await Post.create({
            user_id, title, slug, content, image
        });
        res.status(200).json({posts})
    
    } catch (e) {
        res.json({error: e});
    }
}

const readPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ posts });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}


const readPost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id);
        if (!post) res.status(404).json({error: 'Post not found'});
        res.json({post});
    } catch (e) {
        res.status(404).json({ error: e});
    }
}

const updatePost = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, slug, content, image } = req.body;
        await Post.findByIdAndUpdate(id, {
            title, slug, content, image
        });

        // get Post again
        const post = await Post.findById(id);
        if (!post) res.status(404).json({error: 'Post not found'});
        res.json({post});
    } catch (e) {
        res.status(400).json({ error: e});
    }
}

const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findByIdAndDelete(id);
        if (!post) res.status(404).json({error: 'Post not found'});
        res.json({post});
    } catch (e) {
        res.status(400).json({ error: e});
    }
}


module.exports = {
    createPost,
    readPosts,
    readPost,
    updatePost,
    deletePost,
}