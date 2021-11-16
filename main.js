const burger = document.querySelector('.header-right > a');
burger.addEventListener('click' ,
    function() {
        const burgerButton = document.querySelector('.hamburger-menu')
        console.log(burgerButton);
        burgerButton.classList.add('active');
        
    }   
);

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click' ,
    function() {
        const burgerButton = document.querySelector('.hamburger-menu')
        console.log(burgerButton);
        burgerButton.classList.remove('active');
    }
)