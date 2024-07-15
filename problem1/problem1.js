const btn = document.getElementById("change-btn");
const p = document.getElementById("text");

btn.addEventListener("click", () => {
    p.innerText = "I've been changed!";
});
