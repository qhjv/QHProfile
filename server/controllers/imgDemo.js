import { ProductModel } from '../models/ProductModel.js'

export const createImgDemo = async (req, res)=>{
    try {
        const newProduct = req.body.data;
        const imgDeomo = await ProductModel.findOneAndUpdate(
            { name: req.body.name }, 
            { $push: { imgProduct: newProduct } },
        )
        // await product.save();
        

        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
// {
//     var friend = {"firstName": req.body.fName, "lastName": req.body.lName};
//     ProductModel.findOneAndUpdate({name: req.body.name}, {$push: {friends: friend}});
//     };