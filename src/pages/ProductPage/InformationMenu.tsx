import Star from "../../assets/Star.svg";
import ShopCard from "../../../public/ShoppingCartSimpleWhite.svg";
import Minus from "../../assets/Minus.svg";
import Plus from "../../assets/Plus.svg";
import {useState} from "react";

export default function InformationMenu() {
    const [count, setCount] = useState<number>(0);
    const handlePlusCount = () => {
        if(count < 100) {
            setCount(count + 1);
        }
    }
    const handleMinusCount = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className="product-title blue-black-gradient">
            <div className="product-title-information">
                <div className="rating">
                    <div className="stars">
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                    </div>
                    <div className="text-rating">
                        4.7 Star Rating
                    </div>
                    <div className="feedback-rating">
                        (21,671 User feedback)
                    </div>
                </div>
                <div className="product">
                    2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray
                </div>
                <div className="statistic">
                    <div className="part-stat">
                        <div className="type-stat">
                            Sku: <text style={{color: "white"}}>A264671</text>
                        </div>
                        <div className="type-stat">
                            Brand: <text style={{color: "white"}}>Apple</text>
                        </div>
                    </div>
                    <div className="part-stat">
                        <div className="type-stat">
                            Category:&nbsp;
                            <text style={{color: "white"}}>Electronics Devices</text>
                        </div>
                        <div className="type-stat">
                            Availability:&nbsp;
                            <text style={{color: "#2DB224"}}>In Stock</text>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-price">
                $1699
            </div>
            <div className="product-line"/>
            <div className="product-buttons">
                <div className="add-button">
                    <div className="name">
                        ADD TO CARD
                    </div>
                    <div className="icon">
                        <img src={ShopCard} alt=""/>
                    </div>
                </div>
                <div className="count-button">
                    <div className="minus">
                        <img src={Minus} alt="" onClick={handleMinusCount}/>
                    </div>
                    <div className="count">
                        {count}
                    </div>
                    <div className="plus">
                        <img src={Plus} alt="" onClick={handlePlusCount}/>
                    </div>
                </div>
            </div>
        </div>
    )
}