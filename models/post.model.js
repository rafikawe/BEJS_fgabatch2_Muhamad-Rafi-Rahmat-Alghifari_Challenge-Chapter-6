const prisma = require('../config/prisma.conf');

async function createPost(title, description, image_url, file_id){
    try{
        const post = await prisma.post.create({
            data: {
                title: title,
                description: description,
                image_url: image_url,
                file_id: file_id
            }
        });
        return post;
    }catch(err){        
        throw err;
    }
}

async function getAllPosts(){
    try{
        const posts = await prisma.post.findMany();
        return posts;
    }catch(err){        
        throw err;
    }
}

async function getOnePost(id){
    try{
        const post = await prisma.post.findUnique({
            where: {
                id: id
            }
        });
        return post;
    }catch(err){        
        throw err;
    }
}

async function deletePost(id){
    try{
        const post = await prisma.post.delete({
            where: {
                id: id
            }
        });
        return post;
    }catch(err){        
        throw err;
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getOnePost,
    deletePost
}