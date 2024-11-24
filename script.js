// GSAP Animations
gsap.from(".hero h1", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "bounce"
});

gsap.from(".hero p", {
  duration: 1,
  delay: 0.5,
  x: -50,
  opacity: 0
});

gsap.from(".hero .btn", {
  duration: 1,
  delay: 1,
  scale: 0,
  ease: "elastic"
});

gsap.from(".about, .projects, .skills, .contact", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 75%",
    toggleActions: "restart none none none",
  },
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.3,
});
