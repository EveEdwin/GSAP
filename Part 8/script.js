function page1(){
    var tl = gsap.timeline()

tl.from("nav h1",{
    y:-30,
    opacity:0,
    delay:0.51,
    duration:0.5,

})
tl.from("nav h4, nav button",{
    y:-30,
    opacity:0,

    duration:0.5,
    stagger:0.15,
})
tl.from(".center-part1 h1",{
    x:-100,
    opacity:0,

    duration:0.5,

})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,

    duration:0.5,

})
tl.from(".center-part1 button",{
    x:-100,
    opacity:0,

    duration:0.5,

})
tl.from(".center-part2 img",{

    opacity:0,
    x:200,
    duration:0.5,

},"-=1") // Time line ke andar delay sahi se dene ka tarika hai ye .
tl.from(".section1bottom img",{
    opacity:0,
y:30,
stagger:-0.25,
duration:0.61,
})
}

page1()

function page2(){
    
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        scroller: "body",

        start: "top 50%",
        end:" top -60%",
        scrub: 2,
        }
})

tl2.from(".services",{
    y:-100,
    opacity:0,
    
})

tl2.from(".elem.line1.left",{
    x:-100,
    opacity:0,
    duration:1,

},"anim")
tl2.from(".elem.line1.right",{
    x:30,
    opacity:0,
    duration:1,
    
},"anim") //sath me chalane ke liye kiya hai anim

tl2.from(".elem.line2.left",{
    x:-100,
    opacity:0,
    duration:1,

},"anim2")
tl2.from(".elem.line2.right",{
    x:30,
    opacity:0,
    duration:1,
    
},"anim2")
tl2.from(".elem.line3.left",{
    x:-100,
    opacity:0,
    duration:1,

},"anim3")
tl2.from(".elem.line3.right",{
    x:30,
    opacity:0,
    duration:1,
    
},"anim3")
tl2.from(".elem.line4.left",{
    x:-100,
    opacity:0,
    duration:1,

},"anim4")
tl2.from(".elem.line4.right",{
    x:30,
    opacity:0,
    duration:1,
    
},"anim4")
}
page2()