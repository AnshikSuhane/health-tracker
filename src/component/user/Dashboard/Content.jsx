import Cards from "./Cards"
import Profile from "../Profile/Profile"
import Schedule from "../Schedule/Schedule"
import Renewal from "../Renewal/Renewal"
import Analytics from "../Analytics/Analytics"
import Assistance from "../Assistance/Assistance"
import History from "../History/History"
import { Routes,Route } from "react-router-dom"
const Content=()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Cards/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/schedule" element={<Schedule/>}/>
                <Route path="/renewal" element={<Renewal/>}/>
                <Route path="/analytics" element={<Analytics/>}/>
                <Route path="/assistance" element={<Assistance/>}/>
                <Route path="/history" element={<History/>}/>
            </Routes>
        </>
    )
}

export default Content