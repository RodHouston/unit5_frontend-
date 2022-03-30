
import React, {  useEffect, useState } from 'react'
import { Footer } from "../../components/footer";
import TextTransition, { presets } from "react-text-transition";


export default function Services() {

  const TEXTS = ['PROVIDING EASE OF LIFE', 'PEACE OF MIND',
  "PROPERTY INVESTMENTS",
  "FINIANCES AND COLLECTIONS",
  "MULTIPLE SERVICES",
  "POLICIES"
  ]


const randomNumber = () => Math.floor(Math.random() * 5 - 1)
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [texts, setText] = useState(TEXTS[3]);

  useEffect(() => {

    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, [])



//   {texts.split("").map((n, i) => (
// ))}
//

  return(

    <>
      <div className='servicesDiv'>
        <div className='servicesBoxDivTop' >
          <div className='servicesTitleBox'>
            <div className='servicesTitle'>
              <TextTransition
              className=' colorText2'
              text={ TEXTS[index % TEXTS.length] }
              // springConfig={presets.slow}
              springConfig={presets.gentle}
              style={{ margin: "0 4px" }}
              inline
              overflow
              />
            </div>
          </div>
        </div>
        <div className='servicesBoxDiv' >
          <div className='servicesBox' style={{backgroundImage: `url('../../service1.jpeg')`}}>
            <div className='servicesBoxEffect'>
                <h2>Lease and Rental Agreements</h2>
            </div>
          </div>
          <div className='servicesBox' style={{backgroundImage: `url('../../service2.jpeg')`}}>
            <div className='servicesBoxEffect'>
                <h2>Financial Collection and Management</h2>
            </div>
          </div>
          <div className='servicesBox' style={{backgroundImage: `url('../../service3.jpeg')`}}>
            <div className='servicesBoxEffect'>
                <h2>Remodelling Services</h2>
            </div>
          </div>
          <div className='servicesBox' style={{backgroundImage: `url('../../service4.jpeg')`}}>
            <div className='servicesBoxEffect'>
                <h2>Landscaping and Lawn Care</h2>
            </div>
          </div>
          <div className='servicesBox' style={{backgroundImage: `url('../../service5.jpeg')`}}>
            <div className='servicesBoxEffect'>
                <h2>24hr Home Maintenance</h2>
            </div>
          </div>
          <div className='servicesBox' style={{backgroundImage: `url('../../service6.webp')`}}>
            <div className='servicesBoxEffect'>
                <h2>Realistate and Market Strategies</h2>
            </div>
          </div>


        </div>
      </div>
      <Footer/>
    </>

  );
}
