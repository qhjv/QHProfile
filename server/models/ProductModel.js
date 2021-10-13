import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    trailer: {
        type: String,
        required: true,
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
        type: Number,
        // default: 0,
    },
    teamSize: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
},{ timestamps: true })

export const ProductModel = mongoose.model('Product', schema);