
import { useNavigate } from "react-router";



export const Home = (props) => {

let navigate = useNavigate();



  return(
    <>


    <div className='main'>
      <div className='topCarousel'>
        <div className='carouselContent'>
          <h1>Home Page</h1>
          <div className='contentText'>
            <h1>LIVE STRESS FREE</h1>
            <h1>S&R PROPERTY MANAGEMENT</h1>
            <p>Enjoy life. Let us handle the complications </p>
            <p>of managing your property</p>
            <div className='btnDiv'>
              <button className='btn1'>MORE SERVICES</button>
              <button className='btn1'>LANDLORDS GUILDBOOK</button>
            </div>
          </div>
        </div>
        <div className='secondDiv' >
          <div className='secDivBox' id='box1' style={{backgroundImage: 'url(../box1.jpg'}}>
            <div className='secDivEffect' >
              <div className='fadeBox' onClick= {(e) => navigate('/owner_portal')} >
                <div className='boxText'>
                  <h1>PROPERTY MANAGEMENT</h1>
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
                  <h1>RENTAL SEARCH</h1>
                  <p>Complete care of your property or proerties.</p>
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
                  <h1>OWNER SERVICES</h1>
                  <p>Complete care of your property or proerties.</p>
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
                  <h1>RENTAL SERVICES</h1>
                  <p>Complete care of your property or proerties.</p>
                  <p>Taking care of your investment</p>
                  <p className='hideText'>Learn More></p>
                </div>
              </div>
            </div>
          </div>

        <div className='bottomDiv'>
          <div className='bottomDivTop'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua.
             <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor <br/>in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident,<br/> sunt in culpa qui officia deserunt
            <br/>mollit anim id est laborum.</p>
          </div>
          <div className='bottomDivBot'>
          </div>
        </div>
        </div>
      </div>
    </div>




    </>
  )
}
