import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";

const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "0",
        duration: 0.2,
        delay: 0,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1,
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div>
      <div className="relative" ref={comp}>
        <div
          id="intro-slider"
          className="h-screen p-10 bg-n-8 place-items-center justify-center absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
        >
          <h1 className="text-8xl max-sm:text-5xl " id="title-1">
            <span id="title-1" className=" from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Design, </span>
            <span id="title-2" className=" from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Develop, </span>
            <span id="title-3" className=" from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Deliver. </span>
          </h1>
        </div>
      </div>
        <div className=" pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Hero />
          <Collaboration />
          <Services />
          <Projects />
          <ContactMe />
        </div>
        <ButtonGradient />
    </div>
  );
};

export default App;
