const displayMenu = () => {
  const element = document.createElement('div');
  const menu = document.createElement('ul');
  const menuText = [
    'Pho Dac Biet -------------------- $10',
    'Lo Mein -------------------- $11',
    'Pad Thai -------------------- $18'
  ];

  menuText.forEach(function(el) {
    const li = document.createElement('li');
    li.textContent = el;
    menu.appendChild(li);
  });

  element.appendChild(menu);

  return element;
};

export default displayMenu;