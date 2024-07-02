// gsap.from("#box",{
//     x:1000,
//     z:100,
//     duration: 2,
//     delay:1,
//     rotate:360,
//     backgroundColor: "white",

//     borderRadius: "50%",
//     scale: 0.2

    
// })
// gsap.from("#box2",{
//     x:500,
//     y:500,
//     duration:2,
//     delay:1
// }) 

// gsap.from("h1",{
//     color:"yellow",
//     opacity:0,
//     y:100,
//     duration:2,
//     delay:1,
//     stagger:-1
// })

// gsap.to("#box",{
//     x:1200,
//     duration:1,
//     delay:1,
//     rotate:360,
//     repeat:-1,
//     yoyo:true

// })

var t = gsap.timeline()
t.from("#box",{
    x:1000,
    z:100,
    duration: 2,
    delay:1,
    rotate:360,
    backgroundColor: "white",

    borderRadius: "50%",
    scale: 0.2
})

t.from("#box2",{
        x:500,
        y:500,
        duration:2,
        delay:1
}) 