/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var hartje = document.querySelectorAll("svg");
var aantalHartjes = hartje.length;
var favorieten = document.querySelector("#aantal_favorieten");
var aantalFavorieten = 0;


function hoeveelFavsZijnEr() {

    aantalFavorieten = document.querySelectorAll(".toegevoegd_aan_favorieten").length;

    favorieten.textContent = ' (' + aantalFavorieten + ')';

}


for (var i = 0; i < aantalHartjes; i++) {

    hartje[i].addEventListener('click', function klik() {

        if (!this.classList.contains("niet_toegevoegd_aan_favorieten")) {

            console.log('verwijderd');

            this.classList.remove("toegevoegd_aan_favorieten");
            this.classList.add("niet_toegevoegd_aan_favorieten");

        } else {

            console.log('toegevoegd');

            this.classList.remove("niet_toegevoegd_aan_favorieten");
            this.classList.add("toegevoegd_aan_favorieten");

        }

        hoeveelFavsZijnEr();

    }, false);
}
