import SliderProducts from "./SliderProducts.tsx";
import InformationMenu from "./InformationMenu.tsx";
import ProductDescription from "./ProductDescription/ProductDescription.tsx";

export default function ProductPageContent() {
    return (
        <div className="product-page-main-contener">
            <div className="product-header">
                <div className="product-header-contener orderingSlider">
                    <SliderProducts/>
                </div>
                <div className="product-header-contener orderingInformation">
                    <InformationMenu/>
                </div>
            </div>
            <div className="product-description-contener">
                <ProductDescription/>
            </div>
        </div>
    )
}