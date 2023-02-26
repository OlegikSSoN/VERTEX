// let text = [
//   {
//     id: 1,
//     text: 'Ідея',
//   }
// ]

// function setElementOnDOM(selector, data) {
//   let html = '';
//   // 1. Find element on DOM
//   const element = document.querySelector(selector);
//   // 2. Forming HTML
//   data.forEach((item) => {
//     html += `
//       <div class="store__item">
//         <p>${item.text}</p>
//       </div>`;
//   });
//   // 3. Set HTML on DOM
//   element.innerHTML = html;
// }

// function setToLocalStorage(key, data) {
//   // 1. Convert data to JSON
//   const DATA = JSON.stringify(data);
//   // 2. Set data to localStorage
//   window.localStorage.setItem(key, DATA);
// }

// function getFromLocalStorage(key) {
//   // 1. Get data from localStorage
//   const DATA = window.localStorage.getItem(key);
//   // 2. Convert data from JSON
//   return JSON.parse(DATA);
// }

// function checkKeyInLocalStorage(key) {
//   // 1. Get data from localStorage
//   const DATA = window.localStorage.getItem(key);
//   // 2. Check if data exists
//   return DATA !== null;
// }

// function localStorageStarter(key, selector) {
//   if (checkKeyInLocalStorage(key)) {
//     // 1. Get data from localStorage
//     text = getFromLocalStorage(key);
//     // 2. Set data on DOM
//     setElementOnDOM(selector, text);
//     return true;
//   } else {
//     // 1. Set data to localStorage
//     setToLocalStorage(key, []);
//     return false;
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   localStorageStarter('text', '.test_local_store') ? text = getFromLocalStorage('text') : text = text;
// });

// const ADD_ITEM_BTN = document.getElementById('add_item');
// ADD_ITEM_BTN.addEventListener('click', () => {
//   const TEXT = prompt('Введіть текст');
//   text.push({ id: 2, text: TEXT });
//   setToLocalStorage('text', text);
//   setElementOnDOM('.test_local_store', text);
// });

window.onload = function () {
  const userName = document.getElementById("name");
  const userEmail = document.getElementById("email");

  userName.addEventListener("focusout", () => {
      localStorage.setItem("userName", userName.value);
  });

   userEmail.addEventListener("focusout", () => {
       localStorage.setItem("userEmail", userEmail.value);
   });
};