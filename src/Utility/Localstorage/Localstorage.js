// Utility/Localstorage/Localstorage.js

const getData = () => {
  const storedData = localStorage.getItem('items');
  return storedData ? JSON.parse(storedData) : [];
};

const saveData = (id) => {
  let save = getData();
  if (!save.includes(id)) {
    save.push(id);
    localStorage.setItem('items', JSON.stringify(save));
  }
};

const removeItem = (idToRemove) => {
  let save = getData();
  save = save.filter(data => data !== idToRemove); // Remove idToRemove from save array
  localStorage.setItem('items', JSON.stringify(save));
};

export { getData, saveData, removeItem };
