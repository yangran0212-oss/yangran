let coins = parseInt(localStorage.getItem("coins")) || 200
let collection = JSON.parse(localStorage.getItem("collection")) || []

document.getElementById("coins").innerText = coins

const labubus = []

for(let i=1;i<=30;i++){

let rarity="普通"

if(i>20) rarity="稀有"
if(i>26) rarity="史诗"
if(i>29) rarity="隐藏"

labubus.push({

name:"Labubu "+i,
rarity:rarity

})

}

function save(){

localStorage.setItem("coins",coins)
localStorage.setItem("collection",JSON.stringify(collection))

}

function draw(){

if(coins<10){

alert("金币不足")

return

}

coins-=10

document.getElementById("coins").innerText=coins

let box=document.getElementById("box")

box.classList.add("shake")

setTimeout(()=>{

box.classList.remove("shake")

let rand=Math.random()

let pool

if(rand<0.65){

pool=labubus.filter(x=>x.rarity=="普通")

}

else if(rand<0.9){

pool=labubus.filter(x=>x.rarity=="稀有")

}

else if(rand<0.99){

pool=labubus.filter(x=>x.rarity=="史诗")

}

else{

pool=labubus.filter(x=>x.rarity=="隐藏")

}

let item=pool[Math.floor(Math.random()*pool.length)]

document.getElementById("result").innerText=

"获得 "+item.name+" ["+item.rarity+"]"

if(!collection.includes(item.name)){

collection.push(item.name)

renderCollection()

}

save()

},600)

}

function renderCollection(){

let grid=document.getElementById("collectionGrid")

grid.innerHTML=""

labubus.forEach(l=>{

let owned=collection.includes(l.name)

let div=document.createElement("div")

div.className="card"

div.innerText=owned?l.name:"未解锁"

grid.appendChild(div)

})

}

function dailyReward(){

coins+=100

document.getElementById("coins").innerText=coins

save()

}

renderCollection()
