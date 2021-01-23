import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Highlight from "./components/Highlight";
import Project from "./components/Project";
import Quote from "./components/Quote";
import farmersfp from "./assets/farmers-gov-fp.png";
import farmersdadt from "./assets/farmers-gov-dadt.png";
import aafmaafp from "./assets/aafmaa-fp.png";
import aafmaalife from "./assets/aafmaa-life.png";
import nitaacfp from "./assets/nitaac-fp.png";
import nitaactaskorder from "./assets/nitaac-task-order.png";
import gameOfLifePic from "./assets/gomeoflife.png";
import dogsPic from "./assets/dogsrguud.png";

function App() {
  const farmersImgs = [
    { img: farmersfp, alt: "farmers.gov front page" },
    { img: farmersdadt, alt: "farmers.gov disaster assistance discovery tool" },
  ];
  const aafmaaImgs = [
    { img: aafmaafp, alt: "aafmaa.com front page" },
    { img: aafmaalife, alt: "aafmaa.com life insurance calculator" },
  ];
  const nitaacImgs = [
    { img: nitaacfp, alt: "nitaac.nih.gov front page" },
    { img: nitaactaskorder, alt: "nitaac.nih.gov task order page" },
  ];

  useEffect(() => {
    console.log(
      "%c Welcome to my porfolio!",
      "font-weight: bold; font-size: 40px;color: rgb(32,13,58); text-shadow: 3px 3px 0 rgb(166,33,106) , 6px 6px 0 rgb(236,28,75) , 9px 9px 0 rgb(241,106,67) , 12px 12px 0 rgb(247,217,105) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(47,147,149)"
    );
    console.log(
      "%c Enjoy your stay!",
      "font-weight: bold; font-size: 40px;color: rgb(32,13,58); text-shadow: 3px 3px 0 rgb(166,33,106) , 6px 6px 0 rgb(236,28,75) , 9px 9px 0 rgb(241,106,67) , 12px 12px 0 rgb(247,217,105) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(47,147,149)"
    );
    console.log(
      "%c You should hire me!",
      "font-weight: bold; font-size: 40px;color: rgb(32,13,58); text-shadow: 3px 3px 0 rgb(166,33,106) , 6px 6px 0 rgb(236,28,75) , 9px 9px 0 rgb(241,106,67) , 12px 12px 0 rgb(247,217,105) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(47,147,149)"
    );
    console.log(
      "%c I'm fun to work with",
      "font-weight: bold; font-size: 40px;color: rgb(32,13,58); text-shadow: 3px 3px 0 rgb(166,33,106) , 6px 6px 0 rgb(236,28,75) , 9px 9px 0 rgb(241,106,67) , 12px 12px 0 rgb(247,217,105) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(47,147,149)"
    );
    console.log(
      "%c and good at my job!",
      "font-weight: bold; font-size: 40px;color: rgb(32,13,58); text-shadow: 3px 3px 0 rgb(166,33,106) , 6px 6px 0 rgb(236,28,75) , 9px 9px 0 rgb(241,106,67) , 12px 12px 0 rgb(247,217,105) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(47,147,149)"
    );
    setTimeout(() => {
      const icons = [...document.querySelectorAll("i")];
      icons.map(icon => {
        const spinDir =
          Math.floor(Math.random() * 2 + 1) === 1 ? "spin-cw" : "spin-ccw";
        return icon.classList.add(spinDir);
      });
    }, 2000);
  }, []);

  return (
    <div className='App'>
      <Header />
      <Quote />
      <About />
      <h2 className='page--header'>Professional Work: Front End</h2>
      <div className='flex-container flex-justify-center margin-tb-1'>
        <Highlight
          url='https://nitaac.nih.gov'
          header='NITAAC'
          imgs={nitaacImgs}
          desc={
            <p className='highlight--desc'>
              Currently, I'm the lead front end developer for a refresh of the
              NIH Information Technology Acquisition and Assessment Center's
              public-facing website. My primary contributions include updating
              and creating markup, styles, animations, and interactions for all
              components across most-visited pages. I am also co-leading a
              Drupal migration, which involves refactoring site-wide legacy code
              to meet modern web standards and streamlining CMS practices.
            </p>
          }
        />
        <Highlight
          url='https://www.aafmaa.com'
          header='AAFMAA'
          imgs={aafmaaImgs}
          desc={
            <p className='highlight--desc'>
              I was brought on this project partway through to ensure the
              redesign was completed on time and in accordance with the high
              standards set by our client. My key contributions were creating
              logic, interactions, styling, and markup for dozens of components,
              including a highly visible{" "}
              <a
                href='https://www.aafmaa.com/life-insurance'
                target='_blank'
                rel='noopener noreferrer'
              >
                life insurance calculator tool
              </a>
              .
            </p>
          }
          award='🏆 2019 American Graphic Design Award 🏆'
          awardUrl='http://contests.gdusa.com/gdusa-contest-winner?cc=agda19&ids=0|1250&iy=&im='
        />
        <Highlight
          url='https://farmers.gov'
          header='Farmers.gov'
          imgs={farmersImgs}
          desc={
            <p className='highlight--desc'>
              Working on this high-profile government project was a great
              learning experience — and a fulfilling one as well, given its
              positive impact on people across the country. My core
              contributions included creating logic and functionality for the{" "}
              <a
                href='https://www.farmers.gov/recover/disaster-tool'
                target='_blank'
                rel='noopener noreferrer'
              >
                Disaster Assistance Discovery Tool
              </a>{" "}
              (which generated a significant increase in aid applications),
              creating and styling mobile-responsive pages, and updating the
              build process to include minification of CSS and transpilation of
              JS files.
            </p>
          }
          award='🏆 2018 American Graphic Design Award 🏆'
          awardUrl='http://contests.gdusa.com/gdusa-contest-winner?cc=agda18&ids=0|113817&iy=&im='
        />
      </div>
      <h2 className='page--header'>Personal Projects</h2>
      <div className='flex-container flex-justify-center margin-tb-1'>
        <Project
          url='https://game-of-life-viz.netlify.app/'
          repo='https://github.com/Jongtelles/game-of-life-viz'
          desc='React app that generates a board and randomly creates starting organisms before playing out iterations of the Game of Life'
          name='Game of Life Visualizer'
          img={gameOfLifePic}
          alt='game of life vizualizer website screenshot'
        />
        <Project
          url='https://dogs-r-good-4-u.netlify.app/'
          repo='https://github.com/Jongtelles/dogs-r-good-4-u'
          desc='React app that utilizes Hooks to fetch dogs at random (continuously or one at a time) and makes them do tricks (CSS animations)'
          name='Dogs R Good 4 U'
          img={dogsPic}
          alt='dogs r good 4 u website screenshot'
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
