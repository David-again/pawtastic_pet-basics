class MobileMenu_ES6 {
    constructor() {
        this.menuIcon = document.querySelector(".navbar__menu-icon");
        this.menuContainer = document.querySelector(".navbar__menu-container");
        this.events();
    }

    events() {
        // this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
        this.menuIcon.addEventListener("click", () => this.triggerTheMenu());
    }

    // toggleTheMenu() {
    //     console.log("The Menu Icon was clicked!");
    //     this.menuContainer.classList.toggle("navbar__menu-container--is-visible");
    //     this.menuIcon.classList.toggle("navbar__menu-icon--close-x")
    // }

    triggerTheMenu() {
        if (this.menuContainer.classList.contains("navbar__menu-container--is-visible")) {
            this.closeTheMenu();
        } else {
            this.openTheMenu();
        }
    }

    closeTheMenu() {
        console.log("Menu-close icon was clicked!");
        this.menuContainer.classList.remove("navbar__menu-container--is-visible");
        this.menuIcon.classList.remove("navbar__menu-icon--close-x");
    }

    openTheMenu() {
        console.log("The Menu was clicked-open!");
        this.menuContainer.classList.add("navbar__menu-container--is-visible");
        this.menuIcon.classList.add("navbar__menu-icon--close-x");
    }
}

export default MobileMenu_ES6;