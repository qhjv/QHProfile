import axiosClient from "./axiosClient";



const imgDemoApi = {
    createImgDemo(data,name){
        const url = '/imgdemo';
        return axiosClient.post(url ,{ data:data,name:name } )
    },
    updateImgDemo(data,name){
        const url = '/imgdemo/update';
        return axiosClient.post(url , { data:data,name:name })
    },
    
}

export default imgDemoApi