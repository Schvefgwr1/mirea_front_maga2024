import Medal from "../../../assets/features/Medal.svg";
import Truck from "../../../assets/features/Truck.svg";
import HandShake from "../../../assets/features/Handshake.svg";
import Headphones from "../../../assets/features/Headphones.svg";
import CreditCard from "../../../assets/features/CreditCard.svg";


export default function DescriptionComponent() {
    const Feature = ({icon, title}: {icon: string, title: string}) => {
        return (
            <div className="feature-element">
                <img src={icon} alt=""/>
                <div className="feature-element-text">
                    {title}
                </div>
            </div>
        )
    }

    const Text = ({blackText, grayText}: {blackText: string, grayText: string}) => {
        return (
            <div className="text-element">
                <div className="black-text">
                    {blackText}
                </div>
                <div className="gray-text">
                    {grayText}
                </div>
            </div>
        )
    }

    return (
        <div className="product-content">
            <div className="product-content-cont">
                <div className="text-container">
                    <div className="title">
                        Description
                    </div>
                    <div className="text-content">
                        The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the
                        first Apple silicon designed for pros — you get groundbreaking performance and amazing battery
                        life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac
                        notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a
                        beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for
                        pro users.
                        <br/> <br/>
                        Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores,
                        a 16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC,
                        and ProRes codecs.
                    </div>
                </div>
                <div className="feature-contener">
                    <div className="feature-title">
                        Feature
                    </div>
                    <div className="features-contener-in">
                        <Feature icon={Medal} title={"Free 1 Year Warranty"}/>
                        <Feature icon={Truck} title={"Free Shipping & Fasted Delivery"}/>
                        <Feature icon={HandShake} title={"100% Money-back guarantee"}/>
                        <Feature icon={Headphones} title={"24/7 Customer support"}/>
                        <Feature icon={CreditCard} title={"Secure payment method"}/>
                    </div>
                </div>
                <div className="shipping-contener">
                    <div className="feature-title">
                        Shipping Information
                    </div>
                    <div className="shipping-text-cont">
                        <Text blackText={"Courier:"} grayText={"2 - 4 days, free shipping"}/>
                        <Text blackText={"Local Shipping:"} grayText={"up to one week, $19.00"}/>
                        <Text blackText={"UPS Ground Shipping:"} grayText={"4 - 6 days, $29.00"}/>
                        <Text blackText={"Unishop Global Export:"} grayText={"3 - 4 days, $39.00"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}