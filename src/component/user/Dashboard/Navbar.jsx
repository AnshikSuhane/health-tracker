import { Link } from "react-router-dom"

const Navbar=()=>{
    return(
        <>
            <Link to="/">Cards</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/renewal">Renewal</Link>
            <Link to="/analytics">Analytics</Link>
            <Link to="/assistance">Assistance</Link>
            <Link to="/history">History</Link>
        </>
    )
}

export default Navbar