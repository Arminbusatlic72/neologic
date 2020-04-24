import React from "react"
import PropTypes from "prop-types"
import { Carousel } from "react-bootstrap"


import "./carousel.scss"

const ProjectCarousel = ({ images, current }) => {
    const carouselItems = images.map((image, index) =>
        <Carousel.Item key={index}>
            <figure>
                <img className="carousel__img" src={image.src} alt={image.alt} />
                <figcaption>
                    <div className="bottom-bar test">
                        <div className="counter">{index + 1} of {images.length}</div>
                    </div>
                </figcaption>
            </figure>
        </Carousel.Item>
    );

    return (
        <Carousel interval={null} indicators={false} defaultActiveIndex={current} slide={false}>
            {carouselItems}
        </Carousel>
    );
}

ProjectCarousel.propTypes = {
    images: PropTypes.array.isRequired,
    current: PropTypes.number.isRequired,
}

export default ProjectCarousel;