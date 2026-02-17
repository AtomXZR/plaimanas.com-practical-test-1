(() => {
    const root = document.querySelector(".root");
    const navContent = root.querySelector(".nav > .navbar > .nav-container");

    if (!root | !navContent) return;

    root.querySelector(".nav > .navbar > .nav-toggle")?.addEventListener("click", () => {
        if (root.classList.contains("nav-active")) {
            root.classList.remove("nav-active");
            navContent.classList.remove("active");
            
            return;
        }

        root.classList.add("nav-active");
        navContent.classList.add("active");
    })
})();