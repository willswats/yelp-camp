const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds')
const catchAsync = require('../utils/catchAsync')
const { isLoggedIn, isAuthor, validateCampground, getImages } = require('../middleware')
const multer = require('multer')
const { storage } = require('../cloudinary')
const upload = multer({
    storage,
    limits: {
        fileSize: 5000000
    }
})


router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.create))

router.get('/new', isLoggedIn, campgrounds.new)

router.route('/:id')
    .get(catchAsync(campgrounds.show))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgrounds.update))
    .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.destroy))

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.edit))

module.exports = router;