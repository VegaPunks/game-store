import "./cartblock.css"
import { BiCartAlt } from "react-icons/bi";

export const CartBlock = () => {
    return (
        <div className="cart-block">
            <BiCartAlt size="2em" className="cart-block__icon "/>
            <span className="cart-block__total-price">2313 рублей</span>
        </div>
    )
}