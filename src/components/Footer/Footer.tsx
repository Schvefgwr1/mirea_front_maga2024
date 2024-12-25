import Logo from "../Logo.tsx";
import FooterMenu from "./FooterMenu.tsx";
import {FirstMenuData} from "./FirstMenuData.ts";
import {SecondMenuData} from "./SecondMenuData.ts";

export default function Footer() {
    return (
        <div className="main-footer-contener">
            <div className="footer-first-part">
                <div>
                    <Logo/>
                    <div className="mt-4">
                        <div className="footer-support-text mb-1 footer-text">
                            Customer Supports:
                        </div>
                        <div className="footer-phone-text footer-text">
                            (629) 555-0129
                        </div>
                        <div className="footer-address-text mt-2 mb-2 footer-text">
                            4517 Washington Ave. Manchester, Kentucky 39495
                        </div>
                        <div className="footer-email-text footer-text">
                            info@kinbo.com
                        </div>
                    </div>
                </div>
                <FooterMenu data={FirstMenuData} name={"Top category"}/>
                <FooterMenu data={SecondMenuData} name={"Quick links"}/>
            </div>
            <div className="footer-second-part">
                <div className="footer-second-text">
                    Kinbo - eCommerce Template © 2021. Design by Templatecookie
                </div>
            </div>
        </div>
    )
}