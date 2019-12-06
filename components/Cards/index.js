// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const articles = Object.values(response.data.articles);
        articles.forEach(e => {
            e.forEach(i => {
                document.querySelector('.cards-container').appendChild(createCard(i));
            })
        });
    })
    .catch(error => {
        console.log("The data was not returned", error);
    });

const createCard = article => {
    const card = document.createElement('div'),
        articleHeadline = document.createElement('div'),
        articleAuthor = document.createElement('div'),
        imageContainer = document.createElement('div'),
        authorImage = document.createElement('img'),
        authorName = document.createElement('span');

    card.classList.add('card');
    articleHeadline.classList.add('headline');
    articleAuthor.classList.add('author');
    imageContainer.classList.add('img-container');

    articleHeadline.textContent = article.headline;
    authorImage.src = article.authorPhoto;
    authorName.textContent = `By: ${article.authorName}`;

    card.appendChild(articleHeadline);
    card.appendChild(articleAuthor);
    articleAuthor.appendChild(imageContainer);
    imageContainer.appendChild(authorImage);
    articleAuthor.appendChild(authorName);

    return card;
}