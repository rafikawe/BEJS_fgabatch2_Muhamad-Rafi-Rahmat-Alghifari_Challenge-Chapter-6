const multer = require('multer');

function cloud(allowedTypes) {
	const storage = multer.memoryStorage();

	const cloudUpload = multer({
		storage: storage,
		limits: {
			fileSize: 2 * 1024 * 1024 // 2 MB
		},
        fileFilter: function (req, file, cb) {
            try {
              if (!allowedTypes.includes(file.mimetype)) {
                throw new Error('File type is not supported')
              }
              cb(null, true)
            } catch (err) {
              cb(err)
            }
          }
	});

	return cloudUpload;
}

module.exports = {
	cloud
};