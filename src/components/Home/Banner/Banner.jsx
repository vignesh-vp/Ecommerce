import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
            <h1>SALES</h1>
            <p>
            "🎵 Tune In to Savings! 🎧 Score Big on our Headphone Extravaganza!

Unleash the full potential of your music with our Exclusive Headphone Sale. Dive into a world of unbeatable discounts and elevate your audio experience without compromising your budget
            </p>
            <div className="ctas">
                <div className="banner-cta">Read More</div>
                <div className="banner-cta v2">Shop Now</div>
            </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>
    );
};

export default Banner;
