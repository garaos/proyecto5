const app = require('./app');
const dotenv = require('dotenv');

//Ajuste de configuracion
dotenv.config({
    path: 'backend/config/config.env'
})

//Puerto
app.listen(process.env.PORT,()=>{
    console.log(`Server started on port: ${process.env.PORT}`);
})