import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function CarouselComponent() {
  return (
    <div>
      <Carousel autoplay={true} showArrows={true} swipeable={true}>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/Christmas-Store-01_GW_PC_Unrec._CB571108007_.jpg" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/23/Central/BAU/Christmas/HERO/PC_hero_2x._CB571201008_.jpg" />
                </div>
            </Carousel>
    </div>
  )
}

export default CarouselComponent
