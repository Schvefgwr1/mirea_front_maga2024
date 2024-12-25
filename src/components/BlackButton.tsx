export default function BlackButton({text, icon} : {text: string, icon: string}) {
    return (
        <div className="feedback-button">
            <div className="feedback-button-text">
                {text}
            </div>
            <img src={icon} alt=""/>
        </div>
    )
}