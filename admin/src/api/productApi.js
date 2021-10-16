import axiosClient from "./axiosClient";



const productApi = {
    getAllProduct(params){
        const url = '/product';
        return axiosClient.get(url , { params: params } )
    },
    createProduct(data){
        const url = '/product';
        return axiosClient.post(url , data)
    },
    updateProduct(data){
        const url = '/product/update';
        return axiosClient.post(url , data)
    },
    deleteProduct(id){
        const url = `/product/${id}`;
        return axiosClient.delete(url)
    }
    // getmovieNowShowId(id){
    //     const url = '/QuanLyPhim/LayDanhSachPhim?maNhom=GP11';
    //     return axiosClient.get(url)
    // },
    
}

export default productApi