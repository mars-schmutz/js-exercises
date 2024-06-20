const changeColor = () => {
    let color = document.getElementById("colorPicker");
    document.getElementById("container").style.backgroundColor = color;
};

let btn = document.getElementById("clickMe");
btn.addEventListener("click", changeColor);
