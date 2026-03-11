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

function draw(){

const box=document.getElementById("box")

box.classList.add("box-open")

setTimeout(()=>{
box.classList.remove("box-open")
openResult()
},700)

}

if(item.rarity=="隐藏"){

const fx=document.getElementById("secretEffect")

fx.classList.add("show")

setTimeout(()=>{
fx.classList.remove("show")
},1000)

}

const labubus=[]

for(let i=1;i<=50;i++){

let rarity="普通"

if(i>35) rarity="稀有"
if(i>45) rarity="史诗"
if(i>49) rarity="隐藏"

labubus.push({
name:"Labubu "+i,
rarity:rarity
})

}

function renderCollection(){

const grid=document.getElementById("collection")

grid.innerHTML=""

labubus.forEach(l=>{

const owned=collection.includes(l.name)

const div=document.createElement("div")

div.className="card"

div.innerHTML=owned?l.name:"❓ 未解锁"

grid.appendChild(div)

})

}

function buyCoins(n){

coins+=n

updateCoins()

save()

}

let leaderboard=
JSON.parse(localStorage.getItem("leaderboard")||"[]")

function updateLeaderboard(name,score){

leaderboard.push({name,score})

leaderboard.sort((a,b)=>b.score-a.score)

leaderboard=leaderboard.slice(0,10)

localStorage.setItem(
"leaderboard",
JSON.stringify(leaderboard)
)

}

function renderLeaderboard(){

const list=document.getElementById("rank")

list.innerHTML=""

leaderboard.forEach(p=>{

const li=document.createElement("li")

li.innerText=p.name+" "+p.score

list.appendChild(li)

})

}
