import React from 'react'
import HeroImage from '../assets/images/avatar-removebg-preview.png'

export default function Hero() {
    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

    const numBalls = 50;
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
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
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


return (
    <section className="p-5 ">
        <div className="container">
            <div className="d-md-flex d-sm-block justify-content-between">
                <div className="mt-5">
                    <h1 className="fw-bolder mt-5 animate__animated animate__fadeInLeft">Hello!</h1>
                    <h1 className="fw-bolder animate__animated animate__fadeInLeft">My Name is Bernard Lewis</h1>
                    <h1 className="fw-bolder animate__animated animate__fadeInLeft">And I'm a <span className="text-danger">Full-Stack Web Developer</span></h1>
                    <h3 className="fw-light mt-3 animate__animated animate__fadeInLeft">I'm fascinated by everything related to programming.</h3>
                    <a className="btn btn-outline-danger fw-semibold mt-3 fs-4 rounded-pill px-5 py-3 animate__animated animate__fadeInUp" href="https://drive.google.com/file/d/15NOSu5N9CU-aBek0bsXxKz5FG5k62eCz/view?usp=share_link">Resume</a>
                </div>
                <div className="d-block animate__animated animate__fadeInRight">
                    <img className="img-fluid w-75" src={HeroImage} alt="heroimg.png"/>
                </div>
            </div>
        </div>
    </section>
)
}
