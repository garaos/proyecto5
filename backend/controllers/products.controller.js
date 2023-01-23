
const Product = require ('../models/product.model')

// nuevo producto
exports.newProduct = async (req, res)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

exports.getProducts = (req, res) =>{
    res.status(200).json({
        success: true,
        message: 'Ruta para mostrar los productos en la la DB'
    })
}