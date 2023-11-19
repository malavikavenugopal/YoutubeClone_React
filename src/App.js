import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Row from 'react-bootstrap/esm/Row';
import Sidebar from './components/Sidebar';
import Col from 'react-bootstrap/esm/Col';

import Videos from './components/Videos';
import Shorts from './components/Shorts';
import Videos2 from './components/Videos2';

function App() {
  return (
    <div className='app'>
   <div className='header' style={{position:'fixed',zIndex:'1'}}>< Header/>
    </div> 
     <Row style={{backgroundColor:'black'}}>
      <Col lg={1} className='hide' style={{position:'fixed',marginTop:'70px'}}><Sidebar/></Col>
      <Col lg={11} className='youtubevideo' style={{marginTop:'70px',backgroundColor:"black"}}>
      
        <div  className='video1'>
        <Videos/>
        </div>
       <div>
        <Shorts/>
       </div>
       <div style={{marginTop:'40px'}}>
        <Videos2/>
        </div>
      </Col>
     </Row>
    </div>
  );
}

export default App;
