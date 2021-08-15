import "./closeFriend.css"

function CloseFriend({user}) {
    return (
        <div>
            <li className="leftsidebarFriend">
                <img src={user.profilePicture} alt="" className="leftsidebarFriendImg" />
                <span className="leftsidebarFriendName">{user.username}</span>
            </li>
        </div>
    )
}

export default CloseFriend
