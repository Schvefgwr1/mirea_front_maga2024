import {FooterLinkProps} from "./FooterLinkProps.ts";

export default function FooterLink(props: FooterLinkProps) {
    return (
        <div className="footer-link">
            <a href={props.link} className="footer-link-text">
                {props.text}
            </a>
        </div>
    )
}