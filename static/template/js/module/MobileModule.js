export default function MobileModule() {

    console.log("window.location.pathname", window.location.pathname)
    const path = window.location.pathname
    // const pathOld = localStorage.getItem('path')
    // if(path == pathOld) return
    // localStorage.setItem('path', path)

    const count = localStorage.getItem('count')
    console.log('count', count)
    if(count && path != '/') {
        localStorage.setItem('count', Number(count) + 1)
    }
    const count_2 = localStorage.getItem('count')
    if(count && Number(count_2) == 2 && path != '/') {
        localStorage.removeItem('count')
        return
    }
    if(!count && path != '/') {
        localStorage.setItem('count', 1)
    }

    const burgerBtn = document.getElementById("hamburger");

    const mobile = document.querySelector(".mobile");
    const mobileOverLay = document.querySelector(".mobile-overlay");
    const body = document.getElementsByTagName("body")[0];
    const header = document.querySelector(".header");
    const mobileClose = document.querySelector(".mobile-close");

    let isOpen = false;
    if (burgerBtn) {
        burgerBtn.addEventListener("click", () => {
            isOpen = !isOpen;
            if (isOpen) {
                burgerBtn.classList.add("active");
                mobile.classList.add("open");
                mobileOverLay.classList.add("open");
                body.style.overflowY = "hidden";
            } else {
                burgerBtn.classList.remove("active");
                mobile.classList.remove("open");
                mobileOverLay.classList.remove("open");
                body.style.overflowY = "scroll";
            }
        });
    }
    if (mobileClose) {
        mobileClose.addEventListener("click", function() {
            isOpen = false;
            burgerBtn.classList.remove("active");
            mobile.classList.remove("open");
            mobileOverLay.classList.remove("open");
            body.style.overflowY = "scroll";
        });
    }
    if (mobileOverLay) {
        mobileOverLay.addEventListener("click", function() {
            isOpen = false;
            burgerBtn.classList.remove("active");
            mobile.classList.remove("open");
            mobileOverLay.classList.remove("open");
            header.classList.remove("sticky");
            body.style.overflowY = "scroll";
        });
    }
    const menuNavs = document.querySelectorAll(".header .menu-nav");
    if (menuNavs) {
        menuNavs.forEach((item) => {
            const menuLinks = item.querySelectorAll(".menu-item.dropdown a");
            menuLinks.forEach((item) => {
                const contentOld = item.innerHTML;
                // const contentNew = `${contentOld} <i class="fas fa-angle-down"></i>`;
                // item.innerHTML = contentNew;
            });
        });
    }
    const menuNavsMobi = document.querySelectorAll(".mobile .menu-nav");
    if (menuNavsMobi) {
        menuNavsMobi.forEach((item) => {
            const menuLinks = item.querySelectorAll(".menu-item.dropdown a");
            menuLinks.forEach((item) => {
                const contentOld = item.innerHTML;
                // const contentNew = `${contentOld} <i class="fas fa-angle-down"></i>`;
                // item.innerHTML = contentNew;
            });
        });
    }
    const menuNavsFooter = document.querySelectorAll(".footer .menu-list");
    if (menuNavsFooter) {
        menuNavsFooter.forEach((item) => {
            const menuLinks = item.querySelectorAll(".menu-item a");
            menuLinks.forEach((item) => {
                const contentOld = item.innerHTML;
                // const contentNew = `<i class="fas fa-caret-right"></i> ${contentOld}`;
                // item.innerHTML = contentNew;
            });
        });
    }
    const arrowIcon = document.querySelectorAll(
        ".mobile-nav .menu-list .menu-item a i"
    );
    console.log('arrowIcon', arrowIcon)
    if (arrowIcon) {
        arrowIcon.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                console.log('item', item)
                const menuListsMobi = item.parentElement.parentElement.parentElement.querySelectorAll(".menu-list")
                console.log('menuListsMobi', menuListsMobi)
                menuListsMobi.forEach(item => {
                    $(item).slideUp();
                    console.log("____co____")
                })
                const menu =
                    item.parentElement.parentElement.querySelectorAll(".menu-list")[0];
                console.log('menu', menu.style.display)
                if (menu.style.display == "none" || menu.style.display == "") {
                    $(menu).slideDown();
                    console.log("____co____1____")
                } else {
                    $(menu).slideUp();
                    console.log("____co____2____")
                }
                $(item.parentElement.parentElement).toggleClass("active");
            });
        });
    }
}