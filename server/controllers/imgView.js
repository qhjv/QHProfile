import { ProductModel } from '../models/ProductModel.js'

export const createImgView = async (req, res)=>{
    try {
        const newProduct = req.body.data;
        const imgView = await ProductModel.findOneAndUpdate(
            { name: req.body.name }, 
            { $push: { imgView: newProduct } },
        )

        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const updateImgView = async (req, res)=>{
    try {
        const updateImgView = req.body.data;
		const newImgView = await ProductModel.findOneAndUpdate(
            { name: req.body.name },
            { $set: { imgView: updateImgView } },
            { new: true }
        );

        res.status(200).json(newImgView);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};