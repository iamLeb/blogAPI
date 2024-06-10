const router = require('express').Router();
const PostController = require('../controllers/PostController.js');
const CategoryController = require('../controllers/CategoryController.js');
const AuthController = require('../controllers/AuthController.js');


// Auth
router.post('/api/auth/login', AuthController.login);
router.post('/api/auth/register', AuthController.register);
router.get('/api/auth/logout', AuthController.logout);

// Posts
router.post('/api/posts/create', PostController.createPost);
router.get('/api/posts', PostController.readPosts);
router.get('/api/post/:id', PostController.readPost);
router.put('/api/posts/update/:id', PostController.updatePost);
router.delete('/api/posts/delete/:id', PostController.deletePost);

// Categories
router.post('/api/category/create', CategoryController.createCategory);
router.get('/api/categories', CategoryController.readCategories);
router.get('/api/category/:id', CategoryController.readCategory);
router.put('/api/category/update/:id', CategoryController.updateCategory);
router.delete('/api/category/delete/:id', CategoryController.deleteCategory);

module.exports = router;