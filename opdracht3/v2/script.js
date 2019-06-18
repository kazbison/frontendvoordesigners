var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";



function jsonInHtml(myJson) {


    // de articles in de section
    for (i = 0; i < myJson.length; i++) {



        var createArticle = document.createElement('article');
        var createVideo = document.createElement('video');
        var createImage = document.createElement('img');
        var createTitel = document.createElement('h2');
        var createGenres = document.createElement('p');
        var createReviewScore = document.createElement('p');
        var createActors = document.createElement('p');



        // locaties waar de HTML aan wordt gemaakt
        document.querySelector('main section').appendChild(createArticle);
        createArticle.appendChild(createVideo);
        createArticle.appendChild(createImage);
        createArticle.appendChild(createTitel);
        createArticle.appendChild(createGenres);
        createArticle.appendChild(createReviewScore);
        createArticle.appendChild(createReviewScore);
        createArticle.appendChild(createActors);


        /* interactie 1 */

        // haalt afbeelding weg zodra je met je muis boven de article bent en start de trailer
        createArticle.onmouseover = function () {
            // console.log(this.childNodes);
            this.childNodes[1].style.visibility = 'hidden';
            this.childNodes[0].play();
        };
        // zorgt ervoor dat afbeelding weer terug komt zodra je muis niet meer boven de article is en de trailer pauzeert
        createArticle.onmouseout = function () {
            this.childNodes[1].style.visibility = 'visible';
            this.childNodes[0].pause();
        };



        // zet JSON in de aangemaakte HTML
        createVideo.src = myJson[i].trailer;
        createImage.src = myJson[i].cover;
        createTitel.innerHTML = myJson[i].title;
        createGenres.innerHTML = myJson[i].genres;
        createReviewScore.innerHTML = myJson[i].reviews[i].score;



        // Acteurs
        var namesOfActors = [];
        for (var a = 0; a < myJson[i].actors.length; a++) {
            namesOfActors.push(myJson[i].actors[a].actor_name);
            //            console.log(myJson[i].actors[a].actor_name);
        }
        var string = namesOfActors.join(',  ');
        createActors.innerHTML = (namesOfActors, string);


        /* interactie 2 */

        // opent de trailer fullscreen
        createArticle.childNodes[0].onclick = function () {
            this.requestFullscreen();
        };
    }
}



// themesongs achter knoppen
document.addEventListener('keydown', function (e) {

    var batmanThemeSong = new Audio("./sounds/batman.mp3");
    var godfather = new Audio("./sounds/godfather.mp3");

    if (e.keyCode == 66) {

        batmanThemeSong.play();

    } else if (e.keyCode == 71) {

        godfather.play();

    }
});



// haalt JSON op
fetch(uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
        console.log(myJson.length);
        jsonInHtml(myJson);
    });
