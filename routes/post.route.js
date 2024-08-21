const express = require('express');
const router = express.Router();
const storage = require('../libs/multer');
const postController = require('../controllers/post.controller');

const imageCheck = storage.cloud(['image/png', 'image/jpg', 'image/jpeg']).single('image');

router.post('/create', imageCheck, postController.createPost);
router.get('/getAll', postController.getAllPosts);
router.get('/getOne/:id', postController.getOnePost);
router.delete('/delete/:id', postController.deletePost);

module.exports = router;
