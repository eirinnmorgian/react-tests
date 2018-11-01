import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './ToggleRPC';
import Portal from './portal';

// output a fn via render props
// arrow to PARENTH not curly (implicit return)
// 1. call render props, has access to component state
// 2. get that state from object variable (on, toggle)
// 3. fn definition in prop side must have same object key var names
//    as fn call in component side
// 4. component is reusable: simply change the 
//    text and logic


class App extends Component {
  render() { // render method is always required
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Toggle>
          {({on, toggle}) => ( 
            // using render props children
            // no need to name the props,
            // auto-accessed as "children"
            <Fragment>
              {on && <h1>Show Me</h1>}
              <button onClick={toggle}>Show/Hide</button>
              
              <Portal>
                {on && <h1>Hi, I'm in a portal!</h1>}
                {/* portal still has access
                to all component props! */}
              </Portal>
            </Fragment>
          )}
        </Toggle> 
      </div>
    );
  }
}

export default App;
