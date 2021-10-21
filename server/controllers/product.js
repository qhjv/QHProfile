import { ProductModel } from '../models/ProductModel.js'

export const getProduct = async (req, res)=>{
    try {
        const product = await ProductModel.find();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const createProduct = async (req, res)=>{
    try {
        const newProduct = req.body;
        const setName = req.body.name;
        const name = await ProductModel.findOne({ setName })
        // ProductModel.counterReset('id', function(err) {
        //     // Now the counter is 0
        // });
		// if (name){
		// 	return res
		// 		.status(400)
		// 		.json({ success: false, message: 'Name already exists' })
        // }
        const product = new ProductModel(newProduct);
        await product.save();

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const updateProduct = async (req, res)=>{
    try {
        const updateProduct = req.body;
		const product = await ProductModel.findOneAndUpdate(
            { _id: updateProduct._id },
            updateProduct,
            { new: true }
        );

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const deleteProduct = async (req, res)=>{
    try {
        const productDelete = { _id: req.params.id}
		const deletedProduct = await ProductModel.findOneAndDelete(productDelete)

		if (!deletedProduct)
			return res.status(401).json({
				success: false,
				message: 'Product not found or user not authorised'
			})

		res.json({ success: true, post: deletedProduct })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};