class MobileMenu_ES6 {
    constructor() {
        this.menuIcon = document.querySelector(".navbar__menu-icon");
        this.brandImg = document.querySelector(".navbar__brand-img");
        // this.menuContainer = document.querySelector(".navbar__menu-container");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
        this.brandImg.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {
        console.log("The Menu Icon was clicked!");
    }
}

// export default MobileMenu_ES6;