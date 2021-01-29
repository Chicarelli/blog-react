const PostModel = require("../model/PostModel");

const current = new Date();

class PostController{

    async create(req, res){
        const post = new PostModel(req.body);
        await post
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async all(req, res){
        await PostModel.find()
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(500).json(error);
        })
    }
}

module.exports = new PostController();