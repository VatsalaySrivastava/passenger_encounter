let w=document.getElementById("count-el")
let p= document.querySelector("button")
let c=0
p.addEventListener('click',press)
function press()
{
    c++
    w.textContent = c;
}

let s=document.getElementById('sa')
let pa= document.getElementById('prev')

s.addEventListener('click', save) 
function save()
{

    let countstr= c + " - "
    pa.textContent += countstr
    c=0
    w.textContent=c
    //window.alert("The count is "+ c)
}
