import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    trailer: {
        type: String,
    },
    decription: {
        type: String,
        required: true,
    },
    reponsibility: {
        type: String,
        required: true,
    },
    technologies: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    teamSize: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    },
    img:String,
},{ timestamps: true })

export const ProductModel = mongoose.model('Product', schema);