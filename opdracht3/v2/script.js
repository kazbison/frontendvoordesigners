var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";



fetch(uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
        console.log(myJson.length);
        jsonInHtml(myJson);
    });

function jsonInHtml(myJson) {


    for (i = 0; i < myJson.length; i++) {

        var createArticle = document.createElement('article');
        //selecteert de plek waar de aricle wordt gecreëerd en met appenChild geef je aan dat dit een child wordt van de plek
        document.querySelector('main section').appendChild(createArticle);


        /*   Alle content in overzicht   */

        //creëert video tag + de source in de video tag
        var createVideo = document.createElement('video');
        createArticle.appendChild(createVideo);
        createVideo.src = myJson[i].trailer;
        createVideo.setAttribute("poster", "poster");
        createVideo.onmouseover = function () {
            this.play();
        };
        // als je je muis van een afbeelding af haalt komt de afbeelding terug
        createVideo.onmouseout = function () {
            this.pause();
        };


        //creëert img tag + de source in de img tag
        var createImage = document.createElement('img');
        createArticle.appendChild(createImage);
        createImage.src = myJson[i].cover;
        // als je je muis boven een afbeeldingen houd verdwijnt de afbeelding
        createImage.onmouseover = function () {
            this.style.visibility = 'hidden';
        };
        // als je je muis van een afbeelding af haalt komt de afbeelding terug
        createImage.onmouseout = function () {
            this.style.visibility = 'visible';
        };

        //creëert titel in de article
        var createTitel = document.createElement('h2');
        createArticle.appendChild(createTitel);
        createTitel.innerHTML = myJson[i].title;

        //creëert footer in de article
        var createFooter = document.createElement('footer');
        createArticle.appendChild(createFooter);

        //creëert een p in de footer binnen de article voor de genres
        var createP = document.createElement('p');
        createFooter.appendChild(createP);
        createP.innerHTML = myJson[i].genres;

        //creëert een p in de footer binnen de article voor de rating
        var createP2 = document.createElement('p');
        createFooter.appendChild(createP2);
        createP2.innerHTML = myJson[i].reviews[i].score;


        /*   Alle content die getoond wordt als op de article wordt geklikt en het hierdoor de class "show_details" heeft gekregen   */


    }
}

//function isDramaFilm(value) {
//
//
//    return value === "drama";
//
//
//}

//button.addEventListener("click", function (value) {
//
//    var filtered = myJson.filter(isDramaFilm);
//
//}, false);




//article.addEventListener("mouseover", function () {
//
//    /*   Bron: https://codeburst.io/learn-understand-javascripts-filter-function-bde87bce206   */
//    let cities = data.filter(val => {
//        return val.population > 500000000;
//    });
//
//
//
//}, false);
