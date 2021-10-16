import axiosClient from "./axiosClient";



const productApi = {
    getAllProduct(params){
        const url = '/product';
        return axiosClient.get(url , { params: params } )
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