import _ from 'lodash';
import '../css/styles.css';
import MobileMenu from './Modules/MobileMenu_ES6';

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept()
}

// function myMainFunction() {
//     import {saySomething} from "./Modules/MobileMenu.js";
    
// }