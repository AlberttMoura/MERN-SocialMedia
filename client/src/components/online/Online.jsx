import "./online.css"

function Online({user}) {
    return (
        <div>
            <li className="rightsidebarFriend">
                <div className="rightsidebarProfileImgContainer">
                    <img src={user.profilePicture} alt="" className="rightsidebarProfileImg" />
                    <span className="rightsidebarOnline"></span>
                </div>
                <span className="rightsidebarUsername">{user.username}</span>
            </li>
        </div>
    )
}

export default Online
