let check = document.querySelector('.check');
let length = document.querySelector('.length');
console.log(length);
console.log(check);

check.addEventListener('click', e=>{
    document.querySelectorAll('.notification').forEach(e=>{
        e.classList.remove('active');

        length.innerHTML = "0";
    })
})