import ShoppingCart from "../assets/ShoppingCart.svg";
import Heart from "../assets/Heart.svg";
import User from "../assets/User.svg";

export default function MobileMenu() {
    return (
        <div className="main-mobile-menu-contener">
            <div className="header-buttons-contener" id="HeaderButtonsMobile">
                <div className="mobile-menu-button">
                    <img src={ShoppingCart} alt=""/>
                    <div>Корзина</div>
                </div>
                <div className="mobile-menu-button">
                    <img src={Heart} alt=""/>
                    <div>Избранное</div>
                </div>
                <div className="mobile-menu-button">
                    <img src={User} alt=""/>
                    <div>Профиль</div>
                </div>
            </div>
        </div>
    )
}