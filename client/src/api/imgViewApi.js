import axiosClient from "./axiosClient";



const imgViewApi = {
    createImgView(data,name){
        const url = '/imgview';
        return axiosClient.post(url ,{ data:data,name:name } )
    },
    updateImgView(data,name){
        const url = '/imgview/update';
        return axiosClient.post(url , { data:data,name:name })
    },
    
}

export default imgViewApi