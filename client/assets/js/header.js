const token = localStorage.getItem('token');
const admin = localStorage.getItem('admin');
let nav = document.querySelector('#navbar');
if(token){
  let profileLi = createNode('li');
  let profileLink = createNode('a');
  let profileFont = createNode('i');
  let profileLinkText = document.createTextNode('profile ');
  profileFont.setAttribute('class', 'fa fa-user');
  profileLink.setAttribute('href', './profile.html');

  append(profileLink, profileLinkText);
  append(profileLink, profileFont);
  append(profileLi, profileLink);
  append(nav, profileLi);

  if(admin === 'true'){
    let adminLi = createNode('li');
    let adminLink = createNode('a');
    let adminFont = createNode('i');
    let adminLinkText = document.createTextNode('admin ');
    adminFont.setAttribute('class', 'fa fa-lock');
    adminLink.setAttribute('href', './admin.html');
    
    append(adminLink, adminLinkText);
    append(adminLink, adminFont);
    append(adminLi, adminLink);
    append(nav, adminLi);
    }
}
else{
  nav.innerHTML += `
                <li ><a href="./signin.html">Login</a> </li>  
                <li ><a href="./signup.html">Register</a></li>`;
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}