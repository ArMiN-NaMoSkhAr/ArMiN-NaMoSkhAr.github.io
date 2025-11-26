// ===========================
//  Scroll Reveal Animation
// ===========================

const boxes = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        const top = box.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            box.classList.add("show");
        }
    });
});
