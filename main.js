$(document).ready(function(){

// initialisation
  // show button + hide body
  $("#button-initialize").show();
  $('section').hide();
  $("footer").hide();

// TODO on button click : hide button + show body
  $("#button-initialize").click(function(){
    // $("#button-initialize").fadeIn();
    // $("#button-initialize").fadeIn("slow");
    // $("#button-initialize").fadeIn(3000);
    $("#button-initialize").hide();
    $('section').show();
    $("footer").show();

  });

// $("#mots_clefs").val(localStorage.mots_clefs);
//
//   $(window).unload(saveSettings);
//             loadSettings();
})


// afficher popup au bout de 10sec
// for (i=0; i<10; i++) {
//   wait(1000);

// alert
// $("html").onclick = function() {
//     alert('Aïe, arrêtez de cliquer !!');
// }
//
// });
