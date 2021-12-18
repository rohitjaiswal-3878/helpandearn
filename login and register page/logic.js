const a = document.querySelector('.link2');
const b = document.querySelector('.link1')
const form=document.querySelector('.form')

a.addEventListener('click',()=>{
    console.log("rohti")
})
b.addEventListener('click',()=>{
    form.classList.add('.register-form')
})