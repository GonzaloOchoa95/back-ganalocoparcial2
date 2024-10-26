const mongoose = require('mongoose');

const infouserSchema = new mongoose.Schema({
    
   
    nombre: { type: String },
    cedula: { type: String },
    telefono: { type: String },
    ciudad: { type: String },
    fechaNacimiento: { type: String },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const infouser = mongoose.model('infouser', infouserSchema);

module.exports = infouser;
