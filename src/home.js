const displayHome = () => {
  const element = document.createElement('div');
  const summary = document.createElement('div');
  summary.classList.add('summary');
  const hours = document.createElement('ul');
  hours.classList.add('hours');
  const hoursText = [
    'Sunday: Closed',
    'Monday: 6am - 8pm',
    'Tuesday: 6am - 8pm',
    'Wednesday: 6am - 8pm',
    'Thursday: 6am - 8pm',
    'Friday: 6am - 8pm',
    'Saturday: Closed'
  ];
  hoursText.forEach(function(el) {
    const hoursList = document.createElement('li');
    hoursList.textContent = el;
    hours.appendChild(hoursList);
  });
  const location = document.createElement('div');

  summary.textContent = "In Noodle Express, we offer customers the best noodles around the world. By serving dishes such as Pho, Lo Mein, and Pad Thai, we offer experiences that makes you feel like traveling around Asia.";

  location.textContent = "123 Random St., City, State "

  element.appendChild(summary);  
  element.appendChild(hours);
  element.appendChild(location);

  return element;
};

export default displayHome;