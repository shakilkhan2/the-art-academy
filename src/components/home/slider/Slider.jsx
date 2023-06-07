import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
    return (
        <Carousel  showArrows={true} >
                <div>
                    <img src="https://i.ibb.co/kJJ6bBf/dwaing.jpg" />
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/PGwXmsj/learning.jpg" />
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/kJJ6bBf/dwaing.jpg" />
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/PGwXmsj/learning.jpg" />
                    
                </div>
                
            </Carousel>
    );
};

export default Slider;