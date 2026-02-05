gsap.from("#page-1 #circle" ,{
scale:0,
duration:2,
dealy:1
} )
gsap.from("#page-2 #circle" ,{
x:-1000,
duration:2,
dealy:1,
ease: "power2.inout",
scrollTrigger:{
  trigger:"#page-2 #circle",
  scroller:"body",
  markers:true,
  start:"top 60%",
  end:"top 30%",
  scrub:2,

}

} )
