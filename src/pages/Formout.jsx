import { useState } from 'react';
import React from 'react';
import waving from "../wavingman.jpg";
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'





function HelloBtn() {

    const [click, setClick] = useState(false);



    function handleClick() {
        setClick(!click)
    }

    return (
        <div className='helloContainer'>
            <button id='helloBtn' className='helloBtn' onClick={handleClick}>Click me!</button>
            <div className={click ? '' : 'hidden'}>
                <p id='helloText'>Hello World!</p>
                <img src={waving} />
            </div>
        </div>
    );
}


// search component
function Search({ value, onChange, children }) {
    return (
        <div>
            <label htmlFor="search">{children}</label>
            <input
                id="search"
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

Bugsnag.start({
    apiKey: '670dcd473726b33987b145b074c5a9fb',
    plugins: [new BugsnagPluginReact()]
  })

  const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);

//main component
const Formout = () => {
    const [search, setSearch] = React.useState('');

    
    
    
    
    function handleChange(event) {
        try{
            var x = event.target.value;
           if (x=='y') throw "empty" ;
        } catch(e) {
            Bugsnag.notify(e);
        }
        setSearch(event.target.value);
    }

    return (
        <div id="formout">
            <h1 className="pageName neonText2">This is the form out page</h1>
            <ErrorBoundary>
                <HelloBtn />
            </ErrorBoundary>
            <div className='formout'>
                <Search value={search} onChange={handleChange}>
                    Search:
                </Search>
                <p>Searches for: {search ? search : '...'}</p>
            </div>
        </div>
    );
}



export default Formout;