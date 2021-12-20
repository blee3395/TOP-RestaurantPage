/* eslint-disable linebreak-style */
import homePage from './homePage';
import myLogo from './logo.png';

export default function pageLoad() {
  const content = document.getElementById('content');
  const header = document.querySelector('.header');

  const logo = new Image();
  logo.src = myLogo;
  logo.alt = 'a restaurant image';
  logo.className = 'logo';

  // Container for buttons
  const buttons = document.createElement('div');
  buttons.className = 'buttons';

  // Create headline buttons
  const homeBtn = document.createElement('button');
  homeBtn.className = 'home btn';
  homeBtn.textContent = 'Home';
  homeBtn.addEventListener('click', () => {
    document.querySelector('.homePage').style.visibility = 'visible';
    document.querySelector('.menuPage').style.visibility = 'hidden';
    document.querySelector('.contactPage').style.visibility = 'hidden';
  });

  const menuBtn = document.createElement('button');
  menuBtn.className = 'menu btn';
  menuBtn.textContent = 'Menu';
  menuBtn.addEventListener('click', () => {
    document.querySelector('.homePage').style.visibility = 'hidden';
    document.querySelector('.menuPage').style.visibility = 'visible';
    document.querySelector('.contactPage').style.visibility = 'hidden';
  });

  const contactBtn = document.createElement('button');
  contactBtn.className = 'contact btn';
  contactBtn.textContent = 'Contact';
  contactBtn.addEventListener('click', () => {
    document.querySelector('.homePage').style.visibility = 'hidden';
    document.querySelector('.menuPage').style.visibility = 'hidden';
    document.querySelector('.contactPage').style.visibility = 'visible';
  });

  // Append buttons to div
  buttons.appendChild(homeBtn);
  buttons.appendChild(menuBtn);
  buttons.appendChild(contactBtn);

  // Append buttons to header
  header.appendChild(logo);
  header.appendChild(buttons);

  // Create introduction
  const headline = document.createElement('div');
  headline.className = 'headline';
  headline.textContent = 'Welcome to Olive Garden';

  const motto = document.createElement('div');
  motto.className = 'motto';
  motto.textContent = "When you're here you're family.";

  const intro = document.createElement('div');
  intro.className = 'intro';
  intro.appendChild(headline);
  intro.appendChild(motto);

  const container = document.createElement('div');
  container.className = 'container';
  container.appendChild(intro);
  container.appendChild(homePage());

  content.appendChild(container);
}
