import MyPageTemplate from "../../components/MyPageTemplate.tsx";
import ProductPageContent from "./ProductPageContent.tsx";

export default function ProductPage() {
    return (
        <MyPageTemplate children={<ProductPageContent/>}/>
    )
}