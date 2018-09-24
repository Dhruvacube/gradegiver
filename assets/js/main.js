/*Made By Dhruva Shaw
  All Rights Reserved
  It shall not be copied without prior permission of the owner of the website. */


// Get the modal
var modal = document.getElementById('id01');




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
                                  if (event.target == modal) {
                                                               modal.style.display = "none";
                                                             }
                                 }
/* For Scroll to top button (Javascript) */
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
                           if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                           document.getElementById("top").style.display = "block";
                                                                                                        } else {
                                                                                                                document.getElementById("top").style.display = "none";
                                                                                                                }
                           }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
                        document.body.scrollTop = 0; // For Safari
                        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                       }



//
//Tabs for Youtube Video Templates

function gradeDisplayer(evt, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="pc" and click on it
document.getElementById("pc").click()

function sourceaccess(event){
if (event.ctrlKey){
	alert("Sorry!!!! Access Denied!!!!!");
}
if (event.ctrlKey ++ event.key == "u" ){
	alert("Sorry!!!! Access Denied!!!!!");
}
}