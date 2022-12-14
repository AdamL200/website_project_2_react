import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import meme from './meme.png'
import spiral from './spiral.webp'
import harold from './harold.jpg'
import pizza from './pizza.webp'
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
  const [bgCol, setCol] = useState('blueviolet');
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
      <h2>This is some text to pad out the screen to see what the formatting looks like...
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt purus eu mauris blandit placerat. Donec ac sem neque. Curabitur?
      </h2>
      <h3><b><u> | *** Testing images *** |</u></b></h3>
      <img src={meme} className="App-logo" alt="logo" />
      <img src={pizza} className="pizza" alt="logo" />
    </div>
  );
}

function Form1() {

  return(
    <form className='form1'>
      <label for="fname">First name:</label><br/>
      <input type="text" id="fname" name="fname"/><br/>

      <label for="lname">Last name:</label><br/>
      <input type="text" id="lname" name="lname"/><br/>

      <input type="radio" id="radio1" name="radio1" value="radio1"/>
      <label for="radio1"> Tick this to agree to give us your organs</label><br/>

      <input type="radio" id="radio2" name="radio1" value="radio2"/>
      <label for="radio2"> Select this this to give us your firstborn child</label><br/>

      <input type="radio" id="radio3" name="radio1" value="radio3"/>
      <label for="radio3"> Select this if you want 3 large swat teams to make their way to you now</label><br/>

      <label for="payments">Choose a payment method:</label>
      
      <select name="payments" id="payments">
      <optgroup label="body parts">
        <option value="kidney">kidney</option>
        <option value="heart">heart</option>
      </optgroup>
      <optgroup label="currencies">
        <option value="blood">Blood</option>
        <option value="money">Money</option>
      </optgroup>
      </select><br/>
      <label for="submit">Submit:</label><br/>

      <input type="submit" id="submit" name="submit"/>
    </form>
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
      <hr className='hrCol'/>
      <Form1/>
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


