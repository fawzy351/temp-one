// nav bar show and hide 
let icon = document.getElementById('icon');
console.log(icon)
let list = document.getElementById('list');
console.log(list);
let span = document.getElementById('middle');
console.log(span)

icon.onclick = function(){
    span.classList.toggle('width');
    list.classList.toggle('navBar')
}
// up button 
let btn = document.getElementById('up');

window.onscroll = function(){
    if(scrollY >= 400){
        btn.style.bottom = '20px'
    }else{
        btn.style.bottom = '-40px'
    }
}
btn.onclick = function(){
    scroll(0,0)
}
btn.onmousedown = function(){
    btn.style.opacity = '30%'
}
btn.onmouseup = function(){
    btn.style.opacity = '100%'
}