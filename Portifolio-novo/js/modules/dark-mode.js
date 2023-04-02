export default class DarkMode {
    constructor(sec, toggle, img) {
        this.sec = document.querySelector(sec);
        this.toggle = document.querySelector(toggle)
        this.img = document.querySelector(img)

        this.activeDarkMode = this.activeDarkMode.bind(this)
    }

    activeDarkMode () {
        this.sec.classList.toggle('dark')
        if (this.sec.classList.contains('dark')) this.img.src = 'img/moon.webp'
        else this.img.src = 'img/sun.webp'
    }

    addDarkModeEvents () {
        this.toggle.addEventListener('click', this.activeDarkMode)
    }

    init () {
        this.addDarkModeEvents()
        return this
    }
}