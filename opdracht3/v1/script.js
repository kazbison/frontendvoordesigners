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


        //creëert plaatje + de source in de article
        var createImage = document.createElement('img');
        createArticle.appendChild(createImage);
        createImage.src = myJson[i].cover;


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


    }

}
