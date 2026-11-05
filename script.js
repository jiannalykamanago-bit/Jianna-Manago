
function toggleMode(){
    let body = document.body;
    let btn = document.getElementById("modeBtn");
    
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){
        btn.innerText = "Light Mode";
    } else {
        btn.innerText = "Dark Mode";
    }
}