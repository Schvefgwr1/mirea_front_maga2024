import {useState} from "react";
import SpecificationComponent from "./SpecificationComponent.tsx";
import DescriptionComponent from "./DescriptionComponent.tsx";
import ReviewComponent from "./ReviewComponent.tsx";

export default function ProductDescription() {
    const [state, setState] = useState<number>(1);
    const handleClickButton = (a: number) => {
        setState(a);
    }

    const Content = () => {
        switch (state) {
            case 1:
                return <DescriptionComponent/>
            case 2:
                return <SpecificationComponent/>
            case 3:
                return <ReviewComponent/>
            default:
                return <DescriptionComponent/>
        }
    }

    return (
        <div className="product-description">
            <div className="product-clicker">
                <div className={`button-contener ${state === 1 ? "active" : "inactive"}`}
                     onClick={() => {handleClickButton(1)}}
                >
                    DESCRIPTION
                </div>
                <div className={`button-contener ${state === 2 ? "active" : "inactive"}`}
                     onClick={() => {handleClickButton(2)}}
                >
                    SPECIFICATION
                </div>
                <div className={`button-contener ${state === 3 ? "active" : "inactive"}`}
                     onClick={() => {handleClickButton(3)}}
                >
                    REVIEW
                </div>
            </div>
            <Content/>
        </div>
    )
}