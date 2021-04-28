const li = document.querySelectorAll('.tasks ul li')
const span = document.querySelectorAll('.tasks ul li span')
const check = document.querySelectorAll('.tasks ul li .hidden')
const removeBtn = document.querySelectorAll('.tasks ul li .remove')

li.forEach((item, i) => {
    li[i].addEventListener('click', () => {
        li[i].classList.toggle('selected-box')
        check[i].classList.toggle('hidden')
    })
})

removeBtn.forEach((item, i) => {
    removeBtn[i].addEventListener('click', () => {
        li[i].remove()
    })
})

const newBtn = document.getElementById('newBtn');
const input = document.querySelector('input')
const ul = document.querySelector('.tasks ul')

console.log(ul)

newBtn.addEventListener('click', () => {

    if(input.value == null || input.value == '') {
        let error = document.getElementById('error')
        error.classList.add('error')
        error.classList.remove('hidden')
        input.style.backgroundColor = "rgb(255, 206, 200)"
        return;
    } else {
        error.classList.add('hidden')
        input.style.backgroundColor = "white"

    }

    let newLi = document.createElement('li')

    let icon = document.createElement('i')
    icon.classList.add('fas','fa-check-square','fa-2x','hidden')

    let newSpan = document.createElement('span')
    newSpan.textContent = input.value;

    let newDelete = document.createElement('i')
    newDelete.classList.add('fas','fa-times','fa-1x','remove')
    newDelete.addEventListener('click', () => {
        newLi.remove()
    })

    newLi.addEventListener('click', () => {
        newLi.classList.toggle('selected-box')
        icon.classList.toggle('hidden')
        newLi.style.display = "flex"
        newLi.style.display = "flex-wrap: wrap";
    })

    newLi.appendChild(icon);
    newLi.appendChild(newSpan);
    newLi.appendChild(newDelete);
    ul.insertBefore(newLi, ul.childNodes[0]);
    input.value = '';
})