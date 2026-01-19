$(document).ready(function() {

let split = SplitText.create("h1", { type: "words, chars" });
gsap.from(split.chars, {
    x: 250,
    opacity: 0.6,
    duration: 0.5, 
    ease: "power4",
    delay:0.5,
    stagger: 0.08
  })

let splitText = SplitText.create(".about p", { type: "words, chars, lines" });
gsap.from(splitText.words, {
   y: -150,
    opacity: 0,
    rotation: "random(-100, 80)",
    duration: 0.8, 
    ease: "back",
    stagger: 0.08,
     delay:0.6
});


gsap.to("#main-block", {
    y: -80, 
    duration: 5, 
    ease: "elastic",
    delay:2,
    opacity: 1
});





});


