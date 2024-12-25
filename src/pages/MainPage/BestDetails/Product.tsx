import HeartBlack from "../../../assets/HeartBlack24.svg";
import Eye from "../../../assets/Eye.svg";
import ShoppingCart from "../../../assets/ShoppingCartSimple.svg";
import {ProductProps} from "./ProductProps.ts";

export default function Product({props, navigateFunc}: {props: ProductProps, navigateFunc: () => void}) {
    return (
        <div className="product-contener" onClick={navigateFunc}>
            <div className="product-img-contener">
                <img src={props.photo} alt="" className="product-photo"/>
            </div>
            <div className="product-text">
                {props.text}
            </div>
            <div className="product-price">
                ${props.price}
            </div>
            <div className="product-menu-buttons-contener">
                <div className="product-menu-button">
                    <img src={HeartBlack} style={{color: "black !important"}} alt=""/>
                </div>
                <div className="product-menu-button">
                    <img src={ShoppingCart} alt=""/>
                </div>
                <div className="product-menu-button">
                    <img src={Eye} alt=""/>
                </div>
            </div>
        </div>
    )
}