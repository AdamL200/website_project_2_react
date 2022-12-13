import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import meme from './meme.png'
import spiral from './spiral.webp'
import harold from './harold.jpg'
//import reportWebVitals from './reportWebVitals';

/* Planned layout of app
    <app>
      <nav><nav/>
      <button1><button1/>
      <div>
        <left column>
        <mid column>
        <right column>
      <div/>
      <game></game>
      <footer></footer>
    <app/>
*/


function TitleBox() {
  return (
    <div id='titleBox'>
      <p className='neon' >Welcome</p>
    </div>
  );
}

function LeftCol() {
  return (
    <div className="leftCol">
      <p>LeftCol</p>
      <img src={spiral}/>
    </div>
  );
}



function Slider() {
  const [rating, setRating] = useState(50);
  const [bgCol, setCol] = useState('coral');
  const [bgCol2, setCol2] = useState('black');
  const [review, setReview] = useState(false);
  const [click, setClick] = useState(false);
  
  function handleSlide(event) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    setCol('#'+randomColor)
    setCol2('#'+randomColor2)
    setRating(event.target.value);
    if (event.target.value == 100) {
      setReview({value: true})
    } else {setReview(false)}
  }

  function handleClick() {
    setClick(true)
  }

  return (
    <div className='slidecontainer'>
      <p>Please rate this website</p>
      <input
        className="slider"
        type="range" 
        min="0" 
        max="100" 
        value={rating}
        onChange={handleSlide}
        />
      <p className='output' style={{backgroundColor: bgCol,color: bgCol2}}>rating: {rating}</p>
      <button id='reviewBtn' className={review ? 'button1' :'hidden'} onClick={handleClick}>Submit Review</button>
      <p id='reviewConfirm' className={click ? '' :'hidden'}>Thank you for reviewing the website!</p>
      <hr/>
    </div>
  );
}

function Section2() {
  return(
    <div className='section2'>
      <h2>This is some text to pad out the screen to see what the formatting looks like... Wow you read this far feel accomplished yet?</h2>
      <h3><b><u> | *** Testing images *** |</u></b></h3>
    </div>
  );
}

function MidCol() {
  return (
    <div className="midCol">
      <p>MidCol</p>
      <h1 className='neonText' >Welcome</h1>
      <hr className='hrCol'/>
      <p>This is me testing html</p>
      <Slider/>
      <Section2/>
    </div>
  );
}

function RightCol() {
  return (
    <div className="rightCol">
      <p>RightCol</p>
      <img src={harold}/>
    </div>
  );
 
}

function Columns() {
  return (
    <div className="Columns">
      <LeftCol/>
      <MidCol/>
      <RightCol/>
    </div>
  );
}

function Nav() {
  return (
    <div className='Navbar'>
      <a href="#home" className='Nav-link'>Home</a>
      <a href="#news" className='Nav-link'>News</a>
      <a href="#contact" className='Nav-link'>Contact</a>
    </div>
  );
}


function Footer() {
  return (
    <div className='footer'>
      <h1 className='neonText1'>Footer</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Nav />
        <img src={meme} className="App-logo" alt="logo" />

      <Columns/>
      <Footer/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


