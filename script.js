console.log(document)
var plus_btns = document.querySelectorAll(".plus")
console.log(plus_btns)
function inc(e) {
 var cible= e.target
 console.log(cible)
 var div = cible.parentElement ;
 console.log(div)
 var p = div.querySelector("p") ;
 console.log(p)
 var value = Number(p.innerHTML);
 value++;
  p.innerHTML=value
  var unitprice = document.querySelectorAll(".unitPrice")
console.log(unitprice)
var td = div.parentElement
var tr = td.parentElement
var unitprice = tr.querySelector(".unitPrice")
var ap = Number (unitprice.innerHTML) ;
var price = tr.querySelector(".price")
price.innerHTML = value * ap ;
sum () ;
}

for (let i = 0; i < plus_btns.length; i++) {
     plus_btns[i].addEventListener("click",inc) ;
}

var minus_btns = document.querySelectorAll(".minus")
console.log(minus_btns)
function din(e) {
 var cible= e.target
 console.log(cible)
 var div = cible.parentElement ;
 console.log(div)
 var p = div.querySelector("p") ;
 console.log(p)
 var value = Number(p.innerHTML);
 if (value>0){
 value--;}
  p.innerHTML=value
  var unitprice = document.querySelectorAll(".unitPrice")
  console.log(unitprice)
  var td = div.parentElement
  var tr = td.parentElement
  var unitprice = tr.querySelector(".unitPrice")
  var ap = Number (unitprice.innerHTML) ;
  var price = tr.querySelector(".price")
  price.innerHTML = value * ap ;
  sum () ;
  
}
for (let i = 0; i < minus_btns.length; i++) {
    minus_btns[i].addEventListener("click",din) ;
}
function sum () {
  var somme = 0
  var total = document.getElementById("total")
  var prices = document.querySelectorAll(".price")


for (let i = 0; i < prices.length; i++) {
  somme =somme + Number(prices[i].innerHTML) 
  total.innerHTML = somme ;

}}

var like_btns = document.querySelectorAll (".like") ;
function changecolor(e) {
  var cible = e.target
  if (cible.style.color!="red") {
      cible.style.color = "red"}
      else {cible.style.color ="gray" };

}

for (let i = 0; i <like_btns.length; i++) {
  like_btns[i].addEventListener("click" , changecolor);

}

var delete_btns = document.querySelectorAll (".delete") ;
function deleterow(e) {
  var cible = e.target ;
  var tr = cible.parentElement.parentElement.parentElement.parentElement ;
  var price =tr.querySelector (".price")
  tr.remove () ;
}

for (let i = 0; i < delete_btns.length; i++) {
  delete_btns[i] .addEventListener ("click , deleterow");

}
