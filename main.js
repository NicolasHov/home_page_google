$(document).ready(function(){


// initialisation
  // show button + hide body
  $("#button-initialize").show();
  $('section').hide();
  $("footer").hide();

  $("#button-initialize").click(function(){
    // fadeIn "n'existe pas.." $("#button-initialize").fadeIn();
    // $("#button-initialize").fadeIn("slow");
    // $("#button-initialize").fadeIn(3000);
    $("#button-initialize").hide();
    $('section').show();
    $("footer").show();
  });

// TODO :
// store les mots clefs pour lancer des recherches
// localStorage.mots_clefs = mots_clefs;

// affiche le resultats dans un alert
  // $("#recherche").click(function(){
  //   // $("#mots_clefs").val(localStorage.mots_clefs);
  //   alert("Value: " + mots_clefs);
  // })


  // récupéré sur https://www.alsacreations.com/article/lire/1402-web-storage-localstorage-sessionstorage.html
  // Détection du support

  if(typeof sessionStorage!='undefined') {
    if("mots_clefs" in sessionStorage) {
      alert("Message récupéré");
      $("mots_clefs").value = sessionStorage.getItem("mots_clefs");
    }
  } else {
    alert("sessionStorage n'est pas supporté");
  }

  $("#recherche").click(function(){
    var mots_clefs = sessionStorage.getItem("mots_clefs")
    alert("Value: " + mots_clefs);
  });
})


// afficher popup au bout de 10sec
// for (i=0; i<10; i++) {
//   wait(1000);

// alert
// $("html").onclick = function() {
//     alert('Aïe, arrêtez de cliquer !!');
// }
