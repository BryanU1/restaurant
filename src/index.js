import displayHome from "./home";
import displayMenu from "./menu";
import displayContact from "./contact";

const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');
const content = document.querySelector('#content');

homeBtn.addEventListener('click', () => {
  content.textContent = '';
  content.appendChild(displayHome());
});
homeBtn.textContent = "Home";

menuBtn.addEventListener('click', () => {
  content.textContent = '';
  content.appendChild(displayMenu());
});
menuBtn.textContent = "Menu";

contactBtn.addEventListener('click', () => {
  content.textContent = '';
  content.appendChild(displayContact());
});
contactBtn.textContent = "Contact";

document.body.insertBefore(homeBtn, content);
document.body.insertBefore(menuBtn, content);
document.body.insertBefore(contactBtn, content);
content.appendChild(displayHome());