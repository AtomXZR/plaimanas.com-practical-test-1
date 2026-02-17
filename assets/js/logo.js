(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const logo = document.querySelector(".logo")
    const initialWidth = logo.offsetWidth
    const maxScroll = 300

    //
    //
    //
    
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY
        const scrollProgress = Math.min(scrollY / maxScroll, 1)

        //
        //
        //
        
        const newWidth = initialWidth * (1 - (scrollProgress * 0.72))
        
        logo.style.width = `${newWidth}px`
    });
})();