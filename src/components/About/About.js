import React, { useState, useEffect } from 'react';
import { Footer } from "../../components/footer";
import axios from 'axios'
import TextTransition, { presets } from "react-text-transition";
import Fade from 'react-reveal/Fade';


export default function About() {

  const TEXTS = ['COMPAN',"FAMIL", 'PROPERT'  ]


  const randomNumber = () => Math.floor(Math.random() * 5 - 1)
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [texts, setText] = useState(TEXTS[3]);

  useEffect(() => {

    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2500
    );
    return () => clearTimeout(intervalId);
  }, [])



  return(
    <>
    <div className='servicesDiv'>
      <div className='servicesBoxDivTop' >
      <div className='servicesTitleBox'>
        <div className='servicesTitle'>
          <h2 className=' colorText2'>ABOUT OUR
          <TextTransition
          className=' colorText2'
          text={ TEXTS[index % TEXTS.length] }
          // springConfig={presets.slow}
          springConfig={presets.wobble}
          style={{ margin: "0 4px" }}
          inline
          overflow
          />
          Y</h2>
        </div>
        </div>
      </div>
      <div className='aboutBoxDiv' >
        <div className='aboutBox rightBox' >
          <div className='aboutBoxRight' >
          <Fade right>
            <h1> Roderick Houston</h1><span className='colorText'>COO, OWNER</span>
            <p>Roderick oversees the daily management operations and staff to ensure
            all owners and tenants are well taken care of. He is always working to
            improve processes, procedures and service to ensure all our clients
            receive the highest level of care possible.</p>
            </Fade>
          </div>
          <div className='aboutBoxEffect'>
            <img className='aboutPic' src='https://i.imgur.com/O9S4EIu.png'/>
          </div>
        </div>
        <div className='aboutBox leftBox' >
          <div className='aboutBoxEffect'>
            <img className='aboutPic' src='https://i.imgur.com/ZX43lUN.png'/>
          </div>
          <div className='aboutBoxRight ' >
          <Fade left>
            <h1> Shawna Houston</h1><span className='colorText'>PRNCIPAL BROKER, OWNER</span>
            <p>Shawna manages the real estate sales operations and helps our agents
             with sales and rental transactions. Shawna has been a licensed Realtor
             since 1998 and has worked extensively in the property market.
             She is also responsible for marketing efforts for S&R Property Management.</p>
             </Fade>
          </div>
        </div>
        <div className='aboutBox rightBox' >
          <div className='aboutBoxRight' >
          <Fade right>
            <h1> Cameron Houston</h1><span className='colorText'>PROPERTY MANAGER, REALITOR</span>
            <p>Cameron oversees the daily operations for property management & leasing
            and works closely with the team to help with issues and to improve overall
            operations and our client experience.</p>
            </Fade>
          </div>
          <div className='aboutBoxEffect'>
            <img className='aboutPic' src='https://i.imgur.com/MVvSxRn.png'/>
          </div>
        </div>
        <div className='aboutBox leftBox' >
        <div className='aboutBoxEffect'>
          <img className='aboutPic' src='https://i.imgur.com/WuwlHbD.png'/>
        </div>
          <div className='aboutBoxRight' >
          <Fade left>
            <h1>Aaliyah Houston</h1><span className='colorText'>REALITOR</span>
            <p>Aaliyah is a Client Relations Specialist. She handles client onboarding with
            client communications, management contracts, securing vendors and she is
            a liaison between the leasing team and property management team. Aaliyah
            comes from a creative background. She loves to travel, cook gourmet food
            and spend time with her family</p>
            </Fade>
          </div>
        </div>
        <div className='aboutBox rightBox' >
          <div className='aboutBoxRight' >
          <Fade right>
            <h1> S & R</h1><span className='colorText'> FAMILY OPERATION</span>
            <p>Our business is to provide you with management solutions that help your
            property operate smoothly, increase its desirability and enhance the
            investment value. That’s why property owners throughout the area depend
            on us to help achieve their goals of property performance and profitability.
            Whether your property is a condo, townhome or single-family home, we ensure
            that your property is well managed to attract and retain great tenants.</p>
            </Fade>
          </div>
          <div className='aboutBoxEffect'>
            <img className='aboutPic' src='https://i.imgur.com/apfDfoA.png'/>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
