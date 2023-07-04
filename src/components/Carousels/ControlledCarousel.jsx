import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./ControlledCarousel.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='Carousel'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/TBLLDWY5ERDFTKQBC37D4WANRY.jpg"
          alt="Iphone 13"
        />
        <Carousel.Caption>
          <h3>Smartphones</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//f.fcdn.app/imgs/014582/www.zonatecno.com.uy/zoteuy/71bd/webp/catalogo/103086_103086_1/800x800/notebook-gamer-msi-pulse-gl66-i7-12700h-512gb-16gb-rtx3070-notebook-gamer-msi-pulse-gl66-i7-12700h-512gb-16gb-rtx3070.jpg"
          alt="Notebook"
        />
        <Carousel.Caption>
          <h3>Notebooks</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://media.revistagq.com/photos/5ee9f63ee3676ab95600e6f7/16:9/pass/playstation-5-juego-gratis.jpg'
          alt="Nintento-Switch"
        />
        <Carousel.Caption>
          <h3>Consolas</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default ControlledCarousel;