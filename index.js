const menu__bar = document.querySelector(".menu__bar")
const navList = document.querySelector(".nav")
console.log(navList)
console.log(menu__bar)
menu__bar.addEventListener("click", () => {
    if (navList.classList.contains("active")) {
        navList.classList.remove("active")
        menu__bar.innerHTML = `<i class="fa fa-bars menu__bar"></i>`
    } else {
        console.log(navList)
        navList.classList.add("active")
        menu__bar.innerHTML = `<i class="fa fa-times menu__bar"></i>`
    }
})

