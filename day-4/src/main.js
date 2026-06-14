import gsap from "gsap"
import './style.css'

gsap.to('.box',{
  x:600,
  duration:1.5,
  ease:'power4.out',
  delay:0.6,
  stagger:{
    each:0.2,
    from:"random"
  }
})