const list = document.querySelector('ul');
const inputWrite = document.querySelector('input');
const buttonClick = document.querySelector('button');

buttonClick.addEventListener('click', () => {
  let item = inputWrite.value;
  inputWrite.value = '';
  // new variable created
  const newList = document.createElement('li');
  const newSpan = document.createElement('span');
  const newButton = document.createElement('button');

  newList.appendChild(newSpan);
  newList.appendChild(newButton);
  newSpan.textContent = item;
  newButton.textContent = 'delete';
  list.appendChild(newList);

  newButton.addEventListener('click', () => {
    newList.remove();
  });
  inputWrite.focus();
});
