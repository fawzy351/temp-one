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