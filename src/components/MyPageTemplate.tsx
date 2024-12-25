import Footer from "./Footer/Footer.tsx";
import Header from "./Header.tsx";
import React from "react";
import MobileMenu from "./MobileMenu.tsx";

export default function MyPageTemplate({ children }: { children: React.ReactNode }) {
    return (
        <div className="main-page-container">
            <Header />
            {children}
            <MobileMenu/>
            <Footer/>
        </div>
    );
}
