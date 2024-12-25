import Quotes from "../../../public/double-quotes-r 1.svg";


export default function NewsCitCont({text}: {text: string}) {
    return (
        <div className="news-cit-cont">
            <div className="news-cit-quotes">
                <img src={Quotes} alt=""/>
            </div>
            <div className="news-cit-text">
                {text}
            </div>
        </div>
    )
}