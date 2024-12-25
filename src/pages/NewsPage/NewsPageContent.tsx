import NewsPhoto from "../NewsPage/Photo/news1.png";
import NewsIcons from "../../components/NewsIcons.tsx";
import {newsData} from "../MainPage/News/NewsData.ts";
import NewsPageMenu from "./NewsPageMenu.tsx";
import NewsText from "./NewsText.tsx";

export default function NewsPageContent() {
    return (
        <div className="news-page-main-contener">
            <div className="news-page-photo-contener">
                <img src={NewsPhoto} alt="" style={{width: "100%", height: "auto"}}/>
            </div>
            <div className="news-page-content">
                <div className="news-page-text">
                    <NewsIcons data={newsData[0]}/>
                    <NewsText/>
                </div>
                <NewsPageMenu/>
            </div>
        </div>
    )
}