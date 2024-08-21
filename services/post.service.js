const postModel = require('../models/post.model');
const imageKit = require('../libs/imagekit');

async function createPost(title, description, image_file){
    try{
      const response = await imageKit.upload({
        file: image_file.buffer.toString('base64'), // Required
        fileName: image_file.originalname,
        folder: "/binar-assets",
        tags: ["user-post"]
      });
      const image_url = response.url;
      const post = await postModel.createPost(title, description, image_url);
      return post;
    }catch(err){  
      throw err;
    }
}

async function getAllPosts(){
    try{
        const posts = await postModel.getAllPosts();
        return posts;
    }catch(err){        
        throw err;
    }
}

async function getOnePost(id){
    try{
        const post = await postModel.getOnePost(id);
        return post;
    }catch(err){        
        throw err;
    }
}

    

module.exports = {
    createPost,
    getAllPosts,
    getOnePost
}