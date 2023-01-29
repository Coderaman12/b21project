let locomotive = function(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

// locomotive();  




// page-1
let page_1 = function(){
  
  let tl = gsap.timeline({
    scrollTrigger : {
      trigger:"#page-1",
        // markers: true,
        start:"top 0",
        // end:"bottom 0",
        pin:true,
        scrub:1
    }
    })

    tl

    .from("#center",{
    left:"85%",
    duration:5,
    ease: "circ"
    })

    .to("#circle #c-btm img",{
      rotate:"-180deg",
      scale: 0,
      stagger: .8,
      delay:-2,
      duration:8,
      ease: "sine"
      },"same")

    .to("#circle #c-top img",{
      scale: 0,
      stagger: .8,
      duration:8,
      delay:-2,
      ease: "sine"
      },"same")

// change of color
  tl
  .to("#page-1 #nav-top h2",{
    color:'#fff',
    delay:-1
  },"same")
  .to("#page-1 #nt-right-2 h4",{
    color:'#fff',
    delay:-1
  },"same")
  .to("#page-1 .r1",{
    backgroundColor:'rgba(0, 0, 0)',
    delay:-1
  },"same")
  .to("#page-1 .r2",{
    backgroundColor:'rgba(58, 58, 58)',
    delay:-1
  },"same")
  .to("#page-1 .r3",{
    backgroundColor:'rgba(83, 83, 83)',
    delay:-1
  },"same")
  .to("#page-1 .r4",{
    backgroundColor:'rgba(126, 126, 126)',
    delay:-1
  },"same")
  .to("#page-1 .r5",{
    backgroundColor:'rgba(169, 169, 169)',
    delay:-1
  },"same")
  .to("#page-1 .r6",{
    backgroundColor:'rgba(212, 212, 212)',
    delay:-1
  },"same")
// 
// 
    .from("#sm-small-circle",{
    scale:.3,
    top:"110%",
    duration:5,
    delay:-3,
    ease:Power1
    },"same")
    
  .to("#c-image",{
    scale:0,
    duration:5,
    delay:-2,
    ease:"sine"
    },"same")

  .to(".c",{
  opacity:0,
  duration:3,
  delay:-2
    },"same")

  .to("#gallery",{
    top:"100%",
    duration:5,
    delay:-2,
    ease:"circ"
    },"same")

  .from("#page-1>h1",{
    rotate:"40deg",
    bottom:"-100%",
    duration:3,
    ease:"circ",  
    },"same")

    .to("#sm-circle",{
      scale:0,
      duration:8
      },"same2")

  .to("#sm-small-circle",{
    opacity:0,
    duration:2
    },"same2")

  .to("#sm-overlay",{
    top:"-100%",
    duration:20,
    stagger:.4,
    delay:-3
    })

  .from("#backimage",{
    scale:1.5,
    duration:10,
    ease:"linear"
    },"same","same2") 

}

page_1();

// page-2 animation


let page_2 =function(){
  let tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page-2",
      pin:true,
      // markers:true,
      scrub:1,  
      start:"top 0%"
    }
  })
  tl2
  .to(".circle",{
    top:"50%",
    stagger:.4,
    duration:1,
    ease:"circ"
  })
  .to(".circle",{
    left:"50%",
    duration:2,
    ease:"circ"
  })
  .to(".circle",{
    scale:.4,
    duration:3,
    ease:"circ"
  })
  .to(".circle",{
    scale:6,
    duration:3,
    ease:"circ"
  })


  // 
  .to("#page-2 #nav-top h2",{
    color:'#fff',
    delay:-2
  },"same")
  .to("#page-2 #nt-right-2 h4",{
    color:'#fff',
    delay:-2
  },"same")
  .to("#page-2 .r1",{
    backgroundColor:'rgba(0, 0, 0)',
    delay:-2
  },"same")
  .to("#page-2 .r2",{
    backgroundColor:'rgba(58, 58, 58)',
    delay:-2
  },"same")
  .to("#page-2 .r3",{
    backgroundColor:'rgba(83, 83, 83)',
    delay:-2
  },"same")
  .to("#page-2 .r4",{
    backgroundColor:'rgba(126, 126, 126)',
    delay:-2
  },"same")
  .to("#page-2 .r5",{
    backgroundColor:'rgba(169, 169, 169)',
    delay:-2
  },"same")
  .to("#page-2 .r6",{
    backgroundColor:'rgba(212, 212, 212)',
    delay:-2
  },"same")


  // 
  .to("#num",{
    top:"-90%",
    stagger:1.5,
    duration:4,
    ease:"circ",
  })
  .to(".pink",{
    background:`linear-gradient(to right, #D5A7B4, #B4AAD5)`,
    duration:5,
    ease:"circ"
  },"a")
  .to("#p2-top h1",{
    left:"-130%",
    duration:10,
    ease:"circ"
  },"a")
  .to("#p2",{
    opacity:0,
    duration:3,
    ease:"circ"
  },"a")
  .to("#p1",{
    opacity:1,
    duration:3,
    ease:"circ",
    delay:3
  },"a")

  .to(".colors",{
    top:"0%",
    stagger:1.2,
    duration:8
  },"s")
  .to("#num",{
    top:"-200%",
    duration:4,
    ease:"circ",
  },"s")
}

page_2();
