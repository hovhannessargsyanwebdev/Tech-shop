let hiddenList = document.querySelectorAll('.hidden-list')
hiddenList.forEach(item => {  
  item.addEventListener('click', (e) => {
    let list = e.target.closest('li').querySelector('ul')
    if (list.classList.contains('not-active-link')) {
      list.classList.replace('not-active-link', 'active-link')
      e.target.classList.add('change-link-color')
    }
    else {
      list.classList.replace('active-link', 'not-active-link')
      e.target.classList.remove('change-link-color')
    }
  })
})

let navHamburgerBtn = document.querySelector('.nav-hamburger-btn')
let mainHamburgerBtn = document.querySelector('.main-hamburger-btn')

function showHamburgerMenu (e) {
  if (e.target.closest('.header-container')) {
    let mobileMenuNav = document.querySelector('.mobile-menu-nav')
    let hamburgerLines = e.target.closest('.header-container').querySelectorAll('.hamburger-btn-line')

    if (mobileMenuNav.classList.contains('d-none')) {
      mobileMenuNav.classList.replace('d-none','show-mobile-menu')
      navHamburgerBtn.classList.add('my-10')
      hamburgerLines[0].classList.add('rotate-icon--45')
      hamburgerLines[1].classList.add('rotate-icon-45')
      hamburgerLines[2].classList.add('opacity-0')
    }
    else {
      mobileMenuNav.classList.replace('show-mobile-menu','d-none')
      navHamburgerBtn.classList.remove('my-10')
      hamburgerLines[0].classList.remove('rotate-icon--45')
      hamburgerLines[1].classList.remove('rotate-icon-45')
      hamburgerLines[2].classList.remove('opacity-0')
    }
  }

  if (e.target.closest('.hamburger-main-wrapp')) {
    let mobileMenuMain = document.querySelector('.mobile-menu-main')
    let hamburgerLines = mainHamburgerBtn.querySelectorAll('.hamburger-btn-line')

    if (mobileMenuMain.classList.contains('d-none')) {
      mobileMenuMain.classList.replace('d-none','show-mobile-menu')
      mainHamburgerBtn.classList.add('my-10')
      hamburgerLines[0].classList.add('rotate-icon--45')
      hamburgerLines[1].classList.add('rotate-icon-45')
      hamburgerLines[2].classList.add('opacity-0')
    }
    else {
      mobileMenuMain.classList.replace('show-mobile-menu','d-none')
      mainHamburgerBtn.classList.remove('my-10')
      hamburgerLines[0].classList.remove('rotate-icon--45')
      hamburgerLines[1].classList.remove('rotate-icon-45')
      hamburgerLines[2].classList.remove('opacity-0')
    }
  }
}

navHamburgerBtn.addEventListener('click', showHamburgerMenu)
mainHamburgerBtn.addEventListener('click', showHamburgerMenu)


let select = document.querySelector('.select-wrapp')
function showSelect(e) {
  let selectList = e.target.closest('.catalog-select-wrapp').querySelector('.select-list')
  if (selectList.classList.contains('d-none')) {
    selectList.classList.replace('d-none','d-block')
  }
  else {
    selectList.classList.replace('d-block','d-none')
  }
}
if (!!select) {
  select.addEventListener('click', showSelect)
}
  

