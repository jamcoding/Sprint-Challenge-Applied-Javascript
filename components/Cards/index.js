// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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

const axiosPromiseCard = axios.get('https://lambda-times-backend.herokuapp.com/articles');
const entryHTMLCards = document.querySelector('.cards-container');

// console.log(axiosPromiseCard);
console.log(entryHTMLCards);

axiosPromiseCard.then(cardResponse => {
    const articleData = Object.values(cardResponse.data.articles);
    // console.log(articleData);

    articleData.forEach(cards => {
        cards.forEach(data => {
            entryHTMLCards.appendChild(createCard(data));
        })
        // console.log(cards);
    })
})
.catch(cardError => {
    console.log('Something is wrong with your card', cardError);
})

function createCard(cardData) {

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    headline.textContent = `${cardData.headline}`;
    img.src = cardData.authorPhoto;
    span.textContent = `By ${cardData.authorName}`;

    card.appendChild(headline);
    card.appendChild(author);   
    author.appendChild(imgContainer);
    author.appendChild(span);
    imgContainer.appendChild(img);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    return card;
}