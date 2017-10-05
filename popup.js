$(document).ready(function(){

// 2.Popup

// Ton site est trop bien, mais une grande entreprise de vidéos pornographiques te propose un contrat que tu ne peux
//  pas refuser : contre 250 milliards de dollars zimbabwéen, tu dois afficher une popup en plein milieu de la page
//  qui affiche "Hey le site xxxvidsxxx est trop bien. Viens dessus stp please" au bout de 10 secondes sur le site.
//  La popup peut être en alert(). Pour ceux qui sont chauds, vous pouvez utiliser une popup un peu plus moderne.


timeoutID = window.setTimeout(afficher_popup(), 10000);

function afficher_popup(){
  if (window.confirm("Hey le site xxxvidsxxx est trop bien. Viandez dessus stp please")) {
    window.open("https://thebestmotherfucking.website/","Thanks for Visiting!");
  }
}



})
