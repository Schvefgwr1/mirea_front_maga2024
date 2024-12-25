import ArrowRight from "../assets/ArrowRight.svg";
import React, {useState} from "react";
import BlackButton from "./BlackButton.tsx";


export default function FeedbackForm() {
    const [email, setEmail] = useState<string>("");
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <div className="main-feedback-contener blue-purple-gradient">
            <div className="feedback-first-part">
                <div className="feedback-title">
                    Subscribe to our newsletter
                </div>
                <div className="feedback-text mt-2">
                    In order for us to continuously improve our service, please share your feedback. We will contact you by e-mail
                </div>
                <div className="feedback-input-contener">
                    <input
                        value={email}
                        onChange={handleChangeEmail}
                        className="feedback-input"
                        placeholder="Email address"
                    />
                    <BlackButton text="Subscribe" icon={ArrowRight}/>
                </div>
            </div>
        </div>
    )
}