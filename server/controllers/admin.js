import { AdminModel } from '../models/AdminModel.js'

export const getAdmin = async (req, res)=>{
    try {
        const admin = await AdminModel.find();
        console.log(admin);
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({error:error});
    }
};
export const login = async (req, res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).json({
            success:false,
            message:"Missing username or/and password !!!"
        })
    }
    try {
        const user = await AdminModel.findOne({username})
        if(!user) 
        return res.status(400).json({
            success:false,
            message:"Incorrect account or password!!!"
        })

        const pass = await AdminModel.findOne({password})
        if(!pass) 
        return res.status(400).json({
            success:false,
            message:"Incorrect password!!!"
        })

        res.json({
			success: true,
			message: 'Admin logged in successfully',
            isActive:true
		})
    } catch (error) {
        res.status(500).json({error:error});
    }
};