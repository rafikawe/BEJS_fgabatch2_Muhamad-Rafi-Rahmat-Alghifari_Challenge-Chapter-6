const ImageKit = require('imagekit');

const imageKitConfig = newImageKit = new ImageKit({
    publicKey: process.env.PUBLIC_KEY_IMAGEKIT,
    privateKey: process.env.PRIVATE_KEY_IMAGEKIT,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

module.exports = imageKitConfig