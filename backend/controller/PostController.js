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
        .sort('-when')
        .then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async update(req, res){
        await PostModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async delete(req, res){
        await PostModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async findOne(req, res){
        await PostModel.findById(req.params.id)
        .then(response => {
            if(response)
            return res.status(200).json(response);
            else (!response)
            return res.status(404).json({error: "Tarefa não encontrada!"});
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new PostController();