const displayContact = () => {
  const element = document.createElement('div');
  const headChef = document.createElement('h1');
  headChef.textContent = 'Dennis Ly';
  const headChefInfo = document.createElement('ul');
  const headChefText = [
    'chef',
    '111-111-1111',
    'rand@email.com',
  ];
  headChefText.forEach(function(el) {
    const li = document.createElement('li');
    li.textContent = el;
    headChefInfo.appendChild(li);
  });

  element.appendChild(headChef);
  element.appendChild(headChefInfo);

  return element;
};

export default displayContact;