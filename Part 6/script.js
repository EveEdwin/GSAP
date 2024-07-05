function breakTheText(){
    var h1 = document.querySelector("h1")
var h1Text  = h1.textContent

var clutter = ""

var Splitted = h1Text.split("")
var halfValue = Splitted.length/2
Splitted.forEach(function(e, index){
    if(index<halfValue){
        clutter+= `<span class="front">${e}</span>`

    }else{
        clutter+= `<span class="back">${e}</span>`
    }
})

h1.innerHTML= clutter
}

breakTheText()
gsap.from("h1 .front",{
    y:100,
    opacity:0,
    duration:0.5,
    delay: 0.5,
    stagger:0.12,
})
gsap.from("h1 .back",{
    y:100,
    opacity:0,
    duration:0.5,
    delay: 0.5,
    stagger:-0.12,
})
// gsap.from("h1 span",{
//     y:100,
//     opacity:0,
//     duration:0.5,
//     delay: 0.5,
//     stagger:-0.12,
// })