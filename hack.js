function loadingAnimation() {
    var tl = gsap.timeline();

    // Hide the initial page content
    tl.to("#initial-page", {
        opacity: 0,
        duration: 0.5,
        onComplete: function() {
            document.getElementById("initial-page").style.display = "none";
        }
    });

    // Show and animate #page1
    tl.set("#page1", { display: "block" });
    tl.from("#page1", {
        opacity: 0,
        duration: 0.5,
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        ease: "expo.out"
    });
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    });
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.2,
        stagger: 0.2
    });
}

document.querySelector(".start-btn").addEventListener("click", loadingAnimation);

// Some random colors
const colors = ["#3CC157", "#008000", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 60;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * 6,
    y: Math.random() * 2
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

// Play-button //



// Video playing animation //

function page3VideoAnimation() {
    let video = document.querySelector(".page2 video");

    // Set up IntersectionObserver to observe when the video enters the viewport
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play(); // Play the video when it comes into view
                gsap.to(video, {
                    transform: "scaleX(1) scaleY(1)",
                    opacity: 1,
                    borderRadius: 0,
                    duration: 1 // You can adjust the duration of the animation
                });
            } else {
                video.pause(); // Pause the video when it leaves the view
                gsap.to(video, {
                    transform: "scaleX(0.7) scaleY(0)",
                    opacity: 0,
                    borderRadius: "30px",
                    duration: 1 // You can adjust the duration of the animation
                });
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the video is visible

    observer.observe(video); // Start observing the video element
}

page3VideoAnimation();

document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown-btn');

    dropdowns.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Toggle dropdown content visibility
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }

            // Close other dropdowns if they are open
            dropdowns.forEach(otherButton => {
                if (otherButton !== this && otherButton.nextElementSibling.style.display === "block") {
                    otherButton.nextElementSibling.style.display = "none";
                }
            });
        });
    });
});

let more=document.querySelector(".btn-view")

more.addEventListener("onclick",()=>{
   "PROBLEM_STATEMENTS[1].pdf"
})