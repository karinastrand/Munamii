
//Visar och släcker dropdown menyn i shopknappen
function shopDropdown() {
    document.getElementById("dropdownList").classList.toggle("show");
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
  //Visar meddelande när man klickar på köpknappen i kakinforutorna
  function addToCart(text1,text2)
  {
    alert(text1+", price "+text2 +" was added to your cart");
  }