import Slider from "react-slick";
import Photo1 from "./Photo/01.png";
import ArrowRight from "../../../public/ArrowRight.svg";
import ArrowLeft from "../../../public/ArrowLeft.svg";


const photoList = {
    1: Photo1,
    2: Photo1,
    3: Photo1,
    4: Photo1,
    5: Photo1
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,
                background: "black",
                borderRadius: "100%",
                height: "40px !important",
                width: "40px !important"
            }}
            onClick={onClick}
        >
            <img src={ArrowRight} alt=""/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,
                background: "black",
                borderRadius: "100%",
                height: "40px !important",
                width: "40px !important"
            }}
            onClick={onClick}
        >
            <img src={ArrowLeft} alt=""/>
        </div>
    );
}

function SliderProducts() {

    const settings = {
        customPaging: function(i: number) {
            return (
                <a className="slider-paging-element">
                    <img
                        style={{width: "100%", height: "auto"}}
                        src={photoList[i + 1]}
                        alt=""
                    />
                </a>
            );
        },
        dotsClass: "slick-dots slick-thumb",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="slider-container">
            <Slider {...settings} className="product-slider">
                <div className="slider-photo-contener">
                    <img src={Photo1} alt="" style={{width: "auto", height: "100%"}}/>
                </div>
                <div className="slider-photo-contener">
                    <img src={Photo1} alt="" style={{width: "auto", height: "100%"}}/>
                </div>
                <div className="slider-photo-contener">
                    <img src={Photo1} alt="" style={{width: "auto", height: "100%"}}/>
                </div>
                <div className="slider-photo-contener">
                    <img src={Photo1} alt="" style={{width: "auto", height: "100%"}}/>
                </div>
                <div className="slider-photo-contener">
                    <img src={Photo1} alt="" style={{width: "auto", height: "100%"}}/>
                </div>
            </Slider>
            <div className="product-contener-photos">
                {Object.entries(photoList).map(([key, photo]) => (
                    <img key={key} src={photo} alt={`Photo ${key}`} className="photo-in-cont"/>
                ))}
            </div>
        </div>
    );
}

export default SliderProducts;
