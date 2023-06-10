import SimpleImageSlider from "react-simple-image-slider";
import "./slider.css";

const images = [
  { url: "https://i.ibb.co/kJJ6bBf/dwaing.jpg" },
  { url: "https://i.ibb.co/PGwXmsj/learning.jpg" },
  { url: "https://i.ibb.co/kJJ6bBf/dwaing.jpg" },
  { url: "https://i.ibb.co/PGwXmsj/learning.jpg" },
];

const Slider = () => {
  return (
    <div className="slider-container">
      <SimpleImageSlider
        width={1200}
        height={560}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;
