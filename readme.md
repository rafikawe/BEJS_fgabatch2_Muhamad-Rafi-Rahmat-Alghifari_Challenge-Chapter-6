# Challenge 6 Binar FGA Batch 2 - Muhamad Rafi Rahmat Alghifari

This project is an API with CRUD operations for image uploads using ImageKit. It integrates Multer for filtering and validating uploaded files, ensuring only valid images are stored in the cloud. Deployment is handled using Railway, with automated workflows managed through GitHub Actions.

## Link to the API :
[https://challenge6-production-a259.up.railway.app](https://challenge6-production-a259.up.railway.app)

## API Endpoints :

| Endpoint | Method | Description |
| -------- | ------ | ----------- |
| GET /api/v1/post/getAll | GET | Get all posts |
| GET /api/v1/post/getOne/:id | GET | Get one post |
| POST /api/v1/post/create | POST | Create post |
| DELETE /api/v1/post/delete/:id | DELETE | Delete post |
| PUT /api/v1/post/update/:id | PUT | Update post |

## Getting started

### Setting up a project

* Move into your projects directory
* Clone this repository: `https://github.com/rafialg11/BEJS_fgabatch2_Muhamad-Rafi-Rahmat-Alghifari_Challenge-Chapter-4.git`
* Move into the project directory: `cd BEJS_fgabatch2_Muhamad-Rafi-Rahmat-Alghifari_Challenge-Chapter-4`
* Install the dependencies: `npm install`

* Run the development task: `npm run start:dev`
    * Starts a server running at http://localhost:3000
    * Automatically restarts when any of your files change

## Configuration

### Environment variables
```bash
DATABASE_URL="postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE?schema=public"
PUBLIC_KEY_IMAGEKIT={YOUR_IMAGEKIT_PUBLIC_KEY}
IMAGEKIT_URL_ENDPOINT={YOUR_IMAGEKIT_URL_ENDPOINT}
PRIVATE_KEY_IMAGEKIT={YOUR_IMAGEKIT_PRIVATE_KEY}
```

### Database connection
Run the following command to migrate the database models:
```bash
npx prisma migrate dev --name init
```	

## API Documentation

This repository contains the API documentation in Insomnia yaml format.

### How to see the documentation in Insomnia

1. Download the `docs/api-doc-insomnia`.
2. Open Insomnia.
3. Go to `Application` > `Preferences` > `Data` tab.
4. Click on `Import Data` > `From File`.
5. Select the downloaded JSON file.