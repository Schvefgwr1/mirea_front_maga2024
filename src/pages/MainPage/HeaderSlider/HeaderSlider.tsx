import Slider from "react-slick";
import CustomSlide from "./CustomSlide.tsx";
import {slidesData} from "./SlidesData.ts";

function HeaderSlider() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slidesData.map((product, index) => (
                    <CustomSlide props={product} length={slidesData.length} number={index}/>
                ))}
            </Slider>
        </div>
    );
}

export default HeaderSlider;