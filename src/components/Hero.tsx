
import { useEffect, useState } from "react";
import { heroSlides } from "./data/gargageData";
import "./Hero.scss";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const currentSlide = heroSlides[activeIndex];

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % heroSlides.length);
  };

  const showPrevious = () => {
    setActiveIndex(
      (index) => (index - 1 + heroSlides.length) % heroSlides.length
    );
  };

  useEffect(() => {
    if (paused || heroSlides.length < 2) return;

    const interval = setInterval(showNext, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  if (!currentSlide) return null;

  return (
    <section
      id="home"
      className="hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
      aria-label="MD Motors highlights"
      aria-roledescription="carousel"
    >
      <div
        key={currentSlide.id}
        className="hero-background"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(10, 14, 18, 0.96) 0%,
              rgba(10, 14, 18, 0.78) 45%,
              rgba(10, 14, 18, 0.25) 100%
            ),
            url("${currentSlide.image}")
          `,
        }}
        role="img"
        aria-label="Automotive background"
      />

      <div key={`${currentSlide.id}-content`} className="hero-content">
        <p className="hero-eyebrow">{currentSlide.eyebrow}</p>

        <h1>
          {currentSlide.title}
          <br />
          <span>{currentSlide.highlight}</span>
        </h1>

        <p className="hero-description">{currentSlide.description}</p>

        <div className="hero-actions">
          <a href={currentSlide.primaryLink} className="hero-primary">
            {currentSlide.primaryButton} <span>→</span>
          </a>

          <a href={currentSlide.secondaryLink} className="hero-secondary">
            {currentSlide.secondaryButton}
          </a>
        </div>
      </div>

      {heroSlides.length > 1 && (
        <>
          <button
            className="hero-arrow hero-prev"
            type="button"
            onClick={showPrevious}
            aria-label="Previous slide"
          >
            &#10094;
          </button>

          <button
            className="hero-arrow hero-next"
            type="button"
            onClick={showNext}
            aria-label="Next slide"
          >
            &#10095;
          </button>

          <div className="hero-dots" aria-label="Choose a slide">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={
                  index === activeIndex ? "hero-dot active" : "hero-dot"
                }
                onClick={() => setActiveIndex(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          <div className="hero-counter" aria-hidden="true">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(heroSlides.length).padStart(2, "0")}
          </div>
        </>
      )}
    </section>
  );
}
