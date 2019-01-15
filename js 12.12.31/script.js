/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var genreItems = document.getElementById("genreShow");
var verhaalduurItems = document.getElementById("verhaalduurShow");
var genre = document.getElementById('genre');
var verhaalduur = document.getElementById('verhaalduur');


function genreZien(){
  genreItems.classList.toggle('hide');
  verhaalduurItems.classList.add('hide');

  if (verhaalduur.classList.contains('active')){
      verhaalduur.classList.remove('active');
      verhaalduurItems.classList.remove('animatie');
      genreItems.classList.remove('animatie');
      genre.classList.add('active');
  } else if(genre.classList.contains('active')){
    genre.classList.remove('active');
    genreItems.classList.add('animatie');
  }else {
    genre.classList.add('active');
    genreItems.classList.add('animatie');
  }
}

genre.addEventListener('click', genreZien);

function verhaalduurZien(){
  verhaalduurItems.classList.toggle('hide');
  genreItems.classList.add('hide');

  if (genre.classList.contains('active')){
      genre.classList.remove('active');
      genreItems.classList.remove('animatie');
      verhaalduurItems.classList.remove('animatie');
      verhaalduur.classList.add('active');
  }else if(verhaalduur.classList.contains('active')){
    verhaalduur.classList.remove('active');
    verhaalduurItems.classList.add('animatie');
  }else{
    verhaalduur.classList.add('active');
    verhaalduurItems.classList.add('animatie');
  }
}

verhaalduur.addEventListener('click', verhaalduurZien);


function scrollDown(event){
  var navbar = document.querySelector('nav');
  var navbarHeight = parseInt(window.getComputedStyle(navbar).height, 10);
  console.log(navbarHeight);
  var scrollHeight = document.querySelector(event.target.hash).offsetTop - navbarHeight - 10;
  console.log(scrollHeight);
  window.scrollTo(0, scrollHeight);
  event.preventDefault();
}

document.getElementById('scroll').addEventListener("click", scrollDown);









/*var scrollKnop = document.getElementById('scroll');
var scroller = document.getElementById('scroller');
var transition = 'top .8s cubic-bezier(0.77, 0, 0.175, 1)';
body.style.transition = transition;

function scrollDown (e){
  self = e.target.parentNode;
  var offset = self.getBoundingClientRect();
  var scroll = self.offsetTop;
  scroller.style.top = (-offset.height-offset.top) + 'px';
}

scrollKnop.addEventListener('click', scroll);
*/

/*
function genreZien(){

var genre = document.getElementById("genre");
var genreItems = document.getElementById("genreShow");
var verhaalduur = document.getElementById("verhaalduur");
var verhaalduurItems = document.getElementById("verhaalduurShow");


if (genre.checked == true) {
  genreItems.style.display = "block";
  verhaalduur.checked = false;

}
// else if(genre.checked == false){
//    genreItems.style.display = "none";}
else if(verhaalduur.checked == true){
  genre.checked = false;
  verhaalduurItems.style.display = "block";
} else {

}
}
document.addEventListener('click', genreZien);
*/
