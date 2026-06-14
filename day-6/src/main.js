import './style.css'
import gsap from 'gsap'

const loadCount = document.querySelector('.loadcount h1')
let count = 0
const interval = setInterval(()=>{
  count++
  loadCount.innerHTML=`${count}%`
 
  if (count===100){
    clearInterval(interval)
    landingAnimation()
  }
    
},20)

function landingAnimation(){
  const tl= gsap.timeline()
  tl.to('.loader',{
  yPercent:-100,
  scale:0.8,
  rotate:5,
  duration:1.2,
  ease:"expo.inOut"
}).to('.loader',{
    yPercent:-100,
    duration:1.2,
    ease: "expo.out"
  },'-=0.87').from('.background img',{
    scale:1.2,
    duration:1.3,
    ease:"circ.out",
  },'-=0.9').from(".heading h1 ",{
    yPercent:100,
    duration:1,
    ease:"expo.out",  
  },'-=1.1').from(".sub-heading h2",{
    yPercent:100,
    duration:1,
    ease:"expo.out"
  },'-=0.5')
}

