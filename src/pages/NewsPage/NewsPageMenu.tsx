import Glass from "../../assets/MagnifyingGlass.svg";
import NewsMenuElement from "./NewsMenuElement.tsx";

export default function NewsPageMenu() {
    return (
        <div className="news-page-menu">
            <div className="news-page-component">
                <div className="news-page-search-title">
                    SEARCH
                </div>
                <div className="news-page-search-form-contener">
                    <input type="text" className="news-page-search-form" placeholder="Search"/>
                    <div className="news-page-search-form-icon">
                        <img src={Glass} alt=""/>
                    </div>
                </div>
            </div>
            <div className="news-page-component" style={{marginTop: "24px"}}>
                <div className="news-page-search-title">
                    LATEST BLOG
                </div>
                <NewsMenuElement/>
                <NewsMenuElement/>
                <NewsMenuElement/>
            </div>
        </div>
    )
}