const express = require("express");
const router = express.Router();

const PostController = require("../controller/PostController");


router.post('/', PostController.create);
router.get('/all', PostController.all);
router.put('/update/:id', PostController.update);
router.delete('/delete/:id', PostController.delete);

module.exports = router;