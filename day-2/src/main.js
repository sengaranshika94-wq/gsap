import gsap from 'gsap'
import './style.css' 

gsap.set('.box',{
  x:-300
})

gsap.to('.box',{
  x:1200,
  delay:0.6,
  duration: 1.5,
  repeat:-1,

})