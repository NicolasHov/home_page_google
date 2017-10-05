$(document).ready(function(){

  // bouton d'affichage de la page
  $("#button-initialize").show();
  $('section').hide();

  $("#button-initialize").click(function(){
    // fadeIn "n'existe pas.." $("#button-initialize").fadeIn();
    // $("#button-initialize").fadeIn("slow");
    // $("#button-initialize").fadeIn(3000);
    $("#button-initialize").hide();
    $('section').show();
  });

  $("#generateur").click(function(){
    // window.location.replace("/generateur_grille.html");
    window.location.href = "generateur_grille.html";
  });
})
