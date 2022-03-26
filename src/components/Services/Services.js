import React from 'react';

export default function Services() {
  return(

    <>
      <div className='servicesDiv'>
        <div className='servicesBoxDivTop' >
          <div className='servicesTitle' >
            <h2>PROVIDING EASE OF LIFE AND PEACE OF MIND</h2>
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
    </>

  );
}
