const button = document.getElementById("btn");
const container = document.getElementById("container");


button.addEventListener("click", () => {
        console.log("It worked");
        createPopup();
})

function createPopup() {
    const notif = document.createElement('div');
    notif.classList.add("tacos");
    notif.innerHTML = "JAVASCRIPT PROGRESSION";

    container.appendChild(notif);
    setTimeout(function() {
        notif.remove();
      }, 3000);
}