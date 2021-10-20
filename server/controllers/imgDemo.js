import { ProductModel } from '../models/ProductModel.js'

export const createImgDemo = async (req, res)=>{
    try {
        const newProduct = req.body.data;
        const imgDemo = await ProductModel.findOneAndUpdate(
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
export const updateImgDemo = async (req, res)=>{
    try {
        const updateImgDemo = req.body.data;
		const newImgDemo = await ProductModel.findOneAndUpdate(
            { name: req.body.name },
            { $set: { imgProduct: updateImgDemo } },
            { new: true }
        );

        res.status(200).json(newImgDemo);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};