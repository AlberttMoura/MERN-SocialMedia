import "./rightsidebar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

function Rightsidebar() {
    return (
        <div className="rightsidebar">
            <div className="rightsidebarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/general/gift.png" alt="" />
                    <span className="birthdayText"><b>Albert Eintein</b> e <b>outros 2 amigos</b> fazem aniversário hoje</span>
                </div>
                <img src="/assets/general/fiatad.jpg" alt="" className="rightsidebarAd" />
                <h4 className="rightsidebarTitle">Online Friends</h4>
                <ul className="rightsidebarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Rightsidebar
