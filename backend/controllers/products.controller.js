
const Product = require ('../models/product.model')

// nuevo producto ->http://localhost:4000/api/v1/products/new
exports.newProduct = async (req, res)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

// todos los productos -> http://localhost:4000/api/v1/products
exports.getProducts = async (req, res) =>{
    const product = await Product.find();

    res.status(200).json({
        success: true,
        count: product.length,
        product
    })
}

// producto por ID -> http://localhost:4000/api/v1/products/:id
exports.getProduct = async (req, res) =>{
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Not found'
        })
    }
    res.status(200).json({
        success: true,
        product
    })
}