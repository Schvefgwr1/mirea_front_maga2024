import Avatar from "./Photo/avatar.png";
import NetworkElement from "./NetworkElement.tsx";
import NewsCitCont from "./NewsCitCont.tsx";
import Text1 from "./Photo/text1.png";
import Text2 from "./Photo/text2.png";


export default function NewsText() {
    return [
        <div className="news-text-title">
            How artist collective Meow Wolf’s website complements their immersive venues
        </div>,
        <div className="news-text-author">
            <div className="author-name">
                <img src={Avatar} alt=""/>
                <div className="text">
                    Cameron Williamson
                </div>
            </div>
            <div className="author-network">
                <NetworkElement color={"#25D366"} logo={"/public/networks/wats.svg"}/>
                <NetworkElement color={"#3B5998"} logo={"/public/networks/face.svg"}/>
                <NetworkElement color={"#1DA1F2"} logo={"/public/networks/twitter.svg"}/>
                <NetworkElement color={"#77878F"} logo={"/public/networks/link_over.svg"}/>
            </div>
        </div>,
        <div className="news-text-content">
            Sed a laoreet erat, in vehicula erat. Vivamus a viverra ipsum, ut interdum tellus. Donec quis ex quis metus
            sodales facilisis ut nec ex. Ut commodo lacus vel odio venenatis, sit amet lacinia lacus cursus. Ut sodales
            laoreet dapibus. Sed aliquam nisl odio, sed blandit erat placerat sed. Mauris eleifend, magna in convallis
            congue, orci est fermentum leo, at tincidunt massa ligula semper dolor. Nunc tristique enim in risus
            tristique rutrum eget ac eros.
        </div>,
        <NewsCitCont text={
            "Vintage meets vogue is the only way to describe this serif typeface. Neue World encompasses the mode high-fashion aesthetic of the 1960s with a commercial take."
        }/>,
        <div className="news-text-content">
            Mauris fermentum faucibus risus a efficitur. Morbi sit amet arcu turpis. Ut nisl velit, mattis at augue vel,
            molestie egestas justo. Aliquam elementum nibh neque, eu ornare nunc feugiat sed. Aliquam erat volutpat.
            Praesent vitae orci blandit, semper felis ac, interdum lacus.
        </div>,
        <div className="news-text-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nunc urna, id lobortis elit dapibus et.
            Etiam ultricies leo justo, nec vehicula augue auctor et. Sed finibus volutpat dui. Nunc vitae urna dictum
            tellus luctus tincidunt quis feugiat dolor. Aliquam malesuada tristique urna, quis ornare diam venenatis
            quis. Nunc ligula lectus, posuere sit amet ultrices ut, porttitor efficitur mauris. Aliquam bibendum vitae
            turpis sed molestie. Donec massa lorem, semper vel pellentesque ut, ultrices in enim. Sed fringilla, mi
            porttitor sodales vehicula, felis enim gravida nisi, at mollis ante leo et ligula. Quisque non aliquam eros,
            in aliquet tellus. Mauris ullamcorper quam erat, vehicula rhoncus velit interdum eget.
        </div>,
        <div className="two-photos">
            <div className="photo-element">
                <img src={Text1} alt=""/>
            </div>
            <div className="photo-element">
                <img src={Text2} alt=""/>
            </div>
        </div>,
        <div className="news-text-content">
            Proin pulvinar quam at aliquet sagittis. Quisque laoreet luctus bibendum. Aenean in dignissim orci.
            Suspendisse at augue eget neque dictum vestibulum eu ac orci. Integer imperdiet lectus nec urna mollis
            euismod. Proin et risus nulla. Cras at diam in risus feugiat accumsan. Nulla sit amet blandit mi, a
            convallis mauris. Quisque lacus dolor, cursus ac quam ac, tempus ultrices sem. Ut porttitor.
        </div>
    ]
}