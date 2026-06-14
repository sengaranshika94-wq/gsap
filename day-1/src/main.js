import gsap from 'gsap'
import './style.css' 

gsap.to(".box",{
  x:600,
  delay:0.6,
  duration:1,
  ease:"power2.in"
})