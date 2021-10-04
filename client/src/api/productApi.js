//Image
import imgLogin from '../asset/image/products/booking-movie/qhmovie-logout.png'
import registerImg from '../asset/image/products/booking-movie/register.png'
import img1 from '../asset/image/products/booking-movie/qhmovie.png'
import img2 from '../asset/image/products/booking-movie/infomovie.png'
import img3 from '../asset/image/products/booking-movie/bookroom.png'
import img4 from '../asset/image/products/booking-movie/historyTicket.png'



export const products = [
    {   
        name:"QH movie",
        trailer:"",
        decription:"QH Movie is a website to book movie tickets according to the list of cinemas, theater addresses and specific times. You can view movie information , seats , prices and payment options on the page . With a beautiful, easy and simple interface, you will have a pleasant experience",
        reponsibility:"Front-end Developer , Designer",
        technologies:"Reactjs, redux , axios, jquery, bootstrap, css ...",
        year:"2020",
        teamSize:"1 member",
        img:`${imgLogin}`,
        link:"http://hfgedigjhfdkjgh.vn/",
        imgView: [
            {
                id:1,
                src:`${img1}`,
                name:"top page"
            },
            {
                id:2,
                src:`${img2}`,
                name:"Movie information"
            },
            {
                id:3,
                src:`${img3}`,
                name:"seat reservation room"
            },
            {
                id:4,
                src:`${img4}`,
                name:"booking history"
            },
        ],
        imgProduct : [
    
            {
                id:1,
                src:`${registerImg}`,
                name:"Signin"
            },
            {
                id:2,
                src:`${registerImg}`,
                name:"register"
            },
            {
                id:3,
                src:`${registerImg}`,
                name:"movie"
            },
        ]
    },
    {   
        name:"skill park",
        trailer:"",
        decription:"skill park lalalalalallllllllllllllllllllllllllllllllllllllllllll",
        reponsibility:"Designer",
        technologies:"Reactjs ...",
        year:"2021",
        teamSize:"4 member",
        img:`${imgLogin}`,
        link:"http://hfgedigjhfdkjgh.vn/",
        imgView: [
            {
                id:1,
                src:`${img3}`,
                name:"1"
            },
            {
                id:2,
                src:`${img4}`,
                name:"2"
            },
            {
                id:3,
                src:`${img1}`,
                name:"3"
            },
            {
                id:4,
                src:`${img2}`,
                name:"4"
            },
        ],
        imgProduct : [
    
            {
                id:1,
                src:`${img3}`,
                name:"Signin"
            },
            {
                id:2,
                src:`${img3}`,
                name:"register"
            },
            {
                id:3,
                src:`${img3}`,
                name:"movie"
            },
        ]
    },
]
