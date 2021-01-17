class MobileMenu_ES6 {
    constructor() {
        this.menuIcon = document.querySelector(".navbar__menu-icon");
        this.menuContainer = document.querySelector(".navbar__menu-container");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {
        console.log("The Menu Icon was clicked!");
        this.menuContainer.classList.toggle("navbar__menu-container--is-visible");
        this.menuIcon.classList.toggle("navbar__menu-icon--close-x")
    }
}

export default MobileMenu_ES6;