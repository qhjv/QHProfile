//Image qh movie
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


export const products = [
    {   
        id:1,
        name:"skill park",
        trailer:"https://www.youtube.com/embed/_8ldAdQd9WU",
        decription:"Skill park was released by Wakasa company on September 1, 2021, it is a website to search for freelance jobs according to your experience, you can add your experience and skills to your profile to find a job. suitable . You can also see the experience of the seniors, the attractive reward system, or you can post a job search, ...",
        reponsibility:"Front-end Developer Leader",
        technologies:"Vuejs, php, laravel, blade, mysql, scss, jquery, bootstrap",
        year:"2021",
        teamSize:"4 member",
        img:`${imgSkillPark}`,
        link:"http://hfgedigjhfdkjgh.vn/",
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
        trailer:"https://www.youtube.com/embed/_8ldAdQd9WU",
        decription:"QH Movie is a website to book movie tickets according to the list of cinemas, theater addresses and specific times. You can view movie information , seats , prices and payment options on the page . With a beautiful, easy and simple interface, you will have a pleasant experience",
        reponsibility:"Developer , UI Designer",
        technologies:"Reactjs, redux, axios, jquery, bootstrap, css ...",
        year:"2020",
        teamSize:"1 member",
        img:`${imgQHMovie}`,
        link:"http://hfgedigjhfdkjgh.vn/",
        imgProduct : [
            {
                id:1,
                src:`${imgQHMovieDesign}`,
                name:"Design"
            },
            {
                id:2,
                src:`${imgQHMovieSignin1}`,
                name:"Signin"
            },
            {
                id:3,
                src:`${imgQHMovieSignin2}`,
                name:"Signin"
            },
            {
                id:4,
                src:`${imgQHMovieRegister}`,
                name:"register"
            },
            {
                id:5,
                src:`${imgQHMovieList}`,
                name:"movie"
            },
        ],
        imgView: [
            {
                id:1,
                src:`${imgQHMovieTopPage}`,
                name:"top page"
            },
            {
                id:2,
                src:`${imgQHMovieChooseTheater}`,
                name:"choose theater"
            },
            {
                id:3,
                src:`${imgQHMovieInfo}`,
                name:"Movie information"
            },
            {
                id:4,
                src:`${imgQHMovieRoom}`,
                name:"seat reservation room"
            },
            {
                id:5,
                src:`${imgQHMovieHistory}`,
                name:"booking history"
            },
        ],
    },
    {   
        id:3,
        name:"Admin candidates",
        trailer:"https://www.youtube.com/embed/_8ldAdQd9WU",
        decription:"Admin candidates is a website that manages candidates applying for different job positions. This website helps recruiters easily manage candidates, easily search by name, job position, add new, edit and delete candidates, filter candidates by favorite, by date submit applications , ... recruiters can also track the aggregated list of the number of candidates compared to the number of each position being recruited . We will develop more features of messaging with candidates , contacting or adding more details about candidates , cv , salary offer in the future",
        reponsibility:"Developer",
        technologies:"Reactjs, redux, firebase, material, jquery, bootstrap, css ...",
        year:"2020",
        teamSize:"1 member",
        img:`${imgAdminCandidates}`,
        link:"http://hfgedigjhfdkjgh.vn/",
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
]
