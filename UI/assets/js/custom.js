function display() {
  const form  = document.getElementById("profile-form");
  const button = document.getElementById("edit");
  let allElements = form.elements;
  for (let i = 0, l = allElements.length; i < l; i++) {
      
        allElements[i].disabled=false;
  }
  button.classList.add("hide");
}

function confirmDelete(){
  confirm('Sure you want to cancel this order?')
}