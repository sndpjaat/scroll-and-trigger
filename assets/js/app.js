
gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".panel-blue",
    start: "top top",
    end: "bottom 50%",
    scrub: true,
    pin: true,
    markers: true,
  }
});


timeline
  .from(".panel-blue h2", { opacity: 0, y: -50, duration: 1 })
  .from(".panel-blue p", { opacity: 0, y: 50, duration: 1 }, "-=0.5") 
  .from(".panel-green h2", {
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".panel-green",
      start: "top center",
      end: "bottom center",
      scrub: true,
      markers: true,
    }
  })
  .from(".panel-red h2", {
    rotation: 360,
    duration: 1,
    scrollTrigger: {
      trigger: ".panel-red",
      start: "top center",
      end: "bottom center",
      scrub: true,
      markers: true,
    }
  })
  .from(".panel-purple h2", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".panel-purple",
      start: "top center",
      end: "bottom center",
      scrub: true,
      markers: true,
    }
  })
  .from(".panel-purple p", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".panel-purple p",
      start: "top center",
      end: "bottom center",
      scrub: true,
      markers: true,
    }
  });
