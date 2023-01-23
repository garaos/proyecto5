const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Ingrese un producto'],
        trim: true,
        maxLength: [100, 'El nombre no debe exceder los 100 caracteres']
    },
    price: {
        type: String,
        required: [true, 'Ingrese un precio'],
        maxLength: [10, 'No debe exceder los 10 caracteres'],
        default: 0
    },
    description: {
        type: String,
        required: [true, 'Ingrese una descripción'],
    },
    imagenes: [
        {
            img_id: {
                type: String,
                required: true
            },
            img_url: {
                type: String,
                required: true
            }
        }
    ],
    category:{
        type: String,
        required: [true, 'Debe ingresar una categoria'],
        enum: {
            values: [
                'Bicicletas',
                'Cascos',
                'Accesorios',
                'Ropa'
            ],
            message: 'Seleccione una categoria'
        }
    },
    brand: {
        type: String,
        required: [true, 'Debe ingresar la marca']
    },
    stock: {
        type: Number,
        required: [true, 'Favor ingresa la cantidad disponible'],
        maxLength: [3, 'La cantidad no puede ser mayor a 999'],
        default: 0
    }
})

module.exports = mongoose.model('Product', productSchema);