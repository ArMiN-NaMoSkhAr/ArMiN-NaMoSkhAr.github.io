// Scroll Reveal Animation
const boxes = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        const top = box.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            box.classList.add("show");
        }
    });
});
// Remove splash screen after 5 seconds
setTimeout(() => {
    const splash = document.getElementById("splash");
    if (splash) splash.remove();
}, 5000);
