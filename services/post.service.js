const postModel = require('../models/post.model');
const imageKit = require('../libs/imagekit');

async function createPost(title, description, image_file){
    try{
        const timestamp = Date.now();
        const fileName = `${title}-${timestamp}`

        const response = await imageKit.upload({
            file: image_file.buffer.toString('base64'), // Required
            fileName: fileName,
            folder: "/binar-assets",
            tags: ["user-post"]
        });
        const image_url = response.url;
        const file_id = response.fileId;
        const post = await postModel.createPost(title, description, image_url, file_id);
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

async function deletePost(id){
    try{
        const getPost = await postModel.getOnePost(id);
        const file_id = getPost.file_id;
        //delete image from imagekit based by url
        await imageKit.deleteFile(file_id);
    
        const post = await postModel.deletePost(id);
        return post;
    }catch(err){        
        throw err;
    }
}

async function updatePost(id, title, description){
    try{                
        const post = await postModel.updatePost(id, title, description);
        return post;
    }catch(err){        
        throw err;
    }
}

    

module.exports = {
    createPost,
    getAllPosts,
    getOnePost,
    deletePost,
    updatePost
}