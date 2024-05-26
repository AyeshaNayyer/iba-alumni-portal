import "./App.css";
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom";
import Home from "./pages/Home";
import Createfyp from "./pages/Createfyp";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Splash from "./pages/Splash";
import AlumniLogin from "./pages/Alumnilogin";
import AlumniRegistration from "./pages/AlumniRegistration"; 
import AlumniSearch from "./pages/alumnisearch";
import FYP from "./pages/fyp";
import AlumniProfile from "./pages/Alumniprofile";
import Fundraising from "./pages/fundraising";
import CreateFundraiser from "./pages/CreateFundraiser";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";
function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path='/home' element ={<Home/>}/>
         <Route path="/" element={<Splash />} />
         <Route path='/createfyp' element ={<Createfyp/>}/>
         <Route path='/registration' element ={<Registration/>}/>
         <Route path='/login' element ={<Login/>}/>
         <Route path='/alumniregistration' element ={<AlumniRegistration/>}/>
         <Route path='/alumnilogin' element ={<AlumniLogin/>}/>
         <Route path="/alumnisearch" element={<AlumniSearch/>} />
         <Route path="/fyp" element={<FYP/>} />
         <Route path="/alumni_profile/:alumniERP" element={<AlumniProfile/>} />
         <Route path="/fundraising" element={<Fundraising/>} />
         <Route path='/createfundraising' element ={<CreateFundraiser/>}/>
         <Route path='/events' element ={<Events/>}/>
         <Route path='/createevent' element ={<CreateEvent/>}/>

       </Routes>
     </Router>
    </div>
  );
}

export default App;
