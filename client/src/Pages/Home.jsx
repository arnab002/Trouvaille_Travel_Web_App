import React from 'react'
import "../styles/Home.css"
import {Container,Row, Col} from 'reactstrap'
import heroImg from "../assets/images/Howrah_Bridge.jpg"
import heroImg2 from "../assets/images/India_Gate.jpg"
import heroVideo from "../assets/images/Incredible_India.mp4"
import Subtitle from '../Shared/Subtitle'
import worldImg from "../assets/images/world.png"
import experienceImage from "../assets/images/travel.jpg"
import SearchBar from '../Shared/SearchBar'
import ServiceList from '../Services/ServiceList'
import FeaturedToursList from '../Components/FeaturedTours/FeaturedToursList'
import MasonryImagesGallery from '../Components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../Components/Testimonials/Testimonials'
import Newsletter from '../Shared/Newsletter'
import Contact from './Contact'

const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know Before You Go"}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Visting to the{" "}
                <span className="highlight">Land of Diversity</span>
              </h1>
              <p>
              The varied landscapes, from the towering peaks of the Himalayas in the north to the sun-kissed beaches of the Indian Ocean in the south and a mosaic of ancient civilizations & cultural encounters to modern cities, India is a subcontinent offering multitudes of experiences.
              </p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box video-box mt-4">
              <video src={heroVideo} alt="" autoPlay loop muted />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-5">
              <img src={heroImg2} alt="" />
            </div>
          </Col>
          <Col>
            <SearchBar/>
          </Col>
        </Row>
      </Container>
    </section>
    <br /><br />
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h5 className="services__subtitle">What We Serve</h5>
            <h2 className="services__title">We Offer Our Best Services</h2>
          </Col>
          </Row>
          <ServiceList/>
      </Container>
    </section>
    <br /><br />
    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <Subtitle subtitle={"Explore"}/>
            <h2 className="featured__tour-title">Our Featured Tours</h2>
          </Col>
          <FeaturedToursList/>
        </Row>
      </Container>
    </section>
    <br /><br />
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience__content">
              <Subtitle subtitle={"Experience"}/>
              <h2>Experience the best trip ever <br /> with affordable prices</h2>
              <p>Travel over Whole India with best tourist guides and with great tour packages.</p>
            </div>
            <br />
            <div className="couter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>All</span>
                <h6>Successful Trips</h6>
              </div>
              <div className="counter__box">
                <span>50</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>2+</span>
                <h6>Years Experience</h6>
              </div>
            </div>

          </Col>
          <Col lg="6">
            <div className="experience__img">
              <img src={experienceImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <br /><br />
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"}/>
            <h2 className="gallery__title">
              Visit Our Customers Tour Gallery
            </h2>
          </Col>
          <Col lg="12">
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    <br /><br />
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Testimonial"}/>
            <h2 className="testmonials__title">What our Customers Say about us</h2>
          </Col>
          <Testimonials/>
        </Row>
      </Container>
    </section>
    <br /><br />
    <Contact/>
    <br />
    <Newsletter/>
    </>
  )
}

export default Home