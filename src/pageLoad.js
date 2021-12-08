import myLogo from './logo.png';

export default function pageLoad() {
    console.log("yolo");
    
    const element =  document.getElementById('content');

    let headline = document.createElement('div');
    headline.className = 'headline';
    headline.textContent = "Welcome to Olive Garden";

    let logo = new Image();
    logo.src = myLogo;
    logo.alt = "a restaurant image";
    logo.className= 'logo';

    let motto = document.createElement('div');
    motto.className = "motto";
    motto.textContent = "When you're here you're family.";

    element.appendChild(headline);
    element.appendChild(logo);
    element.appendChild(motto);

    return element;
}