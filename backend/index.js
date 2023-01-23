const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/db')

//Ajuste de configuracion
dotenv.config({
    path: 'backend/config/config.env'
})

//Conexion a la DB
connectDB();

//Puerto
app.listen(process.env.PORT,()=>{
    console.log(`Server started on port: ${process.env.PORT}`);
})