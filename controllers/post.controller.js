const postService = require('../services/post.service');

async function createPost(req, res) {
    const image_file = req.file;
	const {
		title,
		description
	} = req.body;

	try {
		const post = await postService.createPost(title, description, image_file);
		res.status(201).json({
			status: true,
			message: "Post created successfully",
			data: post
		});
	}

	catch (err) {
		console.log(err);
		res.status(500).json({
			status: false,
			message: "Something went wrong in server"
		});
	}	
}

async function getAllPosts(req, res) {	
	try {
		const posts = await postService.getAllPosts();
		res.status(200).json({
			status: true,
			message: "Posts fetched successfully",
			data: posts
		});
	}
	catch (err) {
		console.log(err);
		res.status(500).json({
			status: false,
			message: "Something went wrong in server"
		});
	}
}

async function getOnePost(req, res) {
	const id = req.params.id;

	try {
		const post = await postService.getOnePost(id);
		res.status(200).json({
			status: true,
			message: "Post fetched successfully",
			data: post
		});
	}
	catch (err) {
		console.log(err);
		res.status(500).json({
			status: false,
			message: "Something went wrong in server"
		});
	}
}

async function deletePost(req, res) {
	const id = req.params.id;

	try {
		const post = await postService.deletePost(id);
		res.status(200).json({
			status: true,
			message: "Post deleted successfully",		
			post: post
		});
	}
	catch (err) {
		console.log(err);
		res.status(500).json({
			status: false,
			message: "Something went wrong in server"
		});
	}
}

module.exports = {
    createPost,
	getAllPosts,
	getOnePost,
	deletePost
}