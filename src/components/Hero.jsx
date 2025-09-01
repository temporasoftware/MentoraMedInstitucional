import slideImage from '../assets/images/team-image1.jpeg';

const HeroSection = () => (
  <section id="sobre" className="hero-1 hero-section py-90">
    <div className="slideshow">
      <div className="slideshow-inner">
        <div className="slides">

          {/* SLIDE #1 */}
          <div className="slide is-active">

            {/* Slide Content */}
            <div className="slide-content division">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-8 col-xl-7">
                    <div className="caption color--white">

                      {/* Title */}
                      <div className="title">
                        <h2 className="wow animate__animated animate__fadeInRight">
                          SUA EMPRESA EM CONFORMIDADE, SEU TIME COM SAÚDE
                        </h2>
                      </div>

                      {/* Text */}
                      <div className="text wow animate__animated animate__fadeInRight">
                        <p className="fs-19">
                          Impulsione sua equipe com nossa telepsicologia empresarial. Garantimos a conformidade com
                          a NR-1, promovemos o bem estar mental dos seus colaboradores, garantindo menos faltas, mais
                          engajamento e mais produtividade
                        </p>

                        <a href="#contato" className="btn btn-md r-08 btn--blue hover--tra-white">
                          Fale com um Especialista
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div> {/* End Slide Content */}

            {/* Slide Background Image */}
            <div className="image-container">
              <img className="image dark-filter" src={slideImage} alt="slide-background" />
            </div>

          </div> {/* END SLIDE #1 */}

        </div> {/* END SLIDER */}
      </div> {/* End Slideshow Inner */}
    </div> {/* End Slideshow */}
  </section>
);

export default HeroSection;
