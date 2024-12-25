import Icon from "../assets/Icon.svg";

export default function Logo() {
    return (
        <div className="logo-contener">
            <div className="logo">
                <img src={Icon} alt=""/>
            </div>
            <div className="logo-name d-flex align-items-center justify-content-center">
                QUIET SHOP
            </div>
        </div>
    )
}