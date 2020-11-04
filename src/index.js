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

const btn = document.querySelector("#theme-switch-toggle")
btn.addEventListener('change', event => {
    const bodyRef = document.querySelector("body")
    const bodyToggle = bodyRef.classList.toggle(Theme.DARK)
    localStorage.setItem('theme', bodyToggle)
        btn.setAttribute('checked', 'true')

})
