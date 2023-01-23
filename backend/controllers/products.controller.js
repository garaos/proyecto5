
const Product = require ('../models/product.model')

// nuevo producto
exports.newProduct = async (req, res)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

// todos los productos
exports.getProducts = async (req, res) =>{
    const product = await Product.find();

    res.status(200).json({
        success: true,
        count: product.length,
        product
    })
}