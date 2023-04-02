export default function initAnimationScroll() {
    const target = document.querySelectorAll('[data-anime]')
    const lis = document.querySelectorAll('#menu li')
    const animationClass = 'animate'
    const active = 'active'



    function animeScroll() {
        const windowTop = window.pageYOffset + ((window.innerHeight) * 3 / 4);      
        target.forEach(function(element, index) {
            if ((windowTop) > element.offsetTop) {
                element.classList.add(animationClass)
            } else {
                element.classList.remove(animationClass)
            }
        })        
    }

    window.addEventListener('scroll', function() {
        animeScroll();
    })
}