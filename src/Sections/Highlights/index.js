import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";

function Highlights() {
  return (
    <div className="highlights-body">
      <Carousel
        className="carousel"
        autoPlay={true}
        centerMode={true}
        centerSlidePercentage={40}
        showThumbs={false}
        showStatus={false}
        interval={2000}
        infiniteLoop={true}
        showArrows={false}
      >
        <div id="item-1" className="carousel-item">
          <div className="item-shadow">
            <h1 className="title-highlights">Voe alto!</h1>
            <h3 className="subtitle-highlights">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </h3>
            <button className="button-look">Ver</button>
          </div>
        </div>

        <div id="item-2" className="carousel-item">
          <div className="item-shadow">
            <h1 className="title-highlights">MVP da rodada!</h1>
            <h3 className="subtitle-highlights">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </h3>
            <button className="button-look">Ver</button>
          </div>
        </div>

        <div id="item-3" className="carousel-item">
          <div className="item-shadow">
            <h1 className="title-highlights">The best</h1>
            <h3 className="subtitle-highlights">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </h3>
            <button className="button-look">Ver</button>
          </div>
        </div>

        <div id="item-4" className="carousel-item">
          <div className="item-shadow">
            <h1 className="title-highlights">Os melhores Jordans</h1>
            <h3 className="subtitle-highlights">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </h3>
            <button className="button-look">Ver</button>
          </div>
        </div>

        <div id="item-5" className="carousel-item">
          <div className="item-shadow">
            <h1 className="title-highlights">Bandeja</h1>
            <h3 className="subtitle-highlights">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </h3>
            <button className="button-look">Ver</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Highlights;
