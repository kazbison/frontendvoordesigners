/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var hartjes = document.querySelectorAll(".hartje");

var favorieten = document.querySelector("#aantal_favorieten");
var aantalFavorieten = 0;




favorieten.textContent = ' (' + aantalFavorieten + ')';



//hartjes.src = "./images/toegevoegde_film.svg";

console.log(hartjes.length);

//hartjes.classList.add("toegevoegd_aan_favorieten");


//function toevoegenOfVerwijderen() {
//
//
//    if (hartjes.classList.contains("toegevoegd_aan_favorieten")) {
//
//        hartjes.classList.remove("toegevoegd_aan_favorieten");
//
//    } else {
//        hartjes.classList.add("toegevoegd_aan_favorieten");
//    }
//
//}
//
//hartjes.addEventListener('click', toevoegenOfVerwijderen, false);

hartjes.addEventListener('click', function () {
    hartjes.src = "../images/toegevoegde_film.svg";
    //    hartjes.classList.add("toegevoegd_aan_favorieten");
}, false);
