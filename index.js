const themeToggle = document.querySelector(".toggle");
const themedElements = document.querySelectorAll('.light');

let activeTheme = 'light';

function changeTheme() {
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';

    themedElements.forEach(element => {
        element.classList.remove(activeTheme);
        element.classList.add(newTheme);
    });

    activeTheme = newTheme;
}

function onMount() {
    themeToggle.addEventListener('click', changeTheme);
}

document.addEventListener('DOMContentLoaded', onMount);