/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var hartje = document.querySelectorAll("svg");
var aantalHartjes = hartje.length;
console.log(aantalHartjes);

var favorieten = document.querySelector("#aantal_favorieten");
var aantalFavorieten = document.querySelector(".toegevoegd_aan_favorieten");
aantalFavorieten = 0;




function klik() {

    //console.log(this.src);

    if (!this.classList.contains("niet_toegevoegd_aan_favorieten")) {
        console.log('verwijderd');
        this.classList.remove("toegevoegd_aan_favorieten");
        this.classList.add("niet_toegevoegd_aan_favorieten");

    } else {
        console.log('toegevoegd');
        this.classList.remove("niet_toegevoegd_aan_favorieten");
        this.classList.add("toegevoegd_aan_favorieten");

    }
}



for (var i = 0; i < aantalHartjes; i++) {
    hartje[i].addEventListener('click', klik, false);
}

favorieten.textContent = ' (' + aantalFavorieten + ')';
