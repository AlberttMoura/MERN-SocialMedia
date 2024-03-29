import {PermMedia, EmojiEmotions, Label, Room} from "@material-ui/icons"
import "./share.css"

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/person1.jpg" alt="" className="shareProfileImg" />
                    <input placeholder="O que você está pensando hoje?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="Tomato" className="shareIcon"/>
                            <span className="shareOptionText">Fotos ou Vídeos</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tags</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Room htmlColor="red" className="shareIcon"/>
                            <span className="shareOptionText">Localização</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Humor</span>
                        </div>
                    </div>
                    <button className="shareButton">Publicar</button>
                </div>
            </div>
        </div>
    )
}

export default Share
