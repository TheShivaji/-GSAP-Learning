gsap.to('#div' ,{
x:1000,
duration:2,
dealy:4,
borderRadius:'50%',
repeat:-10,
scale:0.5,
ease: "power2.inOut",
yoyo: true

})
gsap.from('h2' ,{
  opacity:0,
  duration:2,
  dealy:1,
  y:30,
  stagger: 0.2
})
