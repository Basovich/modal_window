// assets
import './assets/polyffils/polyfills-closest';
import './assets/polyffils/polyfills-customevent';
import './assets/libs/animation_stopper.min.js';
import './assets/libs/scroll_locker';
import 'core-js/stable/dom-collections/for-each';
import 'core-js/stable/object/assign';

// main function
import {Modal} from './components/modal/Modal';


// Init Functions
window.addEventListener('load', onLoadMain);

function onLoadMain() {
    initAnimationStopper();

    const modal = new Modal({
        isOpen: (modal, attr) => {          
            // console.log(attr);
            console.log(modal);
        },
        isClose: (modal) => { 
            console.log(modal);
        }
    })    
}
