import { Component } from 'react';
import ReactDOM from 'react-dom';

// PORTAL offers a way to access a new 
// root Div when you want to display 
// something at a low z-index.

// access the div ID
const portalRoot = document.getElementById('portal');

export default class Portal extends Component {

  // create a new el in constructor
  constructor() {
    super();
    this.el = document.createElement('div');
  }
  
  // add element when component mounts
  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  }

  // remove when it unmounts
  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  }
 
  // render whatever appears as children of
  // the portal at the new div element
  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}