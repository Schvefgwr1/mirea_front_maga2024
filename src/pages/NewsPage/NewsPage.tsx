import MyPageTemplate from "../../components/MyPageTemplate.tsx";
import NewsPageContent from "./NewsPageContent.tsx";

export default function NewsPage() {
    return (
        <MyPageTemplate children={<NewsPageContent/>}/>
    )
}