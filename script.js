let scene,camera,renderer

let box,lid,labubu

init()
animate()

function init(){

scene=new THREE.Scene()

camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

renderer=new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild(renderer.domElement)

const light=new THREE.PointLight(0xffffff,1)

light.position.set(5,5,5)

scene.add(light)

camera.position.z=5

createBox()

}

function createBox(){

const boxGeo=new THREE.BoxGeometry(2,2,2)

const boxMat=new THREE.MeshStandardMaterial({
color:0xff4f87
})

box=new THREE.Mesh(boxGeo,boxMat)

scene.add(box)

const lidGeo=new THREE.BoxGeometry(2.1,0.3,2.1)

const lidMat=new THREE.MeshStandardMaterial({
color:0xff6fa5
})

lid=new THREE.Mesh(lidGeo,lidMat)

lid.position.y=1.2

scene.add(lid)

const labuGeo=new THREE.SphereGeometry(0.7,32,32)

const labuMat=new THREE.MeshStandardMaterial({
color:0xffffff
})

labubu=new THREE.Mesh(labuGeo,labuMat)

labubu.position.y=-1

scene.add(labubu)

}

function animate(){

requestAnimationFrame(animate)

box.rotation.y+=0.01

renderer.render(scene,camera)

}

function openBox(){

document.getElementById("result").innerText="开盒中..."

let t=0

const open=setInterval(()=>{

lid.position.y+=0.05

labubu.position.y+=0.05

t++

if(t>40){

clearInterval(open)

const rar=Math.random()

if(rar>0.98){

labubu.material.color.set(0xffd700)

document.getElementById("result").innerText="✨隐藏款 Golden Labubu!"

}else{

document.getElementById("result").innerText="获得 Labubu!"

}

}

},30)

}
