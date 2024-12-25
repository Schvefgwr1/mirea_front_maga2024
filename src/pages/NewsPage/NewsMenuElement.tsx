import Image from "./Photo/news1.png";


export default function NewsMenuElement() {
    return (
        <div className="news-menu-element-contener">
            <div className="news-menu-element-photo">
                <img src={Image} className="photo-cont" alt=""/>
            </div>
            <div className="news-menu-element-text-contener">
                <div className="name">
                    Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.
                </div>
                <div className="data">
                    28 Nov, 2015
                </div>
            </div>
        </div>
    )
}