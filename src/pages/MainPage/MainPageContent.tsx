import FeedbackForm from "../../components/FeedbackForm.tsx";
import News from "./News/News.tsx";
import {BestDetails} from "./BestDetails/BestDetails.tsx";
import HeaderSlider from "./HeaderSlider/HeaderSlider.tsx";

export default function MainPageContent() {
    return (
        <div>
            <HeaderSlider/>
            <BestDetails/>
            <News/>
            <FeedbackForm/>
        </div>
    )
}
