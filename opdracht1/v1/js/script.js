/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var hartje = document.querySelectorAll(".hartje");
var aantalHartjes = hartje.length;




function klik() {

    //console.log(this.src);

    if (!this.src.includes("niet_toegevoegd.svg")) {
        console.log('verwijderd');
        this.src = './images/niet_toegevoegd.svg';
        //        hartje.removeClass("favoriet");

    } else {
        console.log('toegevoegd');
        this.src = './images/toegevoegd.svg';
        //        hartje.addClass("favoriet");

    }
}



for (var i = 0; i < aantalHartjes; i++) {
    hartje[i].addEventListener('click', klik, false);
}
