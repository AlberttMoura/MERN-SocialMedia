import "./rightsidebar.css"

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
                    <li className="rightsidebarFriend">
                        <div className="rightsidebarProfileImgContainer">
                            <img src="/assets/person/person3.jpg" alt="" className="rightsidebarProfileImg" />
                            <span className="rightsidebarOnline"></span>
                        </div>
                        <span className="rightsidebarUsername">Albert Einstein</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <div className="rightsidebarProfileImgContainer">
                            <img src="/assets/person/person3.jpg" alt="" className="rightsidebarProfileImg" />
                            <span className="rightsidebarOnline"></span>
                        </div>
                        <span className="rightsidebarUsername">Albert Einstein</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <div className="rightsidebarProfileImgContainer">
                            <img src="/assets/person/person3.jpg" alt="" className="rightsidebarProfileImg" />
                            <span className="rightsidebarOnline"></span>
                        </div>
                        <span className="rightsidebarUsername">Albert Einstein</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <div className="rightsidebarProfileImgContainer">
                            <img src="/assets/person/person3.jpg" alt="" className="rightsidebarProfileImg" />
                            <span className="rightsidebarOnline"></span>
                        </div>
                        <span className="rightsidebarUsername">Albert Einstein</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <div className="rightsidebarProfileImgContainer">
                            <img src="/assets/person/person3.jpg" alt="" className="rightsidebarProfileImg" />
                            <span className="rightsidebarOnline"></span>
                        </div>
                        <span className="rightsidebarUsername">Albert Einstein</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <div className="rightsidebarProfileImgContainer">
                            <img src="/assets/person/person3.jpg" alt="" className="rightsidebarProfileImg" />
                            <span className="rightsidebarOnline"></span>
                        </div>
                        <span className="rightsidebarUsername">Albert Einstein</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Rightsidebar
