import {isBrowser, isMobile} from 'react-device-detect';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.tsx";
import NewsPage from "./pages/NewsPage/NewsPage.tsx";
import ProductPage from "./pages/ProductPage/ProductPage.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";


export default function Routing() {
    if (isBrowser){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/news" element={<NewsPage/>}/>
                    <Route path="/product" element={<ProductPage/>}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        )
    } else if(isMobile) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/news" element={<NewsPage/>}/>
                    <Route path="/product" element={<ProductPage/>}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        )
    }
}