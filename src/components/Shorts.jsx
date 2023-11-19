import React from 'react'
import Card from 'react-bootstrap/Card';
function Shorts() {
  return (
    <div className='videos' style={{ backgroundColor: 'black', marginLeft: '50px' }}>
      <img style={{ height: '50px', width: '110px', marginLeft: "60px" }} src='https://tse4.mm.bing.net/th?id=OIP.EcRQlib0kVcvHUBP0ng8KQHaEK&pid=Api&P=0&h=180' />


      <div className="row " style={{ marginLeft: "60px" }}>
        <div className="col-lg-2 " style={{ margin: "20px" }}>
          <Card style={{ width: '15rem', backgroundColor: "black" }}>
            <iframe height="400" src="https://www.youtube.com/embed/opRm3x9vHH0" title="Programming Language Tier List" frameborder="0" allow=" autoplay; " allowfullscreen></iframe>
            <Card.Body style={{ backgroundColor: 'black' }}>

              <Card.Text style={{ backgroundColor: 'black' }}>
                <h6 style={{ color: 'white', fontSize: '18px', marginLeft: '-10px' }}>Programming Language Tier List</h6>

                <p style={{ color: 'white', fontSize: '13px', marginLeft: '-10px' }}>
                  267.8k views
                </p>
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-2 col-sm-12" style={{ margin: "20px" }}>
          <Card style={{ width: '15rem', backgroundColor: "black" }}>

            <iframe height="400" src="https://www.youtube.com/embed/oCrhPEZzr_0" title="Programmers VS Software Engineers EXPLAINED 👩‍💻 #programmer #technology #coder #engineering" frameborder="0" allow="accelerometer; autoplay; " allowfullscreen></iframe>
            <Card.Body style={{ backgroundColor: 'black' }}>

              <Card.Text style={{ backgroundColor: 'black' }}>
                <h6 style={{ color: 'white', fontSize: '18px', marginLeft: '-10px' }}>Programmers VS Software Engineers EXPLAINED 👩‍💻</h6>

                <p style={{ color: 'white', fontSize: '13px', marginLeft: '-10px' }}>
                  267.8k views
                </p>
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-2 col-sm-12" style={{ margin: "20px" }}>
          <Card style={{ width: '15rem', backgroundColor: "black" }}>

            <iframe height="400" src="https://www.youtube.com/embed/k7LSFYyBZUs" title="Coding for 1 Month Versus 1 Year #shorts #coding" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <Card.Body style={{ backgroundColor: 'black' }}>

              <Card.Text style={{ backgroundColor: 'black' }}>
                <h6 style={{ color: 'white', fontSize: '18px', marginLeft: '-10px' }}>Coding for 1 Month Versus 1 Year #shorts #coding</h6>

                <p style={{ color: 'white', fontSize: '13px', marginLeft: '-10px' }}>
                  277.3k views
                </p>
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
        <div className="col-2 hide" style={{ margin: "20px" }}>
          <Card style={{ width: '15rem', backgroundColor: "black" }}>


            <iframe height="400" src="https://www.youtube.com/embed/VqMPDGI1ESw" title="Indians are scared of AI 😮😮" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <Card.Body style={{ backgroundColor: 'black' }}>

              <Card.Text style={{ backgroundColor: 'black' }}>
                <h6 style={{ color: 'white', fontSize: '18px', marginLeft: '-10px' }}>Indians are scared of AI 😮😮</h6>

                <p style={{ color: 'white', fontSize: '13px', marginLeft: '-10px' }}>
                  27.6k views
                </p>
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
        <div className="col-2 hide" style={{ margin: "20px" }}>
          <Card style={{ width: '15rem', backgroundColor: "black" }}>

            <iframe height="400" src="https://www.youtube.com/embed/FIZI3k7mTvA" title="what 10 years of coding looks like…" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <Card.Body style={{ backgroundColor: 'black' }}>

              <Card.Text style={{ backgroundColor: 'black' }}>
                <h6 style={{ color: 'white', fontSize: '18px', marginLeft: '-10px' }}>what 10 years of coding looks like…</h6>

                <p style={{ color: 'white', fontSize: '13px', marginLeft: '-10px' }}>
                  267.8k views
                </p>
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row hide">
        <div className="col-5">
          <hr style={{ color: "white", marginLeft: '50px' }} ></hr>
        </div>
        <div className="col-3">
          <button style={{ color: "white", marginLeft: "-25px", fontSize: '15px' }} className='w-100 btn btnhover btn-outline-secondary rounded-5 d-flex text-align-center justify-content-center align-items-center'>Show more <i style={{ fontSize: '10px', marginLeft: '10px', marginTop: '5px' }} class="fa-solid fa-greater-than fa-rotate-90"></i></button>
        </div>
        <div className="col-4">
          <hr style={{ color: "white", marginLeft: "-47px" }}></hr>
        </div>

      </div>
     

     
    </div>
  )
}

export default Shorts