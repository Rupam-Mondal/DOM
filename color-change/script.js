const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')


buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        if (body.style.backgroundColor === 'black') {
            body.style.backgroundColor = 'white';
            button.style.backgroundColor = 'black';
        } else {
            body.style.backgroundColor = 'black';
            button.style.backgroundColor = 'white';
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
    })
})