import { Link } from "react-router-dom"
import "./header.css";
import { CartBlock } from "../CartBlock";

export const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Link className="header__store-title" to="/">Game Srote</Link>
            </div>
            <div className="wrapper header--cart-btn-wrapper">
                <CartBlock />
            </div>
        </div>
    )
}