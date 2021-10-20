import axiosClient from "./axiosClient";



const imgDemoApi = {
    createImgDemo(data,name){
        const url = '/imgdemo';
        return axiosClient.post(url ,{ data:data,name:name } )
    },
    // updateProduct(data){
    //     const url = '/product/update';
    //     return axiosClient.post(url , data)
    // },
    
}

export default imgDemoApi