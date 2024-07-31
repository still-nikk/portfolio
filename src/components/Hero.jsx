import { curve, heroBackground, robot, portfolio } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Typewriter } from "react-simple-typewriter";
import { resumeFile } from "../assets";

const Hero = () => {
  // const {text1} = useTypewriter({
  //   words: ["FrontEnd Developer", "Problem Solver", "Designer", "Photographer"],
  //   loop: {},
  //   typeSpeed: 120,
  //   deleteSpeed: 80,
  // });

  const parallaxRef = useRef(null);
  const handleAppClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const MyComponent = () => {
    const handleType = (count) => {
      // access word count number
      console.log(count);
    };
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Nikunj_Maheshwari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            <span className=" from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
              I'm Nikunj Maheshwari
              <br />
            </span>
            <span
              style={{ color: "white", fontWeight: "bold" }}
              className="max-sm:text-[1.8rem]"
            >
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "A Web Developer",
                  "A Problem Solver",
                  "A Designer",
                  "A Photography Enthusiast",
                ]}
                loop={0 | false}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1000}
                onLoopDone={handleDone}
              />
            </span>
            <br /> Based in {` `}
            <span className="inline-block relative">
              India{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash all your innovative ideas and the best styles with me.
          </p>
          <Button onClick={handleDownload} className="lg:hidden">
            Resume
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 ">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] ">
                <img
                  src={portfolio}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[10.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img
                          src={icon.src}
                          width={24}
                          height={25}
                          alt={icon}
                          className=" cursor-pointer hover:opacity-50"
                          href={icon.url}
                        />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Developing . . ."
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute md:h-[1rem] max-sm:h-[70rem] md:mt-[18.5rem] object-cover opacity-15 box-shadow-inset scale-[0.7] -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] max-sm:opacity-10">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-25 blur-[blur-lg]"></div>
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
