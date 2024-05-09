import { Gallery, GalleryScene, ImageItem } from "react-gallery-3d";
export default function AboutCarousel() {
    return (
        <div className="carousel-scene">
        <GalleryScene backgroundColor="white" disableFog>
            <Gallery disableGround>
                <ImageItem src={"https://hips.hearstapps.com/hmg-prod/images/keithharing.jpg?crop=1xw:0.5xh;center,top&resize=1200:*"} />
                <ImageItem src={"https://images.ctfassets.net/rufp5n9kfzfi/7JeTWe3lH5weE161HbqJLl/1f22b9b07ad3464f431fd62fb55c0ad4/Keith_Haring_2.jpg?fm=webp&fit=thumb&q=65&w=864&h=576"} />
                <ImageItem src={"https://i.guim.co.uk/img/media/b1fac1eabd0183674210b726e7c39f054ccff26f/0_212_3992_2394/master/3992.jpg?width=1300&dpr=1&s=none"} />
                <ImageItem src={"https://prismic.imgix.net/kmg-2022/15c67d5c-f3e8-41e0-9472-8890cb18f36c_Musea__kunstschilders%2C_muurschilderingen%2C_graffiti%2C_Bestanddeelnr_933-5954.jpeg?ixlib=rails-4.3.1&auto=compress&nr=20&nrs=20&q=50&w=1500&s=77a9e76bc1138fbb1a79a50af8eec043"} />
            </Gallery>
        </GalleryScene>
        </div>
    );
};
