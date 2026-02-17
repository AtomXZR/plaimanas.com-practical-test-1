(() => {
    const faqContainerElements = document.querySelectorAll(".sect.faq > .faq-container > .container-1");

    /** @type {Map<string, HTMLDivElement>} */
    const faqContainers = new Map()

    for (const e of faqContainerElements) {
        e.classList.add("hidden");

        const group = e.getAttribute("data-group")
        if (!group) {
            continue
        }

        faqContainers.set(group, e);
    }

    const selectorButtonElements = document.querySelectorAll(".sect.faq > .selector > button");
    /** @type {Map<string, HTMLButtonElement>} */
    const selectorButtons = new Map()

    for (const e of selectorButtonElements) {
        const group = e.getAttribute("data-group");
        if (!group) {
            e.classList.remove("active");
            continue;
        }

        selectorButtons.set(group, e);

        e.addEventListener("click", () => {
            if (e.classList.contains("active")) return;

            for (const [gid, btn] of selectorButtons) {
                btn.classList.remove("active")
                const cont = faqContainers.get(gid)

                if (!cont) continue;
                cont.classList.add("hidden")
            }

            const cont = faqContainers.get(group)
            if (!cont) return;
            cont.classList.remove("hidden")
            e.classList.add("active")
        });

        if (e.classList.contains("active") && faqContainers.get(group)) {
            faqContainers.get(group).classList.remove("hidden")
        }
    }
    
    //

    const accordians = document.querySelectorAll(".accordian");
    
    for (const e of accordians) {
        const head = e.querySelector(".head")
        const content = e.querySelector(".content")
        if (!head || !content) continue;

        head.addEventListener("click", () => {
            if (e.classList.contains("active")) {
                // collapse
                content.style.maxHeight = null;
                e.classList.remove("active")
                return
            }

            // expand
            content.style.maxHeight = `${content.scrollHeight}px`;
            e.classList.add("active")
        })
    }
})();