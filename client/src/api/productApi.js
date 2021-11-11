import axiosClient from "./axiosClient";
import imgQHMovie from '../asset/image/products/booking-movie/background.jpg'
import imgQHMovieDesign from '../asset/image/products/booking-movie/design.png'
import imgQHMovieSignin1 from '../asset/image/products/booking-movie/qhmovie-signin1.png'
import imgQHMovieSignin2 from '../asset/image/products/booking-movie/qhmovie-signin2.png'
import imgQHMovieRegister from '../asset/image/products/booking-movie/register.png'
import imgQHMovieList from '../asset/image/products/booking-movie/qhmovie-listmovie.png'
import imgQHMovieTopPage from '../asset/image/products/booking-movie/qhmovie.png'
import imgQHMovieChooseTheater from '../asset/image/products/booking-movie/chooseTheater.png'
import imgQHMovieInfo from '../asset/image/products/booking-movie/infomovie.png'
import imgQHMovieRoom from '../asset/image/products/booking-movie/bookroom.png'
import imgQHMovieHistory from '../asset/image/products/booking-movie/historyTicket.png'

//Image skill park
import imgSkillPark from '../asset/image/products/skill-park/background.jpeg'
import imgSkillParkDesign from '../asset/image/products/skill-park/design.png'
import imgSkillParkSignIn from '../asset/image/products/skill-park/login.png'
import imgSkillParkPopUp from '../asset/image/products/skill-park/popup.png'
import imgSkillParkTopPage from '../asset/image/products/skill-park/toppage.png'
import imgSkillParkTutorial from '../asset/image/products/skill-park/tutorial.png'
import imgSkillParkFreelancePage from '../asset/image/products/skill-park/freelancePage.png'
import imgSkillParkJobBoard from '../asset/image/products/skill-park/jobBoard.png'
import imgSkillParkEntryforminput from '../asset/image/products/skill-park/entryforminput.png'

//Image admin candidates

import imgAdminCandidates from '../asset/image/products/admin-candidates/background.jpg'
import imgAdminCandidatesAddPeople from '../asset/image/products/admin-candidates/addPeople.png'
import imgAdminCandidatesChangePeople from '../asset/image/products/admin-candidates/changePeople.png'
import imgAdminCandidatesDate from '../asset/image/products/admin-candidates/date.png'
import imgAdminCandidatesSignIn from '../asset/image/products/admin-candidates/signin.png'
import imgAdminCandidatesDashBoard from '../asset/image/products/admin-candidates/dashboard.png'
import imgAdminCandidatesPage from '../asset/image/products/admin-candidates/peoplePage.png'
import imgAdminCandidatesViewPeople from '../asset/image/products/admin-candidates/viewPeople.png'

//Image nhago cafe

import imgNhaGoCafe from '../asset/image/products/nhago-Cafe/background.jpg'
import imgNhaGoCafeLoading from '../asset/image/products/nhago-Cafe/loading.gif'
import imgNhaGoCafeDesign from '../asset/image/products/nhago-Cafe/design.png'
import imgNhaGoCafeMenu from '../asset/image/products/nhago-Cafe/menu.png'
import imgNhaGoCafePage from '../asset/image/products/nhago-Cafe/page.png'

//Image Employee Management

import imgEmployee from '../asset/image/products/employee-management/background.jpg'
import imgEmployeesigninEmploye from '../asset/image/products/employee-management/signinEmploye.png'
import imgEmployeesigninManage from '../asset/image/products/employee-management/signinManage.png'
import imgEmployeeHome from '../asset/image/products/employee-management/home.png'
import imgEmployeeviewEmployee from '../asset/image/products/employee-management/viewEmployee.png'
import imgEmployeetopEmployee from '../asset/image/products/employee-management/topEmployee.png'
import imgEmployeeaddEmployee from '../asset/image/products/employee-management/addEmployee.png'
import imgEmployeeaddProduct from '../asset/image/products/employee-management/addProduct.png'
import imgEmployeeviewProduct from '../asset/image/products/employee-management/viewProduct.png'
import imgEmployeeWage from '../asset/image/products/employee-management/wage.png'
import imgEmployeeLeave from '../asset/image/products/employee-management/leave.png'
import imgEmployeeviewProfile from '../asset/image/products/employee-management/viewProfile.png'
import imgEmployeeEmployeePage from '../asset/image/products/employee-management/employeePage.png'
import imgEmployeeempViewProduct from '../asset/image/products/employee-management/empViewProduct.png'
import imgEmployeeempAddLeave from '../asset/image/products/employee-management/empAddLeave.png'

//Image Ipod Demo

import imgIpod from '../asset/image/products/ipod-demo/background.jpg'
import imgIpodMusic from '../asset/image/products/ipod-demo/music.png'
import imgIpodPage from '../asset/image/products/ipod-demo/page.png'

//Image profile

import imgProfile from '../asset/image/products/profile-first/background.jpg'
import imgProfileDesign from '../asset/image/products/profile-first/design.png'
import imgProfileExperience from '../asset/image/products/profile-first/experience.png'
import imgProfilePage from '../asset/image/products/profile-first/page.png'

