const toggle = document.getElementById("toggle");

toggle.addEventListener("change", (eh) => {
    document.body.classList.toggle("dark", eh.target.checked);
});