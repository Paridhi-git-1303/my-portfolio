const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.textContent = "Toggle Dark Mode";
    } else {
        themeBtn.textContent = "Toggle Light Mode";
    }
});