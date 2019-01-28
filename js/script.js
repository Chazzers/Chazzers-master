/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var genreItems = document.getElementById("genreShow");
var verhaalduurItems = document.getElementById("verhaalduurShow");
var genre = document.getElementById('genre');
var verhaalduur = document.getElementById('verhaalduur');
var zoekKnop = document.getElementById('zoekknop');
var zoekForm = document.getElementById('zoeken');
var zoekInput = document.getElementById('zoek-input');
var spannend = document.getElementById('spannend');
var plaatjes;
plaatjes = ["",
  "images/link_van_verhaal.png",
  "images/alzheimer.jpg",
  "images/beroemd.png",
  "images/charliesheen.jpg",
  "images/doof.jpg",
  "images/droom.png",
  "images/ericlucassen.jpg",
  "images/ericlucassen.png",
  "images/interview.jpg",
  "images/johancruijff.jpg",
  "images/lepra.jpg",
  "images/martinbril.jpg",
  "images/onomatopee.jpg",
  "images/ruudlubbers.jpeg",
  "images/stijloefeningen.jpg",
  "images/verliefd.png",
  "images/voetbalanalisten.jpg"
];
var a = document.querySelectorAll(".verhalen");
var plaatjesArray = Array.prototype.slice.call(a);
var i = 0;
var verhaal = document.querySelectorAll(".verhaal");
var verhalenArray = Array.prototype.slice.call("verhaal");
var filterText = document.getElementById('filter_txt');

function spannendeFilter(){
  if (spannend.checked == true) {
    verhaal[0].classList.toggle('remove');
    verhaal[1].classList.toggle('remove');
    verhaal[2].classList.toggle('remove');
    filterText.textContent = 'Spannende Verhalen';
  }
}

spannend.addEventListener('click', spannendeFilter);

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

function zoekInputZien(){
  zoekForm.classList.toggle('show-form');
  if (zoekForm.classList.contains('show-form')) {
    zoekInput.focus();
  }else{
    zoekInput.value='';
  }

}

zoekknop.addEventListener('click', zoekInputZien)

plaatjesArray.forEach(function(anchor) {

  if (i>=0) {
    i++
  }
  else{
    return;
  }
  anchor.style.background = "url(" + plaatjes[i] + ") no-repeat";
  anchor.style.backgroundSize = "cover";
  anchor.style.backgroundPosition = "center";
});
