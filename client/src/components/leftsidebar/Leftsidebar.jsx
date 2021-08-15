import "./leftsidebar.css"
import {RssFeed, Chat, PlayCircleFilled, Group, Work, Event, School} from "@material-ui/icons"
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"

function Leftsidebar() {
    return (
        <div className="leftsidebar">
            <div className="leftsidebarWrapper">
                <ul className="leftsidebarList">
                    <li className="leftsidebarListItem">
                        <RssFeed className="leftsidebarIcon"/>
                        <span className="leftsidebarListItemText">Feed</span>
                    </li>
                    <li className="leftsidebarListItem">
                        <Chat className="leftsidebarIcon"/>
                        <span className="leftsidebarListItemText">Conversas</span>
                    </li>
                    <li className="leftsidebarListItem">
                        <PlayCircleFilled className="leftsidebarIcon"/>
                        <span className="leftsidebarListItemText">Videos</span>
                    </li>
                    <li className="leftsidebarListItem">
                        <Group className="leftsidebarIcon"/>
                        <span className="leftsidebarListItemText">Grupos</span>
                    </li>
                    <li className="leftsidebarListItem">
                        <Work className="leftsidebarIcon"/>
                        <span className="leftsidebarListItemText">Vagas</span>
                    </li>
                    <li className="leftsidebarListItem">
                        <Event className="leftsidebarIcon"/>
                        <span className="leftsidebarListItemText">Eventos</span>
                    </li>
                    <li className="leftsidebarListItem">
                        <School className="leftsidebarIcon"/>
                        <span className="leftsidebarListItemText">Cursos</span>
                    </li>
                </ul>
                <button className="leftsidebarButton">Mostrar Mais</button>
                <hr className="leftsidebarHr"/>
                <ul className="leftsidebarFriendList">
                    {Users.map(u=>(
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Leftsidebar
