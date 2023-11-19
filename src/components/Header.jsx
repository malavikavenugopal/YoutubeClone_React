import React from 'react'
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <nav class="navbar navbar-expand-lg " data-bs-theme="dark" style={{ backgroundColor: 'black' }}>
        <div class="container-fluid">
          <button className='btn btn-transparent rounded-5' onClick={handleShow}>
            <i className="fa-solid fa-bars text"></i>
          </button>

          <Offcanvas style={{ backgroundColor: "black", width: "250px", marginTop: '70px' }} show={show} onHide={handleClose}>

            <Offcanvas.Body style={{ overflowX: "hidden" }}>
              <button style={{ backgroundColor: 'rgb(61, 61, 61)' }} className='btn btnhover  text-light w-100'><i style={{ marginLeft: '-100px' }} class="fa-solid fa-house"></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Home</span></button>
              <button style={{ backgroundColor: '' }} className='btn  btnhover text-light w-100'><i style={{ marginLeft: '-100px' }} class="fa-solid fa-bolt"></i><span style={{ marginLeft: '20px', fontWeight: "400", fontFamily: 'lato' }}>Shorts</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-48px' }} class="fa-brands fa-youtube"></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Subscriptions</span></button>
              <hr style={{ color: 'white', width: '250px', marginLeft: '-20px' }}></hr>
              <button style={{ backgroundColor: '' }} className='btn btnhover  text-light w-100'><i style={{ marginLeft: '-115px' }} class="fa-solid fa-video"></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>You</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-90px' }} class="fa-solid fa-clock"></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>History</span></button>
              <hr style={{ color: 'white', width: '250px', marginLeft: '-20px' }}></hr>
              <p style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato', color: 'white' }}>Sign in to like videos, comment, and subscribe.</p>
              <button style={{ marginLeft: '10px' }} className='btn  btnhover btn-outline-light btn-sm rounded-4 text-primary'><i class="fa-solid fa-user"></i> Sign in</button>
              <hr style={{ color: 'white', width: '250px', marginLeft: '-20px' }}></hr>

              <p style={{ marginLeft: '15px', fontWeight: "800", fontFamily: 'lato', color: 'white' }}>Explore</p>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-85px' }} class="fa-solid fa-fire"></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Trending</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-85px' }} class="fa-solid fa-bag-shopping" ></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Shopping</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-110px' }} class="fa-brands fa-tiktok"></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Music</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-100px' }} class="fa-solid fa-film"></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Movies</span></button>
              <button style={{ backgroundColor: '' }} className='btn  btnhover text-light w-100'><i style={{ marginLeft: '-125px' }} class="fa-solid fa-location-crosshairs"></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Live</span></button>

              <button style={{ backgroundColor: '' }} className='btn  btnhover text-light w-100'><i style={{ marginLeft: '-100px' }} class="fa-solid fa-headset"></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Gaming</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-115px' }} class="fa-solid fa-newspaper"></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>News</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-115px' }} class="fa-solid fa-trophy"></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Sports</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-95px' }} class="fa-solid fa-lightbulb"></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Learning</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-40px' }} class="fa-solid fa-shirt"></i> <span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Fashion & Beauty</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-90px' }} class="fa-solid fa-podcast"></i><span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Podcasts</span></button>
              <hr style={{ color: 'white', width: '250px', marginLeft: '-20px' }}></hr>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-38px' }} class="fa-solid fa-plus"></i><span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Browse channels</span></button>
              <hr style={{ color: 'white', width: '250px', marginLeft: '-20px' }}></hr>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-38px' }} class="fa-brands fa-youtube"></i><span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>YouTube Premium</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-55px' }} class="fa-solid fa-music"></i><span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>YouTube Music</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-60px' }} class="fa-brands fa-square-youtube"></i><span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>YouTube Kids</span></button>
              <hr style={{ color: 'white', width: '250px', marginLeft: '-20px' }}></hr>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-100px' }} class="fa-solid fa-gear"></i><span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Settings</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-60px' }} class="fa-regular fa-flag"></i><span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Report history</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-120px' }} class="fa-solid fa-question"></i><span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Help</span></button>
              <button style={{ backgroundColor: '' }} className='btn btnhover text-light w-100'><i style={{ marginLeft: '-60px' }} class="fa-regular fa-message"></i><span style={{ marginLeft: '15px', fontWeight: "400", fontFamily: 'lato' }}>Send Feeback</span></button>
              <hr style={{ color: 'white', width: '250px', marginLeft: '-20px' }}></hr>
              <p style={{ fontSize: "14px", fontFamily: 'lato', color: "white" }}>AboutPressCopyrightContact usCreatorsAdvertiseDevelopers</p>
              <p style={{ fontSize: "14px", fontFamily: 'lato', color: "white" }}>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
              <p style={{ fontSize: "12px", fontFamily: 'lato', color: "white" }}>© 2023 Google LLC</p>




            </Offcanvas.Body>
          </Offcanvas>

          <Navbar.Brand href="#home">
            <div className="d-flex">
              <img
                alt=""
                src="https://logodix.com/logo/770373.png"
                width="70"
                height="50"
                className="d-inline-block align-top"
              />
              <h5 style={{ marginTop: '12px', marginLeft: '-18px', fontFamily: "Oswald", fontSize: "20px" }}>YouTube</h5>
            </div>

          </Navbar.Brand>
          <Form className='hide' inline style={{ marginLeft: "300px", width: '600px' }}>
            <InputGroup>

              <Form.Control
                placeholder="Search"
                className='hide'
                style={{ borderRadius: "30px 1px 1px 35px", backgroundColor: 'black' }}
                aria-label="Username"
                aria-describedby="basic-addon1"
              /><InputGroup.Text id="basic-addon1" style={{ borderRadius: "1px 35px 30px 0px", backgroundColor: 'rgb(61, 61, 61)' }}><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
            </InputGroup>

          </Form>
          <button type="button"  className="microphone btn  rounded-5" /* data-bs-toggle="modal" data-bs-target="#exampleModal"  */ style={{ marginLeft: "10px", backgroundColor: 'rgb(61, 61, 61)' }} > <i class="fa-solid fa-microphone"></i></button>

        {/*   <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{ backgroundColor: 'black' }}>




                <div className="modal-body">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ marginLeft: '450px' }}></button>
                  <h5 style={{ color: 'white' }}>Listening...</h5>
                  <div className='d-flex justify-content-center ' style={{ marginTop: '200px' }}>
                    <button style={{ marginLeft: "10px", backgroundColor: 'red' }} className='btn  rounded-5'> <i class="fa-solid  fa-microphone"></i></button>

                  </div>
                  <div style={{ margin: '30px' }}>

                  </div>
                </div>

              </div>
            </div>
          </div>  */}
        
          <div class="collapse navbar-collapse hide" id="navbarColor01" style={{ marginLeft: "50px" }}>
            <ul class="navbar-nav me-auto">

              <li class="nav-item dropdown hide" style={{ backgroundColor: 'black',zIndex:'1' }}>

                <a style={{ color: 'black' }} class="nav-link dropdown-toggle"  data-bs-toggle="dropdown"  href="#" role="button" aria-haspopup="true" aria-expanded="false">lorem njewnci dfnsdngtn <i style={{ color: 'white' }} class="fa-solid fa-ellipsis-vertical"></i></a>
                 <div class="dropdown-menu">
            <a class="dropdown-item" href="#"><i class="fa-solid fa-user"></i>  Your data in YouTube</a>
            <a class="dropdown-item" href="#"><i class="fa-regular fa-moon fa-flip-horizontal"></i>  Apperance:Device theme  <i style={{fontSize:'9px',marginLeft:"20px"}} class="fa-solid fa-greater-than"></i>   </a>
            <a class="dropdown-item" href="#"><i class="fa-solid fa-language"></i> Language:English      <i style={{fontSize:'9px',marginLeft:"65px"}} class="fa-solid fa-greater-than"></i></a>
            <a class="dropdown-item" href="#"><i class="fa-solid fa-shield"></i> Restricted Mode:off  <i style={{fontSize:'9px',marginLeft:"55px"}} class="fa-solid fa-greater-than"></i></a>
            <a class="dropdown-item" href="#"><i class="fa-solid fa-globe"></i> Location:India <i style={{fontSize:'9px',marginLeft:"95px"}} class="fa-solid fa-greater-than"></i></a>
            <a class="dropdown-item" href="#"><i class="fa-regular fa-keyboard"></i> Keyboard shortcuts</a> 
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"><i class="fa-solid fa-gear"></i> Settings</a>
            <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#"><i class="fa-solid fa-question"></i> Help</a>
            <a class="dropdown-item" href="#"><i class="fa-regular fa-message"></i> Send Feedback</a>
          </div> 
              </li>
              <li>

              </li>
             
            </ul>

          </div>
          <button  className='btn btn-outline-light rounded-4  text-primary'><i class="fa-solid fa-user"></i>Sign in</button>
        </div>
      
      </nav>
      <div style={{padding:"5px",marginLeft:'-50px'}} className='category '>
     <div id="carouselExample" class="carousel slide" style={{backgroundColor:'black',marginLeft:'100px'}}>
  <div class="carousel-inner" style={{backgroundColor:'black',marginTop:'-15px',marginLeft:"40px"}}>
    <div class="carousel-item active">
     <button style={{marginLeft:'130px'}} className='btn btnclr text-light'>All</button>
     <button style={{margin:"10px"}} className='btn btnclr text-light'>Computer Programming</button>
     <button  style={{margin:"10px"}} className='btn btnclr text-light'>Gaming</button>
     <button style={{margin:"10px"}}  className='btn btnclr text-light'>Music</button>
     <button style={{margin:"10px"}}   className='btn btnclr text-light'>Computer Hardware</button>
     <button  style={{margin:"10px"}} className='btn btnclr text-light'>Malayalam Cinema</button>
     <button   style={{margin:"10px"}} className='btn btnclr text-light'>Drama</button>
     <button   style={{margin:"10px"}} className='btn btnclr text-light'>Cricket</button>
     <button   style={{margin:"10px"}} className='btn btnclr text-light'>Gadgets</button>
     <button   style={{margin:"10px"}} className='btn btnclr text-light'>Podcasts</button>
     
    </div>
    <div class="carousel-item">
    <button style={{marginLeft:'130px'}} className='btn btnclr text-light'>Live</button>
     <button style={{margin:"10px"}} className='btn btnclr text-light'>Thoughts</button>
     <button  style={{margin:"10px"}} className='btn btnclr text-light'>Gaming</button>
     <button style={{margin:"10px"}}  className='btn btnclr text-light'>Tamil Movies</button>
     <button style={{margin:"10px"}}   className='btn btnclr text-light'>Chill-out Music</button>
     <button  style={{margin:"10px"}} className='btn btnclr text-light'>Bollywood Music</button>
     <button   style={{margin:"10px"}} className='btn btnclr text-light'>Algebra</button>
     
     <button   style={{margin:"10px"}} className='btn btnclr text-light'>Bodybuilding</button>
     <button   style={{margin:"10px"}} className='btn btnclr text-light'>Comedy</button>
     <button   style={{margin:"10px"}} className='btn btnclr text-light'>All</button>
     <button   style={{margin:"10px"}} className='btn btnclr text-light'>Dramedy</button>
    </div>
    <div class="carousel-item">
    <button style={{marginLeft:'130px'}} className='btn btnclr text-light'>Tamil Songs</button>
     <button style={{margin:"10px"}} className='btn btnclr text-light'>All</button>
     <button  style={{margin:"10px"}} className='btn btnclr text-light'>Gaming</button>
     <button style={{margin:"10px"}}  className='btn btnclr text-light'>Tamil Movies</button>
     <button style={{margin:"10px"}}   className='btn btnclr text-light'>Malayalam Music</button>
     <button  style={{margin:"10px"}} className='btn btnclr text-light'>Bollywood Music</button>
     <button   style={{margin:"10px"}} className='btn btnclr text-light'>Fashion</button>
     <button   style={{margin:"10px"}} className='btn btnclr text-light'>Makeup</button>
     <button   style={{margin:"10px"}} className='btn btnclr text-light'>Workouts</button>
   
     <button   style={{margin:"10px"}} className='btn btnclr text-light'>Dress Hauls</button>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
  )
}

export default Header