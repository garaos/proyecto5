const { default: mongoose } = require("mongoose")


const connectDB=()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(por => {
        console.log(`Conectado en MongoDB puerto: ${por.connection.host}`);
    })
}

module.exports = connectDB