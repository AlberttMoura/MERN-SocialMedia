import Topbar from "../../components/topbar/Topbar"
import Leftsidebar from "../../components/leftsidebar/Leftsidebar"
import Rightsidebar from "../../components/rightsidebar/Rightsidebar"
import Feed from "../../components/feed/Feed"
import "./home.css"

function Home() {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Leftsidebar/>
                <Feed/>
                <Rightsidebar/>
            </div>
        </>
    )
}

export default Home
