import NewsElement from "./NewsElement.tsx";
import { newsData } from "./NewsData.ts";
import {useNavigate} from "react-router-dom";

export default function News() {
    const navigate = useNavigate();
    const navigateToNews = () => {
        navigate("/news");
    }

    return (
        <div className="main-news-and-deals-contener">
            <div className="main-page-title">
                <div className="news-best-title-text">Latest news</div>
            </div>
            <div className="news-contener">
                {newsData.map((news) => (
                    <NewsElement data={news} navigateFunc={navigateToNews}/>
                ))}
            </div>
        </div>
    );
}
