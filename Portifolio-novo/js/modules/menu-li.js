export default function initMenuLi() {
    const lis = document.querySelectorAll('#menu li')

    const activeClass = () => {
        lis.forEach((li) => {                
            li.classList.remove('active') 
        })
    }
    lis.forEach((li) => {
        li.addEventListener('click', () => {
            activeClass()
            li.classList.add('active')               
        })   
    })
}