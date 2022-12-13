// Dark Mode

const night = document.getElementById("dayNight");
const body = document.querySelector('body');
night.onclick = () => {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    
};


// Light Mode

const day = document.getElementById("day");
day.onclick = () => {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    
};