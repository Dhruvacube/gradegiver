/*Made By Dhruva Shaw
  All Rights Reserved
  It shall not be copied without prior permission of the owner of the website. */


// Get the modal
var modal = document.getElementById('id01');



/* For Scroll to top button (Javascript) */
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
                                  if (event.target == modal) {
                                                               modal.style.display = "none";
                                                             }
                                 }

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
                           if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                           document.getElementById("myBtn").style.display = "block";
                                                                                                        } else {
                                                                                                                document.getElementById("myBtn").style.display = "none";
                                                                                                                }
                           }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
                        document.body.scrollTop = 0; // For Safari
                        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                       }

