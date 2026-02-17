(() => {
    const inputTextElements = document.querySelectorAll(".sect.inq > .container-2 > .form > .sect > .text-input")
    
    for(const e of inputTextElements) {
        const input = e.querySelector("input")
        if (!input) continue;

        const update = () => {
            if (input.value !== "" || document.activeElement === input) {
                e.classList.add("filled")
                return
            }

            e.classList.remove("filled")
            return
        }

        input.addEventListener("input", () => update())
        input.addEventListener("focus", () => update())
        input.addEventListener("blur", () => update())
    }

    //
    //
    //

    const inputDropdownElements = document.querySelectorAll(".sect.inq > .container-2 > .form > .sect > .dropdown-input")
    
    for (const e of inputDropdownElements) {
        const tgl = e.querySelector(".toggle > svg")
        if (!tgl) continue;

        tgl.addEventListener("click", () => {
            e.classList.toggle("active")
        })
    }
})();