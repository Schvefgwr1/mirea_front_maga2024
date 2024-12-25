import FooterLink from "./FooterLink/FooterLink.tsx";
import { FooterMenuProps } from "./FooterMenuProps.ts";
import { FooterLinkProps } from "./FooterLink/FooterLinkProps.ts";

export default function FooterMenu(props: FooterMenuProps) {
    const Links = ({ data }: { data: FooterLinkProps[] }) => {
        return (
            <>
                {data.map((item, index) => (
                    <FooterLink key={index} link={item.link} text={item.text} />
                ))}
            </>
        );
    };

    return (
        <div>
            <div className="footer-menu-top mb-2">
                {props.name}
            </div>
            <Links data={props.data} />
        </div>
    );
}
