import { useState, useEffect } from "react";
import slideImage1 from "../assets/images/app-image1.png";
import slideImage2 from "../assets/images/team-image1.jpeg";
import "./hero.css";

const slides = [slideImage1, slideImage2];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sobre" className="hero-1 hero-section py-90">
      <div className="slideshow">
        <div className="slide-content division">
          <div className="container-xxl">
            <div className="row">
              <div className="col-lg-8 col-xl-7">
                <div className="caption color--white">
                  <div className="title">
                    <h2 className="wow animate__animated animate__fadeInRight">
                      SUA EMPRESA EM CONFORMIDADE, SEU TIME COM SAÚDE
                    </h2>
                  </div>

                  <div className="text wow animate__animated animate__fadeInRight d-flex">
                    <div>
                      <p className="fs-18">
                        Impulsione sua equipe com nossa telepsicologia
                        empresarial. Garantimos a conformidade com a NR-1,
                        promovemos o bem estar mental dos seus colaboradores,
                        garantindo menos faltas, mais engajamento e mais
                        produtividade
                      </p>
                      <a
                        href="#contato"
                        className="btn btn-md r-08 btn--blue hover--tra-white"
                      >
                        Fale com um Especialista
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-container">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide}
              alt="slide-background"
              className={i === index ? "active" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
