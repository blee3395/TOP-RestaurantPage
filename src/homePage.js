/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
import home from './home.jpg';
import star from './star.png';

export default function homePage() {
  const homePage = document.createElement('div');
  homePage.className = 'homePage';

  const img = new Image();
  img.src = home;
  img.alt = 'picture of food';
  img.className = 'homeImg';

  const review = document.createElement('div');
  review.className = 'review';

  const rating = document.createElement('div');
  rating.className = 'rating';

  const openQuote = document.createElement('div');
  openQuote.className = 'quote';
  openQuote.textContent = '"';

  const endQuote = document.createElement('div');
  endQuote.className = 'quote';
  endQuote.textContent = '"';

  rating.appendChild(openQuote);
  for (let i = 0; i < 5; i++) {
    const starImg = new Image();
    starImg.src = star;
    starImg.alt = 'a gold star';
    starImg.className = 'star';
    rating.appendChild(starImg);
  }
  rating.appendChild(endQuote);

  const quote = document.createElement('div');
  quote.className = 'quote text';
  quote.textContent = 'An exquisite family establishment - Vin Diesel';

  review.appendChild(rating);
  review.appendChild(quote);

  homePage.appendChild(img);
  homePage.appendChild(review);

  return homePage;
}
