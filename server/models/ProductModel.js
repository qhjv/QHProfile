import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';
import dotenv from 'dotenv'

dotenv.config();
const URI = process.env.DATABASE_URL;
const connection = await mongoose.createConnection(URI);

const AutoIncrement = AutoIncrementFactory(connection);

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
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
    imgProduct:[
        {
            src:String,
            name: {
                type: String,
            }
        }
    ],
    imgView:[
        {
            src:String,
            name: {
                type: String,
            }
        }
    ]
},{ timestamps: true })

schema.plugin(AutoIncrement, {inc_field: 'id'});

export const ProductModel = mongoose.model('Product', schema);