import React from 'react';
import './App.css';
import * as Blueprint from '@blueprintjs/core';

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



const App = () => {
  return (
    <div className="App">


      <Toggle>
        {({on, toggle}) => ( 
          // using render props children
          // no need to name the props,
          // auto-accessed as "children"
          <>
            <Blueprint.Card>
              <h5>Card Heading</h5>
              <p>Card content</p>
              <Blueprint.Button
                active={false}
                icon="refresh"
                className={Blueprint.Classes.BUTTON}
                type="button"
                intent="success"
                large={false}
                loading={false}
                minimal={true}
                onClick={toggle}
              >
                Display rest of card
              </Blueprint.Button>
              {on && <p>Bonus content</p>}

            </Blueprint.Card>
 



            
            <Portal>
              {/* {on && <h1>Hi, I'm in a portal!</h1>} */}
              {/* portal still has access
              to all component props! */}
            </Portal>
          </>
        )}
      </Toggle> 
    </div>
  );
}


export default App;
