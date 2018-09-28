// Filip Manzi 2017

function showMenu() {
    if(document.getElementById('menu').style.display = 'none') {
        document.getElementById('menu').style.display='block';
    } else if (document.getElementById('menu').style.display = 'block') {
        document.getElementById('menu').style.display='none';
    }
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}