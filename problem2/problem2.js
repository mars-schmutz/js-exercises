const programs = [
    "Web Development",
    "IT",
    "Digital Media Design",
    "App Development",
    "Drafting and Design",
];

const list = document.getElementById("programs");
for (let i = 0; i < programs.length; i++) {
    let li = document.createElement("li");
    li.innerText = programs[0];
    list.appendChild(li);
}
