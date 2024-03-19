// PRINT SCRIPT--------------------------------------------------------------------------------------------------------------------------------------
 
function printdiv(elem) {
  var header_str = '<html><head><title>' + document.title  + '</title></head><body>';
  var footer_str = '</body></html>';
  var new_str = document.getElementById(elem).innerHTML;
  var old_str = document.body.innerHTML;
  document.body.innerHTML = header_str + new_str + footer_str;
  window.print();
  document.body.innerHTML = old_str;
  return false;
}
 
// ONLINE PAGE TABS --------------------------------------------------------------------------------------------------------------------------------------

function openDiscipline(evt, collegeName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent1" and hide them
  tabcontent = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks1" and remove the class "active1"
  tablinks = document.getElementsByClassName("tablinks1");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active1", "");
  }

  // Show the current tab, and add an "active1" class to the button that opened the tab
  document.getElementById(collegeName).style.display = "block";
  evt.currentTarget.className += " active1";
}

// DUAL/GUARANTEED ADMISSION PAGE TABS --------------------------------------------------------------------------------------------------------------------------------------

//MODAL
// // Get the modal
var modal = document.getElementById("dual-modal");

// // Get the button that opens the modal
var btn = document.getElementById("dual-button");

// // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// // When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// // When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//TOGGLE MENU
function openCriteria(evt, collegeName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent2" and hide them
  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks2" and remove the class "active2"
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active2", "");
  }

  // Show the current tab, and add an "active2" class to the button that opened the tab
  document.getElementById(collegeName).style.display = "block";
  evt.currentTarget.className += " active2";
}

// PROGRAM-TO-PROGRAM PAGE TABS --------------------------------------------------------------------------------------------------------------------------------------

function openSubject(evt, collegeName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent3" and hide them
  tabcontent = document.getElementsByClassName("tabcontent3");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks3" and remove the class "active1"
  tablinks = document.getElementsByClassName("tablinks3");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active3", "");
  }

  // Show the current tab, and add an "active3" class to the button that opened the tab
  document.getElementById(collegeName).style.display = "block";
  evt.currentTarget.className += " active3";
}


