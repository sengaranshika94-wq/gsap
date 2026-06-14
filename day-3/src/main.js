import gsap from 'gsap'
import './style.css'

const tl= gsap.timeline()

tl.to(".box1",{
  x:1200,
  duration:1.3,
  ease:"power4.out",
  delay:0.5,
}).to(".box2",{
  x:1200,
  duration:1.3,
  ease:"power4.out",
  delay:0.5,
}).to(".box3",{
  x:1200,
  duration:1.3,
  ease:"power4.out",
  delay:0.5,
}).to(".box4",{
  x:1200,
  duration:1.3,
  ease:"power4.out",
  delay:0.5,
}).to(".box5",{
  x:1200,
  duration:1.3,
  ease:"power4.out",
  delay:0.5,
})