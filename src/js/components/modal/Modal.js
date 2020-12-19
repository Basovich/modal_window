import { getTarget } from '../../helper-function/get-target';

export class Modal {
    constructor(options) {
        let defaultOptions = {
            isOpen: () => {},
            isClose: () => {}
        }      
        this.options = Object.assign(defaultOptions, options);
        this.isOpen = false;    
        this.isClose = false;
        this.modalWrap = document.querySelector('[data-modal-wrap]');
        this.events();    
    }

    events() {
        document.addEventListener('click', (event) => {
            // Open
            if (getTarget(event, '[data-open-modal]')) {
                const btn = getTarget(event, '[data-open-modal]');             
                const attr = btn.getAttribute('data-open-modal');
                this.open(attr);
                return;
            }

            // Close
            if (getTarget(event, '[data-close-modal]')) {
                console.log(this);
                this.close();
                return;
            }             
        });

        // Close
        this.modalWrap.addEventListener('click', (event) => {
            if (!event.target.closest('[data-modal]') ) {                
                this.close();
            }
        });

        // Close - ESC
        document.addEventListener('keydown', (evt) => {
            evt = evt || window.e;
            let isEscape = false;

            if ("key" in evt) {
                isEscape = (evt.key === "Escape" || evt.key === "Esc");
            } else {
                isEscape = (evt.keyCode === 27);
            }

            if (isEscape) {
                this.close();
            }
        });
    }

    open(attr) {          
        const thisModal = document.querySelector(`[${attr}]`); 
        const allModals = document.querySelectorAll('[data-modal]');
        
        allModals.forEach((modal) => {
            modal.classList.remove('is-visible-modal');
        });

        this.modalWrap.classList.add('is-visible-modal');
        thisModal.classList.add('is-visible-modal');
        this.isOpen = true;
        this.isClose = false;
        this.options.isOpen(this, attr);

        if(thisModal.clientHeight < window.innerHeight) {
            this.modalWrap.classList.add('is-centered-modal');
        }       

        disableScroll();       
    }

    close() {
        const allModals = document.querySelectorAll('[data-modal]');

        this.modalWrap.classList.remove('is-visible-modal');
        this.modalWrap.classList.remove('is-centered-modal');
        this.isOpen = false;
        this.isClose = true;        
        this.options.isClose(this);

        allModals.forEach((modal) => {
            modal.classList.remove('is-visible-modal');           
        });

        enableScroll();
    }
}
