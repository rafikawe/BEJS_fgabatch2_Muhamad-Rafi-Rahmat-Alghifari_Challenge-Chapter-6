const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Challenge 6 Binar FGA Batch 2 - Muhamad Rafi Rahmat Alghifari",
            description: `This project is an API with CRUD operations for image uploads using ImageKit. It integrates Multer for filtering and validating uploaded files, ensuring only valid images are stored in the cloud. Deployment is handled using Railway, with automated workflows managed through GitHub Actions.
            This documentation provides a comprehensive guide to using the simple Banking System API, designed to manage user data, accounts, and transfer transactions.
            \nKey Features:
            \nSimple Post Management:            
            \n- Create Post
            \n- Get All Posts
            \n- Get One Post
            \n- Update Post
            \n- Delete Post
              
            \nRepo links:
            \n- [Challenge 6 Repository](https://github.com/rafikawe/BEJS_fgabatch2_Muhamad-Rafi-Rahmat-Alghifari_Challenge-Chapter-6?tab=readme-ov-file)                    
            \nAPI links:
            \n- [Challenge 6 API](https://challenge6-production-a259.up.railway.app)                    
            ` 
        },
        servers: [
			{
				url: "https://challenge6-production-a259.up.railway.app",
			},
		],
        
    },
    
    apis: ["./docs/*.yaml"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs (app) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;