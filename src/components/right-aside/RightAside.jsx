import "./RightAside.scss";
import { AiOutlineUserAdd } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import { RiAccountCircleFill } from "react-icons/ri"
import { Link } from "react-router-dom";

const RightAside = () => {
  return (
    <div className="right__aside">
        <div className="right__aside-header">
            <h3>Friend Activity</h3>
            <AiOutlineUserAdd/>
            <LiaTimesSolid/>
        </div>
        <p>Let friends and followers on Spotify see what you’re listening to.</p>
        <div className="friend__accounts">
            <div className="user">
                <p></p>
                <RiAccountCircleFill />
                <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="user">
                <p></p>
                <RiAccountCircleFill />
                <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="user">
                <p></p>
                <RiAccountCircleFill />
                <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <p>Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
        <Link className="settings__btn">SETTINGS</Link>
    </div>
  )
}

export default RightAside