let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#main',
        start: '500px center',
        end: 'center center',
        scrub: true,
        markers: false
    }
})

tl.to('#bg img', {
    x: -20,
    opacity: .5
})







const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)