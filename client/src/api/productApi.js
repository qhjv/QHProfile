import axiosClient from "./axiosClient";

const productApi = {
    getAllProduct(params){
        const url = '/product';
        return axiosClient.get(url , { params: params } )
    },
}

export default productApi