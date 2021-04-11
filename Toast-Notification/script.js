const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerHTML = `This challenge is crazy! <button style="outline:none;" id="remove">&times;</button>`;

    container.appendChild(notif);
    document.getElementById("remove").addEventListener("click", function() {
        notif.remove();
    });
}
