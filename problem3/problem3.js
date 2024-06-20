function toggleVisibility() {
    let text = document.getElementByID("toggle-display");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

let btn = document.getElementById("displayBtn");
btn.addEventListener("click", toggleVisibility);
