gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline()

tl.from("#nav_bar a", {
    y:-30,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.4,
})

// Hero Section
gsap.from("#main-img", {
    x: 150,
    opacity: 0,
    duration: 0.7,
    delay: 1.7,
})

gsap.from("#main-con", {
    x: -150,
    opacity: 0,
    duration: 0.7,
    delay: 1.7,
})

// About 
gsap.from("#about h2", {
    scrollTrigger: {
        trigger: "#about h2",
        // markers: true,
        start: "top 35%",
        end: "top 10%",
        scroller: "body",
        scrub: 2,
        // pin: true
    },
    opacity: 0,
    y: -200,
    duration: 0.6,
});

gsap.from("#about img", {
    scrollTrigger: {
        trigger: "#about img",
        // markers: true,
        start: "top 40%",
        end: "top 10%",
        scroller: "body",
        scrub: 2,
        // pin: true
    },
    opacity: 0,
    x: -100,
    duration: 0.8,
});

gsap.from("#about .col-md-7", {
    scrollTrigger: {
        trigger: "#about .col-md-7",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top 10%",
        scrub: 2,
    },
    opacity: 0,
    x: 100,
    duration: 0.8,
});


// Skill Section
gsap.from(".skill-card", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 20%",
      end: "top 10%",
      scroller: "body",
    //   markers: true,
      scrub: 4,
    },
    opacity: 0,
    // y: 50,
    duration: 0.8,
    stagger: 0.4,
    scale: 0
});

gsap.from("#skills h2", {
    scrollTrigger: {
        trigger: "#skills h2",
        // markers: true,
        scroller: "body",
        start: "top 40%",
        end: "top 20%",
        scrub: 2
    },
    x: -300,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
});

// gsap.from("#content, h5", {
//     x: 800,
//     opacity: 0,
//     stagger: 1,
//     duration: 1,
//     delay: 2,
// })

// Our Services
gsap.from(".service-card", {
    scrollTrigger: {
      trigger: "#services",
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.6,
    delay: 1.5,
    ease: "power2.out"
});

gsap.from("#services h2", {
    scrollTrigger: "#services h2",
    opacity: 0,
    y: -30,
    duration: 0.6,
    ease: "power2.out"
});

// Contact us
  gsap.from("#contact h2, #contact p", {
    scrollTrigger: "#contact",
    opacity: 0,
    y: 300,
    duration: 0.6,
    delay: 1,
    ease: "power2.out",
    stagger: 0.1
  });

  gsap.from(".contact-info > div, #contact form", {
    scrollTrigger: "#contact",
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: 1,
    stagger: 0.5,
    ease: "power2.out"
  });
