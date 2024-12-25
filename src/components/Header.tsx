import Heart from "../assets/Heart.svg";
import User from "../assets/User.svg";
import ShoppingCart from "../assets/ShoppingCart.svg";
import Logo from "./Logo.tsx";


export default function Header() {
    return (
        <div className="header-main-contener">
            <div className="header-main blue-purple-gradient">
                <Logo/>
                <div className="header-buttons-contener">
                    <div className="header-button">
                        <img src={ShoppingCart} alt=""/>
                    </div>
                    <div className="header-button">
                        <img src={Heart} alt=""/>
                    </div>
                    <div className="header-button">
                        <img src={User} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}