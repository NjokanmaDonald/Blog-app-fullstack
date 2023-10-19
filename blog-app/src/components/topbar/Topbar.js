import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Topbar.css'

function Topbar() {
    const {user, dispatch} = useContext(Context);
    const PF = "https://mernblogapi-ym6g.onrender.com/images/"

    const handleLogout = () => {
        dispatch({type:"LOGOUT"})
    }
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                         {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to="/settings">
                        {user.profilePicture ? <img className="topImg" src={PF + user.profilePicture}  alt=""/> : <img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGx9Pqmp7FFfsPY7CC7Ms-SrfNgOUUdHoDiQ6d7wrefQ&s"  alt=""/>}
                        </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar
