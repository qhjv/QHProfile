import mongoose from 'mongoose';

export async function connect () {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/qhjv_portpolio', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        });
        console.log("kết nối db thành công")
    } catch (error) {
        console.log("lỗi kết nôi",error)
    }
}
