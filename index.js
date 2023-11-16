const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
//gsap animation
gsap.from(".nlink" ,{
    stagger: .1,
    y:-10,
    duration: 2,
    ease: Power3,
    opacity: 0
})
gsap.from("#hero" ,{
    stagger: .1,
    y:100,
    duration: 2,
    ease: Power2,
    opacity: 0
})