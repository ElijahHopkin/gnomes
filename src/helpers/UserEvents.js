import "../App.css";


const defineWord = document.querySelectorAll('.defineWord')

defineWord.addEventListener('mouseover', function(event) {
    event.target.style.color= 'orangered';
})