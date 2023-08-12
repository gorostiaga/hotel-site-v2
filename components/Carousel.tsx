const Carousel = () => {
  return (
    <div>
      <div
        id="prev_image"
        className={styles["slider_arrow--prev"]}
        onClick={prevHandler}
      >
        ❰
      </div>
      <div
        style={slider_area__slider__container}
        className={`${styles["slider_area__slider"]}`}
      >
        {photos.map((photo, id) => (
          <div
            key={id}
            id="image_carousel"
            style={getImageBackground(id)}
            className={`${styles["single_slider"]} d-flex align-items-center justify-content-center`}
          >
            <div className="container ">
              <div className="row">
                <div className="col-xl-12">
                  <div
                    className={`${styles["slider_text"]} ${raleway.className} text-center`}
                  >
                    <h3>{photos[currentIndex].name}</h3>
                    <p>{photos[currentIndex].phrase}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        id="next_image"
        className={styles["slider_arrow--next"]}
        onClick={nextHandler}
      >
        ❱
      </div>
    </div>
  );
};

export default Carousel;
