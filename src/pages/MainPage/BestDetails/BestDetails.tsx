import ArrowRight from "../../../assets/ArrowRight.svg";
import Product from "./Product.tsx";
import {productsData} from "./ProductsData.ts";
import {useNavigate} from "react-router-dom";

export function BestDetails() {
    const navigate = useNavigate();
    const navigateToProduct = () => {
        navigate("/product");
    }

    return (
        <div className="main-news-and-deals-contener">
            <div className="main-page-title">
                <div className="best-title-cont">
                    <div className="news-best-title-text">
                        Best Deals
                    </div>
                    <div className="best-title-button">
                        <div className="best-title-button__text">
                            Browse All Product
                        </div>
                        <div className="best-title-button__icon">
                            <img src={ArrowRight} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-content">
                {productsData.map((product) => (
                    <Product props={product} navigateFunc={navigateToProduct}/>
                ))}
            </div>
        </div>
    )
}