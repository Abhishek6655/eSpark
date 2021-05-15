import React,{ Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from "../auth";
import {itemTotal} from './cartHelpers'
import "../styles.css";

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {color: ' 	#FFFF00'}
    }
    else {
        return {color: '#ffffff'}
    }
}

const Menu = ({history}) => (
    <div >
        <ul className="nav nav-tabs ">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/') } to='/'><h2><b>E-SPARK</b></h2></Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link " style={isActive(history, '/shop')} to='/shop'><h7><b>SHOP</b></h7></Link>
            </li>
             <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    <h7><b>CART{" "}</b></h7>
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        <h7><b>DASHBOARD</b></h7>
                    </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                    >
                         <h7><b>DASHBOARD</b></h7>
                    </Link>
                </li>
            )}
            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                             <h7><b>SIGNIN</b></h7>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                             <h7><b>SIGNUP</b></h7>
                        </Link>
                    </li>
                </Fragment>
            )}


            {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                         <h7><b>SIGNOUT</b></h7>
                    </span>
                </li>
            )}
 
        </ul>
    </div>
);

export default withRouter(Menu);