let tl = gsap.timeline()

tl.from(".logo", {x:-100, duration:1, opacity:0})

tl.from(".menu_link > ul > li", {x:-100, duration:1.5,opacity:0})

tl.to(".menu_bar_search", {
    duration:.2,
    opacity:1,
})

tl.to(".line1",{
    duration:1.5,
    height:'100vh',
    background:'red',
})

tl.to(".line2",{
    duration:1,
    height:'100vh',
    background:'yellow',
})

tl.to(".hero_left > .txt", {
    opacity:1,
    duration:1,
})