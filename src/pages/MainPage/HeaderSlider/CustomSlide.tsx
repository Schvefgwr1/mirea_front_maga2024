import BlackButton from "../../../components/BlackButton.tsx";
import ArrowRight from "../../../assets/ArrowRight.svg";
import {SlideProps} from "./SlideProps.ts";

export default function CustomSlide({props, length, number}: {props: SlideProps, length: number, number: number}) {
    const Dots = () => {
        const dots = []
        
        for(let i = 0; i < length; i++) {
            if(i == number) {
                dots.push(<div className="slide-dot" style={{backgroundColor: "black"}}/>)
            } else {
                dots.push(<div className="slide-dot" style={{backgroundColor: "white"}}/>)
            }
        }

        return (
            <div className="slide-dots">
                {dots}
            </div>
        )
    }

    return (
        <div className="main-slide-contener">
            <div className="slide-contener blue-black-gradient">
                <div className="slide-title">
                    <div className="slide-name">
                        {props.name}
                    </div>
                    <div className="slide-description">
                    {props.description}
                    </div>
                    <BlackButton text={"SHOP NOW"} icon={ArrowRight}/>
                    <div className="slide-dots">
                        <Dots/>
                    </div>
                </div>
                <div className="slide-photo">
                    <img src={props.photo} alt="" style={{width: "560px", height: "auto"}}/>
                </div>
                <div className="slide-price">
                    <div className="slide-price-contener">
                        ${props.price}
                    </div>
                </div>
            </div>
        </div>
    );
}