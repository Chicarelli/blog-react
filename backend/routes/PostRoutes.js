const express = require("express");
const router = express.Router();

const PostController = require("../controller/PostController");


router.post('/', PostController.create);
router.get('/all', PostController.all);

module.exports = router;