exports.getProducts = (req, res) =>{
    res.status(200).json({
        success: true,
        message: 'Ruta para mostrar los productos en la la DB'
    })
}