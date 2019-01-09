/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

function genreZien(){
var genre = document.getElementById("genre");

var genreItems = document.getElementById("genreShow");

if (genre.checked == true) {
  genreItems.style.display = "block";
} else {
  genreItems.style.display = "none";
}
}

document.addEventListener('click', genreZien);

function verhaalduurZien(){
var verhaalduur = document.getElementById("verhaalduur");

var verhaalduurItems = document.getElementById("verhaalduurShow");

if (verhaalduur.checked == true) {
  verhaalduurItems.style.display = "block";
} else if(verhaalduur.checked == true){

}else{
  verhaalduurItems.style.display = "none";
}
}
document.addEventListener('click', verhaalduurZien);
