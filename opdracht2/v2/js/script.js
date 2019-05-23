/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

/*
Als ik op url met een id "1" of "geen id" ben ga dan naar id "2" d.m.v. drukken op "keycode 75"(K) en "keycode 39" (->)
Als ik op url met een id "2" ben ga dan naar id "3" d.m.v. drukken op "keycode 75"(K) en "keycode 39" (->) en naar id "1" d.m.v. drukken op "keycode 74"(J) en "keycode 37" (<-)
etc.
etc.
Als ik op url met een id "5" ben ga dan naar id "4" d.m.v. drukken op "keycode 74"(J) en "keycode 37" (<-)
*/


window.addEventListener("keydown", function (event) {

    var huidigeUrl = (window.location);
    console.log(huidigeUrl);
    var urlId = huidigeUrl.hash;
    console.log(urlId);

    if (event.keyCode == 74 || event.keyCode == 37) {

        vorigeSectie(huidigeUrl);


    } else if (event.keyCode == 75 || event.keyCode == 39) {

        volgendeSectie(huidigeUrl);

    }
}, true);

function vorigeSectie(huidigeUrl) {
    if (huidigeUrl.hash.includes("#sectie2")) {

            //move to id "#1"
            document.location.href = "#sectie1";

        } else if (huidigeUrl.hash.includes("#sectie3")) {

            //move to id "#2"
            document.location.href = "#sectie2";

        } else if (huidigeUrl.hash.includes("#sectie4")) {

            //move to id "#3"
            document.location.href = "#sectie3";

        } else if (huidigeUrl.hash.includes("#sectie5")) {

            //move to id "#4"
            document.location.href = "#sectie4";

        }
}

function volgendeSectie(huidigeUrl) {

    if (huidigeUrl.hash.includes("#sectie1") || huidigeUrl.hash.includes(undefined)) {

        //move to id "#2"
        document.location.href = "#sectie2";

    } else if (huidigeUrl.hash.includes("#sectie2")) {

        //move to id "#3"
        document.location.href = "#sectie3";

    } else if (huidigeUrl.hash.includes("#sectie3")) {

        //move to id "#4"
        document.location.href = "#sectie4";

    } else if (huidigeUrl.hash.includes("#sectie4")) {

        //move to id "#5"
        document.location.href = "#sectie5";

    }

}
