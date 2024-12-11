const errorHandler = require('../utils/errorHandler');
const Product = require('../models/productModel');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        errorHandler(res, error);
    }
};

// Create a product
const createAProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body); 
        res.status(201).json(product);
    } catch (error) {
        errorHandler(res, error);
    }
};

// Get product by ID
const getAProductByID = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id); 
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: "Product Not Found" });
        }
    } catch (error) {
        errorHandler(res, error);
    }
};

// Update a product
const updateAProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            await product.update(req.body); 
            res.status(200).json({ message: "Product updated successfully", product });
        } else {
            res.status(404).json({ message: "Product Not Found" });
        }
    } catch (error) {
        errorHandler(res, error);
    }
};

// Delete a product
const deleteAProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            await product.destroy(); 
            res.status(200).json({ message: "Product deleted successfully" });
        } else {
            res.status(404).json({ message: "Product Not Found" });
        }
    } catch (error) {
        errorHandler(res, error);
    }
};

module.exports = {
    getAllProducts,
    createAProduct,
    getAProductByID,
    updateAProduct,
    deleteAProduct,
};
