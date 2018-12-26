function sidebarFunction(){
  let sidebar = document.querySelector('#left');
  if(sidebar.style.width === '0' || sidebar.style.width === '0%'){
    sidebar.style.width ='75%';
    sidebar.style.background = '#22333d';
  }
  else{
    sidebar.style.width ='0%';
    sidebar.style.background = 'transparent';
  }
}
