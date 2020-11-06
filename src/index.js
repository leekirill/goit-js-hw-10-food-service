import menuTemplate from '../templates/menu.hbs'
import menu from '../src/menu.json'

// console.log(menuTemplate)
const menuRef = createMenuCards(menu)

function createMenuCards(menu) {
    return menu.map(menuTemplate).join('')
}

const ulRef = document.querySelector('ul')

ulRef.insertAdjacentHTML('beforeend', menuRef)


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';

const dataStorage = localStorage.getItem(STORAGE_KEY)

const btn = document.querySelector("#theme-switch-toggle")
const bodyRef = document.querySelector("body")
bodyRef.classList.add(Theme.LIGHT)


btn.addEventListener('change', event => {
  if (bodyRef.classList.contains(Theme.LIGHT)) {
    localStorage.setItem(STORAGE_KEY, Theme.DARK)
    bodyRef.classList.remove(Theme.LIGHT)
    bodyRef.classList.add(Theme.DARK)
  } else {
    bodyRef.classList.remove(Theme.DARK)
    bodyRef.classList.add(Theme.LIGHT)
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT)
  }
})



 
console.log(dataStorage)


 



// console.log(localStorage.getItem('theme'))