import UserCircle from "../assets/UserCircle.svg";
import CalendarBlank from "../assets/CalendarBlank.svg";
import ChatCircle from "../assets/ChatCircleDots.svg";
import {NewsElementProps} from "../pages/MainPage/News/NewsElementProps.ts";

export default function NewsIcons({data}: {data: NewsElementProps}) {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const day = data.date.getDate();
    const month = months[data.date.getMonth()];
    const year = data.date.getFullYear();

    return (
        <div className="news-icons">
            <div className="news-icon-contener">
                <img src={UserCircle} className="news-icon-name" alt=""/>
                <div className="news-icon-text">
                    {data.authorName}
                </div>
            </div>
            <div className="news-icon-contener">
                <img src={CalendarBlank} className="news-icon-name" alt=""/>
                <div className="news-icon-text">
                    {`${day}${month}, ${year}`}
                </div>
            </div>
            <div className="news-icon-contener">
                <img src={ChatCircle} className="news-icon-name" alt=""/>
                <div className="news-icon-text">
                    {data.countComments}
                </div>
            </div>
        </div>
    )
}