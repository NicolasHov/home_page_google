$(document).ready(function(){

// 1. REDIRECTION : store les mots clefs pour lancer des recherches : la page dois te rediriger vers la recherche correspondante.
// Par exemple si tu tapes hello world et clique sur "Recherche Google", cela doit te rediriger
// sur https://www.google.fr/#q=hello+world.

  $("#recherche").click(function(){
    console.log("bouton recherche cliqué");

    // Enregistrer des données dans sessionStorage
    let mots_clefs = $("#mots_clefs").val(); // .val() ou .value
    console.log('valeur de mots clefs est ' + mots_clefs);
    window.location.href = "http://google.com/search?q=" + mots_clefs;


  });
})
