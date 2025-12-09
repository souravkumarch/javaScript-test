let increase =document.querySelector("#increase")
let decrease =document.querySelector("#decrease")
let h1 = document.querySelector("#h1")
let reset =document.querySelector("#reset")
    let  count = 0;
increase.onclick = function (){
count =count +1;
console.log("increase clicked" +count)
h1.innerHTML = count;
}

decrease.onclick = function (){
    if(count >0){  
count =count -1;
    }
console.log("Decrease clicked" +count)
h1.innerHTML = count;
}
reset.onclick = function(){
    count = 0;
    h1.innerHTML = 0
}