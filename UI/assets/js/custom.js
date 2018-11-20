function display() {
  const form  = document.getElementById("profile-form");
  const button = document.getElementById("edit");
  let allElements = form.elements;
  for (let i = 0, l = allElements.length; i < l; i++) {
      
        allElements[i].disabled=false;
  }
  button.classList.add("hide");
}

// Get the modal
function modalBox(){
    
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    console.log(btn);
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
