const Products = require('../models/products');

class ProductController {
    async create(req, res) {
        try {
            const { body } = req;
            const data = await ProductModel.findAll({});
            body.id = data.length + 1;
            body.isPublished = false;
            const response = await ProductModel.create(body);
            res.status(201).json(response);
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

module.exports = new ProductController();