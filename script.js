let age = document.getElementById('age');
let btn = document.getElementById('btn');
let result = document.getElementById('result')
// let result = document.getElementById('result')
btn.addEventListener('click', click = () => {
    result.setAttribute(
        'style',
        'border:2px solid black; display:inline-block;  font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; font-weight:500; background-color:lime'
    )
    result.innerHTML = `${age.value*365} Days`;
})
