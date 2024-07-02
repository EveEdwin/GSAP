// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:180,
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:480,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller: "body",
//         markers:true,
//         start:"top 60%",
//         end: "top 30%",
//         scrub: 3,
//     }
// })
gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin: true,
    }
})