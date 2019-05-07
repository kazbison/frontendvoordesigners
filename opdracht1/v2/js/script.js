/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var hartje = document.querySelectorAll("svg");
var aantalHartjes = hartje.length;
console.log(aantalHartjes);

var favorieten = document.querySelector("#aantal_favorieten");

//var favorieten = document.getElementByld("aantal_favorieten")
//var aantalFavorieten = 0;
var aantalFavorieten = document.querySelectorAll(".toegevoegd_aan_favorieten").length;


//function updateAantalFavorieten(plusOfMinFavoriet) {
//
//    aantalFavorieten += plusOfMinFavoriet; // staat ook wel gelijk aan score = score + punten
//
//}



for (var i = 0; i < aantalHartjes; i++) {

    hartje[i].addEventListener('click', function klik() {

        //console.log(this.src);

        if (!this.classList.contains("niet_toegevoegd_aan_favorieten")) {

            console.log('verwijderd');

            this.classList.remove("toegevoegd_aan_favorieten");
            this.classList.add("niet_toegevoegd_aan_favorieten");

            //updateAantalFavorieten(-1);

        } else {

            console.log('toegevoegd');

            this.classList.remove("niet_toegevoegd_aan_favorieten");
            this.classList.add("toegevoegd_aan_favorieten");

            //updateAantalFavorieten(1);

        }
    }, false);
}




favorieten.textContent = ' (' + aantalFavorieten + ')';
console.log(aantalFavorieten);
