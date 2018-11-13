function display() {
const form  = document.getElementById("profile-form");
let allElements = form.elements;
for (let i = 0, l = allElements.length; i < l; i++) {
    
       allElements[i].disabled=false;
}
}