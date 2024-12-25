import ArrowRight from "../../../assets/ArrowRight.svg";
import BlackButton from "../../../components/BlackButton.tsx";
import { NewsElementProps } from "./NewsElementProps.ts";
import NewsIcons from "../../../components/NewsIcons.tsx";

const NewsElement = ({data, navigateFunc}: {
    data: NewsElementProps,
    navigateFunc: () => void
}) => {

    return (
        <div className="news-element-contener">
            <div className="news-element-photo">
                <img src={data.photo} className="news-photo" alt=""/>
            </div>
            <div className="news-info-contener">
                <NewsIcons data={data}/>
                <div className="news-name-contener">
                    {data.name}
                </div>
                <div className="news-preview-contener">
                    {data.description}
                </div>
            </div>
            <div onClick={navigateFunc}>
                <BlackButton text="Read more" icon={ArrowRight}/>
            </div>
        </div>
    );
};

export default NewsElement;