function handleInputFocus(e) {
    e.target.style.backgroundColor = 'yellow'
}

function handleInputBlur(e) {
    e.target.style.backgroundColor = "white"
}

function handleMouseOver(e) {
    e.target.style.backgroundColor = "lightblue"
}

function handleMouseOut(e) {
    e.target.style.backgroundColor = '';
}

document.querySelectorAll('input').forEach(inputField => {
    inputField.addEventListener("focus", handleInputFocus)
    inputField.addEventListener("blur", handleInputBlur)
})



document.querySelectorAll('button, .btn, .btn-outline').forEach(button => {
    button.addEventListener('mouseover', handleMouseOver);
    button.addEventListener('mouseout', handleMouseOut);
})