export const products = [
    {   
        id:1,
        name:"skill park",
        trailer:"https://www.youtube.com/embed/123",
        decription:"Skill park was released by Wakasa company on September 1, 2021, it is a website to search for freelance jobs according to your experience, you can add your experience and skills to your profile to find a job. suitable . You can also see the experience of the seniors, the attractive reward system, or you can post a job search, ...",
        reponsibility:"Front-end Developer Leader",
        technologies:"Vuejs, php, laravel, blade, mysql, scss, jquery, bootstrap",
        year:"2021",
        teamSize:"4 member",
        img:`${imgSkillPark}`,
        link:"https://skillpark.wakasa.jp/",
        imgProduct : [

            {
                id:1,
                src:`${imgSkillParkDesign}`,
                name:"design"
            },
            {
                id:2,
                src:`${imgSkillParkSignIn}`,
                name:"Signin"
            },
            {
                id:3,
                src:`${imgSkillParkPopUp}`,
                name:"popup"
            },
        ],
        imgView: [
            {
                id:1,
                src:`${imgSkillParkTopPage}`,
                name:"top page"
            },
            {
                id:2,
                src:`${imgSkillParkTutorial}`,
                name:"Tutorial Page"
            },
            {
                id:3,
                src:`${imgSkillParkFreelancePage}`,
                name:"Freelance Page"
            },
            {
                id:4,
                src:`${imgSkillParkJobBoard}`,
                name:"Job Board"
            },
            {
                id:5,
                src:`${imgSkillParkEntryforminput}`,
                name:"Entry form input"
            },
        ],
    },
    {   
        id:2,
        name:"QH movie",
        trailer:"https://www.youtube.com/embed/sr0aDh-ssWo",
        decription:"QH Movie is a website to book movie tickets according to the list of cinemas, theater addresses and specific times. You can view movie information , seats , prices and payment options on the page . With a beautiful, easy and simple interface, you will have a pleasant experience",
        reponsibility:"Developer , UI Designer",
        technologies:"Reactjs, redux, axios, jquery, bootstrap, css ...",
        year:"2020",
        teamSize:"1 member",
        img:`${imgQHMovie}`,
        link:"http://hfgedigjhfdkjgh.vn/",
        imgProduct : [
            {
                src:`${imgQHMovieDesign}`,
                name:"Design"
            },
            {
                src:`${imgQHMovieSignin1}`,
                name:"Signin"
            },
            {
                src:`${imgQHMovieSignin2}`,
                name:"Signin"
            },
            {
                src:`${imgQHMovieRegister}`,
                name:"register"
            },
            {
                src:`${imgQHMovieList}`,
                name:"movie"
            },
        ],
        imgView: [
            {
                src:`${imgQHMovieTopPage}`,
                name:"top page"
            },
            {
                src:`${imgQHMovieChooseTheater}`,
                name:"choose theater"
            },
            {
                src:`${imgQHMovieInfo}`,
                name:"Movie information"
            },
            {
                src:`${imgQHMovieRoom}`,
                name:"seat reservation room"
            },
            {
                src:`${imgQHMovieHistory}`,
                name:"booking history"
            },
        ],
    },
    {   
        id:3,
        name:"Admin candidates",
        trailer:"https://www.youtube.com/embed/02yj1QnhTgI",
        decription:"Admin candidates is a website that manages candidates applying for different job positions. This website helps recruiters easily manage candidates, easily search by name, job position, add new, edit and delete candidates, filter candidates by favorite, by date submit applications , ... recruiters can also track the aggregated list of the number of candidates compared to the number of each position being recruited . We will develop more features of messaging with candidates , contacting or adding more details about candidates , cv , salary offer in the future",
        reponsibility:"Developer",
        technologies:"Reactjs, redux, firebase, material, jquery, bootstrap, css ...",
        year:"2020",
        teamSize:"1 member",
        img:`${imgAdminCandidates}`,
        link:"https://admin-reactjs.vercel.app/",
        imgProduct : [
            {
                id:1,
                src:`${imgAdminCandidatesAddPeople}`,
                name:"Add"
            },
            {
                id:2,
                src:`${imgAdminCandidatesChangePeople}`,
                name:"Update"
            },
            {
                id:3,
                src:`${imgAdminCandidatesDate}`,
                name:"Date"
            },
        ],
        imgView: [
            {
                id:1,
                src:`${imgAdminCandidatesSignIn}`,
                name:"SignIn"
            },
            {
                id:2,
                src:`${imgAdminCandidatesDashBoard}`,
                name:"Dash Board"
            },
            {
                id:3,
                src:`${imgAdminCandidatesPage}`,
                name:"Candidates"
            },
            {
                id:4,
                src:`${imgAdminCandidatesViewPeople}`,
                name:"recruitment statistics"
            },
        ],
    },
    {   
        id:4,
        name:"Nha go coffee",
        trailer:"https://www.youtube.com/embed/YKa3F5WRr7M",
        decription:"The landing page introduces a cafe with a nice view, quiet, suitable for you to work, relax after a hard day, you can follow the menu of drinks and ready-to-eat food, make reservations according to the number of people, time , ...",
        reponsibility:"Developer, Designer",
        technologies:"Nodejs, javascript, gsap, jquery, bootstrap, css ...",
        year:"2020",
        teamSize:"1 member",
        img:`${imgNhaGoCafe}`,
        link:"https://qhjv.github.io/cafeOnepage/",
        imgProduct : [
            {
                id:1,
                src:`${imgNhaGoCafeLoading}`,
                name:"Loading"
            },
            {
                id:2,
                src:`${imgNhaGoCafeDesign}`,
                name:"Design"
            },
            {
                id:3,
                src:`${imgNhaGoCafeMenu}`,
                name:"Menu"
            },
        ],
        imgView: [
            {
                id:1,
                src:`${imgNhaGoCafePage}`,
                name:"Nha go coffee"
            },
        ],
    },
    {   
        id:5,
        name:"Employee Management",
        trailer:"https://www.youtube.com/embed/nQ7I1SpXu9s",
        decription:"Website for employees and managers. Managers can add, edit and delete employees, create projects for employees and track projects, track salaries and increase salaries for employees, accept leave applications. Employees can view profile , track their rankings , projects , and leave applications",
        reponsibility:"Developer , Designer",
        technologies:"PHP, mysql, lavarel, javascript, css ...",
        year:"2020",
        teamSize:"1 member",
        img:`${imgEmployee}`,
        link:"http://hfgedigjhfdkjgh.vn/",
        imgProduct : [
            {
                id:1,
                src:`${imgEmployeeHome}`,
                name:"Home"
            },
            {
                id:2,
                src:`${imgEmployeesigninEmploye}`,
                name:"Signin"
            },
            {
                id:3,
                src:`${imgEmployeesigninManage}`,
                name:"Signin"
            },
        ],
        imgView: [
            {
                id:1,
                src:`${imgEmployeetopEmployee}`,
                name:"Management Home"
            },
            {
                id:2,
                src:`${imgEmployeeaddEmployee}`,
                name:"Add Employee"
            },
            {
                id:3,
                src:`${imgEmployeeviewEmployee}`,
                name:"View Employee"
            },
            {
                id:4,
                src:`${imgEmployeeaddProduct}`,
                name:"add product"
            },
            {
                id:5,
                src:`${imgEmployeeviewProduct}`,
                name:"Follow product"
            },
            {
                id:6,
                src:`${imgEmployeeWage}`,
                name:"wage employee"
            },
            {
                id:7,
                src:`${imgEmployeeLeave}`,
                name:"leave applications"
            },
            {
                id:8,
                src:`${imgEmployeeEmployeePage}`,
                name:"Employee Home"
            },
            {
                id:9,
                src:`${imgEmployeeviewProfile}`,
                name:"profile"
            },
            {
                id:10,
                src:`${imgEmployeeempViewProduct}`,
                name:"View product"
            },
            {
                id:11,
                src:`${imgEmployeeempAddLeave}`,
                name:"add and follow leave applications"
            },
        ],
    },
    {   
        id:6,
        name:"Ipod demo",
        trailer:"https://www.youtube.com/embed/UcUB2v05jPU",
        decription:"This is my first website for practicing theory lessons. and i chose to make a music player , designed to look like the ipod classic . It helps me improve my javascript skills and it's also fun, quite interesting, isn't it?",
        reponsibility:"Developer",
        technologies:"Javascript, css ",
        year:"2020",
        teamSize:"1 member",
        img:`${imgIpod}`,
        link:"https://qhjv.github.io/ipodDemo/",
        imgProduct : [
            {
                id:1,
                src:`${imgIpodMusic}`,
                name:"Music"
            },
            {
                id:1,
                src:`${imgIpodPage}`,
                name:"Design"
            },
        ],
        imgView: [
            {
                id:1,
                src:`${imgIpodPage}`,
                name:"Ipod demo"
            },
        ],
    },
    {   
        id:7,
        name:"My profile",
        trailer:"https://www.youtube.com/embed/QBiF7fHvSR8",
        decription:"This is my first website , it introduces me , information , education and experience so that i can apply for an internship . Pretty simple isn't it, that's my first step towards becoming a web developer",
        reponsibility:"Developer , Designer",
        technologies:"Javascript, css ",
        year:"2020",
        teamSize:"1 member",
        img:`${imgProfile}`,
        link:"https://qhjv.github.io/quanghuy/",
        imgProduct : [
            {
                id:1,
                src:`${imgProfileDesign}`,
                name:"Design"
            },
            {
                id:2,
                src:`${imgProfileExperience}`,
                name:"experience"
            },
        ],
        imgView: [
            {
                id:1,
                src:`${imgProfilePage}`,
                name:"My profile"
            },
        ],
    },
]
// const productApi = {
//     getAllProduct(params){
//         const url = '/product';
//         return axiosClient.get(url , { params: params } )
//     },
// }

// export default productApi