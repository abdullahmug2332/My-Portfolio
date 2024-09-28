import './App.css'
import './Intro.css'
import './Tech.css'
import './Quali.css'
import './Project.css'
import './Cert.css'
import './Contact.css'

// Images
import heroimg from "../public/DP.jpg"
import intro from "../public/img3.jpg"
import gcu from "../public/gcu3.jpg"
import school from "../public/school.jpg"
import html from "../public/icons/html.png"
import css from "../public/icons/css.png"
import js from "../public/icons/js.png"
import bootstrap from "../public/icons/bootstrap.png"
import react from "../public/icons/react.png"
import elementor from "../public/icons/elementor.png"
import touraza from "../public/Turaza.png"
import tourazalogo from "../public/tourazalogo.png"
import frontic from "../public/Frontic.png"
import fronticlogo from "../public/fronticlogo.png"
import digix from "../public/Digix.png"
import digixlogo from "../public/digixlogo.png"
import ks from "../public/knowledgestreams.jpeg"
import nexskill from "../public/nexskill.png"


import { useState } from 'react';
import Contact from './Contact'

function App() {
  // intro intro intro intro intro intro intro intro
  const [value, setvalue] = useState("exited ");
  const [imgpos, setimgpos] = useState("exited ");
  document.addEventListener('scroll', function () {

    const box = document.querySelector('.box');
    const boxPosition = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxPosition < windowHeight && boxPosition > 0) {
      setvalue("entered")
      setimgpos("entered")
    } else if (boxPosition <= 0 || boxPosition > windowHeight) {
      setvalue("exited")
      setimgpos("exited")
    }
  })
  // qualifications qualifications qualifications 
  const [qual1, setqual1] = useState("exited ")

  document.addEventListener('scroll', function () {
    const card1 = document.querySelector('.card1');
    const card1Position = card1.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (card1Position < windowHeight && card1Position > 0) {
      setqual1("entered")
    } else if (card1Position <= 0 || card1Position > windowHeight) {
      setqual1("exited")
    }

  })
  const [qual2, setqual2] = useState("exited ")

  document.addEventListener('scroll', function () {
    const card2 = document.querySelector('.card2');
    const card2Position = card2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (card2Position < windowHeight && card2Position > 0) {
      setqual2("entered")
    } else if (card2Position <= 0 || card2Position > windowHeight) {
      setqual2("exited")
    }
  });

  // Certification Certification Certification Certification

  const [cert1, setcert1] = useState("exited ")

  document.addEventListener('scroll', function () {
    const cert1 = document.querySelector('.cert1');
    const cert1Position = cert1.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cert1Position < windowHeight && cert1Position > 0) {
      setcert1("entered")
    } else if (cert1Position <= 0 || cert1Position > windowHeight) {
      setcert1("exited")
    }
  });

  const [cert2, setcert2] = useState("exited ")

  document.addEventListener('scroll', function () {
    const cert2 = document.querySelector('.cert2');
    const cert2Position = cert2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cert2Position < windowHeight && cert2Position > 0) {
      setcert2("entered")
    } else if (cert2Position <= 0 || cert2Position > windowHeight) {
      setcert2("exited")
    }
  });

  // technologytechnologytechnologytechnologytechnology
  const [tech, settech] = useState("exited ")
  document.addEventListener('scroll', function () {
    const tech = document.querySelector('.cssicon');
    const techPosition = tech.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (techPosition < windowHeight && techPosition > 0) {
      settech("entered")
    } else if (techPosition <= 0 || techPosition > windowHeight) {
      settech("exited")
    }
  });

  return (
    <div className='portfolio'>
      <div className="hero w-100 overflow-hidden pt-5 ">
        <div className="container my-auto mt-5">
          <div className="row mt-xl-5 mt-2">
            <div className="col-md-5 order-md-last d-md-block d-flex justify-content-center">
              <img src={heroimg} className='DP ' alt="" />
              <i className="fas fa-code"></i>
            </div>
            <div className="col-md-7 p-2 mt-xl-5 mt-2 text-md-start text-center">
              <h1>Hi,</h1>
              <h1 className='d-inline-block ab'>I'm <span className='clr'>Abdullah</span></h1>
              <h1>Frontend Web Developer</h1>
              <a href="tel:+923254412292">
              <button className='button  fs-4 px-4 py-2 ' >Contact Me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="intro mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img className={`introimg ${imgpos}`} src={intro} />
            </div>
            <div className="col-md-8">
              <div className={`box ${value}`}>
                <h1 className='title'>Introduction</h1>
                <h4 className="introduction">My name is Abdullah Sajjad, a 20 years old Frontend Web Developer based in Lahore, Pakistan. I specialize in creating visually compelling and user-friendly websites using a range of technologies, including HTML, CSS, JavaScript, Bootstrap, React, and WordPress Elementor. I am dedicated to delivering work that is both detail-oriented and up-to-date with the latest web design trends. Collaboration is one of my core strengths, and I thrive in team environments where we can build engaging and seamless web experiences together. I am always seeking new opportunities to apply my skills and expand my knowledge in this dynamic field.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="qualifications mb-5">
        <div className="col-12">
          <h2 className='title2'>Qualifications</h2>
          <div className="container">
            <div className="row">
              <div className="crd col-md-6">
                <div className={`card card1 ${qual1}`} style={{ width: "95%" }}>
                  <div className='div2'>
                    <img className="card-img-top img-fluid" src={gcu} alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h4 className="degree">Intermediate in Commerce</h4>
                    <p className="degreeinfo">
                      I recently completed my Intermediate studies, achieving a score of 76.82% Marks
                    </p>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid  fa-graduation-cap"></i>
                      <a className='text-decoration-none ps-2 GCU ' target="_blank" href="https://www.gcu.edu.pk/">GCU LAHORE</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="crd col-md-6">
                <div className={`card card2 ${qual2}`} style={{ width: "95%" }}>
                  <div className='div2'>
                    <img className="card-img-top img-fluid" src={school} alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h4 className="degree">Matriculation in Computer</h4>
                    <p className="degreeinfo">
                      I recently completed my Matriculation studies, achieving a score of 92.27% Marks
                    </p>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid  fa-graduation-cap"></i>
                      <a className='text-decoration-none ps-2 GCU ' target="_blank" href="https://maps.app.goo.gl/LrzEwvUg5UfZfHjCA">CDG Boys High School</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="technologies mb-5">
        <div className="container">
          <div className="col-12">
            <h2 className='title2'>Technologies</h2>
            <div className={`row divtech ${tech} p-5 `}>
              <div className="col-lg-4 col-6 text-center mb-5">
                <a target="_blank" href="https://en.wikipedia.org/wiki/HTML"><img className='icons htmlicon' src={html} /></a>
              </div>
              <div className="col-lg-4 col-6 text-center mb-5">
                <a target="_blank" href="https://en.wikipedia.org/wiki/CSS"><img className='icons cssicon' src={css} /></a>
              </div>
              <div className="col-lg-4 col-6 text-center mb-5">
                <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript"><img className='icons js' src={js} /></a>
              </div>
              <div className="col-lg-4 col-6 text-center mb-5">
                <a target="_blank" href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"><img className='icons bootstrap' src={bootstrap} /></a>
              </div>
              <div className="col-lg-4 col-6 text-center mb-5">
                <a target="_blank" href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"><img className='icons' src={react}/></a>
              </div>
              <div className="col-lg-4 col-6 text-center mb-5">
                <a target="_blank" href="https://en.wikipedia.org/wiki/Elementor"><img className='icons elementor' src={elementor} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects my-5">
        <div className="container">
          <h2 className='title2'>Projects</h2>
          <div className="row mx-3">
            <div className="tourazacon image-container col-md-4 mb-4">
              <a target="_blank" href="https://touraza-react.vercel.app/" style={{ position: 'relative' }}>
                <img className="projimg" src={touraza} alt="" />
                <img className="logo" src={tourazalogo} alt="Touraza Logo" />
              </a>
            </div>

            <div className="fronticcon image-container col-md-4 mb-3">
              <a target="_blank" href="https://frontic-hotel.vercel.app/" style={{ position: 'relative' }}>
                <img className="projimg" src={frontic} alt="" />
                <img className="logo" src={fronticlogo} alt="Frontic Logo" />
              </a>
            </div>

            <div className="digixcon image-container col-md-4 mb-3">
              <a target="_blank" href="https://digix-react.vercel.app/" style={{ position: 'relative' }}>
                <img className="projimg" src={digix} alt="" />
                <img className="logo" src={digixlogo} alt="Digix Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="certifications qualifications mb-5">
        <div className="col-12">
          <h2 className='title2'>Certifications</h2>
          <div className="container">
            <div className="row">
              <div className="crd col-md-6">
                <div className={`card cert1 ${cert1}`} style={{ width: "85%" }}>
                  <div className='div2'>
                    <img className="card-img-top img-fluid" src={ks} alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h4 className="degree">Introduction to Programming</h4>
                    <p className="degreeinfo">
                      I recently completed my Introduction to Programming bootcamp, which includes problem solving and algorithm making techniques
                    </p>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid  fa-graduation-cap"></i>
                      <a className='text-decoration-none ps-2 GCU ' target="_blank" href="https://www.gcu.edu.pk/">Knowledge Streams</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="crd col-md-6">
                <div className={`card cert2 ${cert2}`} style={{ width: "85%" }}>
                  <div className='div2'>
                    <img className="card-img-top img-fluid" src={nexskill} alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h4 className="degree">MERN Stack Development</h4>
                    <p className="degreeinfo">
                      I recently completed my MERN Stack Development bootcamp, which includes MongoDB, Express, React and NodeJs
                    </p>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid  fa-graduation-cap"></i>
                      <a className='text-decoration-none ps-2 GCU ' target="_blank" href="https://www.nexskill.com/">Nexskill</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default App         