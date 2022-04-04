import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react'
import TextTransition, { presets } from "react-text-transition";
import { MdHomeWork, MdRealEstateAgent} from 'react-icons/md';
import {FaReact, FaNode} from 'react-icons/fa';
import {DiDjango, DiPostgresql} from 'react-icons/di';
import { Footer } from "../components/footer";
import { HiOutlineArrowCircleDown} from 'react-icons/hi';

export const Home = (props) => {

let navigate = useNavigate();

const [index, setIndex] = React.useState(0);

const TITLES= ["LIVE STRESS FREE", "LEASE GUARANTEES", "FINANCE HANDLED", "TOP SERVICES"];

const DESCRIPTIONS = [
  "Quis deserunt tempor consectetur id ea. Aute sunt eu minim nostrud officia excepteur duis et tempor do dolor culpa. Cillum nostrud quis magna consequat.",
  "Quis commodo velit quis cupidatat non amet aliqua sint veniam labore. Culpa ea laboris consequat mollit proident Lorem cupidatat officia fugiat. Tempor sunt non ullamco irure in proident. Laboris minim esse qui non id et anim commodo. Esse id do irure ut eiusmod aliqua irure dolor in est ullamco culpa enim. ",
  "Quis deserunt tempor consectetur id ea. Aute sunt eu minim nostrud officia excepteur duis et tempor do dolor culpa. Cillum nostrud quis magna consequat.",
  "Exercitation ullamco qui occaecat dolore ex cillum exercitation commodo magna Lorem in laborum do do. Laboris ad mollit adipisicing ad occaecat fugiat tempor commodo irure magna culpa. Culpa eiusmod nisi sit non ipsum."
];

const TEXTS = ["~ Roderick Houston", "~ Shawna", "~ Cameron", '~ Aaliyah'];

const Paragraphs = [
  '"Rod commodo velit quis cupidatat non amet aliqua sint veniam labore. Culpa ea laboris consequat mollit proident Lorem cupidatat officia fugiat. Tempor sunt non ullamco irure in proident. Laboris minim esse qui non id et anim commodo. Esse id do irure ut eiusmod aliqua irure dolor in est ullamco culpa enim. "',
  '"Shawna deserunt tempor consectetur id ea. Aute sunt eu minim nostrud officia excepteur duis et tempor do dolor culpa. Cillum nostrud quis magna consequat."',
  '"Cameron deserunt tempor consectetur id ea. Aute sunt eu minim nostrud officia excepteur duis et tempor do dolor culpa. Cillum nostrud quis magna consequat."',
  '"Aaliyah Exercitation ullamco qui occaecat dolore ex cillum exercitation commodo magna Lorem in laborum do do. Laboris ad mollit adipisicing ad occaecat fugiat tempor commodo irure magna culpa. Culpa eiusmod nisi sit non ipsum."'
];
useEffect(() => {
 const intervalId = setInterval(() =>
    setIndex(index => index + 1),
    2500 // every 3 seconds
  );
  return () => clearTimeout(intervalId);
}, [])
  return(
    <>


    <div className='main'>
      <div className='topCarousel'>
        <div className='topCarouselEffect'>
          <div className='carouselContent'>

            <div className='contentText'>
            <div className='customLogoBoxHome'>
              <MdRealEstateAgent className='customLogoHome'/>
              </div>
              <h1 className='subTitle1'>S&R PROPERTY MANAGEMENT</h1>
              <p>Enjoy life. Let us handle the complications </p>
              <p>of managing your property</p>
              <br/>
              <div className='transitionTextDiv'>
              <h2 className='subTitle1'>
              <TextTransition
              className='colorText big'
               text={ TITLES[index % TITLES.length]}
               springConfig={presets.gentle}

               inline
             />
             </h2>
             <h4>
             <TextTransition
               text={DESCRIPTIONS[index % DESCRIPTIONS.length]}
               springConfig={presets.gentle}
               delay={300}
               style={{ margin: "10px 4px", textAlign: 'center' }}
               // inline
               // overflow
             />
             </h4>
             </div>
              <div className='btnDiv'>
                <button className='btn1'>MORE SERVICES</button>
                <button className='btn1'>LANDLORD'S GUIDE-BOOK</button>
              </div>
              <a href="#secondDiv"><HiOutlineArrowCircleDown className='downArrow'/></a>
              <p className='colorText'>to services</p>
            </div>
          </div>
          <div className='secondDiv' id='secondDiv'   >
            <div className='secDivBox' id='box1' style={{backgroundImage: 'url(../box1.jpg'}}>
              <div className='secDivEffect' >
                <div className='fadeBox' onClick= {(e) => navigate('/owner_portal')} >
                  <div className='boxText'>
                    <h1 className='subTitle1'>PROPERTY MANAGEMENT</h1>
                    <p>Complete care of your property or proerties.</p>
                    <p>Taking care of your investment</p>
                    <p className='hideText'>Learn More></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='secDivBox' id='box2' style={{backgroundImage: 'url(../box2.jpg'}}>
              <div className='secDivEffect' >
                <div className='fadeBox' onClick= {(e) => navigate('/browse')} >
                  <div className='boxText'>
                    <h1 className='subTitle1'>RENTAL SEARCH</h1>
                    <p>Complete care of your property or properties.</p>
                    <p>Taking care of your investment</p>
                    <p className='hideText'>Learn More></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='secDivBox' id='box3' style={{backgroundImage: 'url(../box3.jpeg'}}>
              <div className='secDivEffect' >
                <div className='fadeBox' onClick= {(e) => navigate('/owner_portal')}>
                  <div className='boxText'>
                    <h1 className='subTitle1'>OWNER SERVICES</h1>
                    <p>Complete care of your property or properties.</p>
                    <p>Taking care of your investment</p>
                    <p className='hideText'>Learn More></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='secDivBox' id='box4' style={{backgroundImage: 'url(../box4.jpeg'}}>
              <div className='secDivEffect' >
                <div className='fadeBox' onClick= {(e) => navigate('/browse')} >
                  <div className='boxText'>
                    <h1 className='subTitle1'>RENTAL SERVICES</h1>
                    <p>Complete care of your property or properties.</p>
                    <p>Taking care of your investment</p>
                    <p className='hideText'>Learn More></p>
                  </div>
                </div>
              </div>
            </div>

          <div className='bottomDiv'>
            <div className='bottomDivTop'>
            <h2>What are people saying?</h2>
             <TextTransition
               text={Paragraphs[index % Paragraphs.length]}
               springConfig={presets.gentle}
             />
             <h3>
             <TextTransition
              text={ TEXTS[index % TEXTS.length]}
              springConfig={presets.gentle}
              className="big"
              delay={300}
              inline
            />
            </h3>
            </div>
            </div>

            <Footer/>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}
