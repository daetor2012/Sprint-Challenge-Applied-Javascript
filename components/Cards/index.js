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
function getArticles() {
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
      .then(r => {
        console.log(r);
        makeArticles(r.data.articles);
      })
      .catch(e => {
        console.log(e);
      });
  }
  
  function makeArticles(articles) {
    console.log(articles);
    let container = document.querySelector('.cards-container');
    for(let category in articles) {
      console.log(category);
      for(let article of articles[category]) {
        console.log(article);
        let card = document.createElement('div');
        card.className = 'card';
        let headline = document.createElement('div');
        headline.className = 'headline';
        headline.textContent = article.headline;
        let author = document.createElement('div');
        author.className = 'author';
        let imageContainer = document.createElement('div');
        imageContainer.className = 'img-container';
        let image = document.createElement('img');
        image.src = article.authorPhoto;
        imageContainer.appendChild(image);
        let name = document.createElement('span');
        name.textContent = article.authorName;
        author.appendChild(imageContainer);
        author.appendChild(name);
        card.appendChild(headline);
        card.appendChild(author);
        container.appendChild(card);
      }
    }
  }
  
  getArticles();