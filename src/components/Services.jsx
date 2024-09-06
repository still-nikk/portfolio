import Section from "./Section";
import Heading from "./Heading";
import {
  service1,
  service2,
  service3,
  check,
  pfpRight,
  camera,
  cloud,
} from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="aboutme" crosses>
      <div className="container">
        <Heading title="About Me." text="In pursuit of new challenges and collaborative opportunities within the ever-evolving field of web development, I welcome connections from fellow enthusiasts and innovators alike. Let's brainstorm and create something remarkable together!" />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] max-sm:max-h-[25rem] ">
            <div className="absolute p-[8rem] max-sm:p-0 top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full rounded-xl h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[27rem] ml-[40rem]">
              <h4 className="h4 mb-4">Hi There.</h4>
              <p className="body-2 mb-[3rem] text-n-3 max-sm:text-[1rem]">
              I'm Nikunj, a second-year Computer Science student at Symbiosis Institute of Technology, Pune. My passion lies in crafting captivating websites through front-end development. It's where I can let my creativity run wild, weaving together code and design to create engaging digital experiences.<br />Lately, though, I've found myself drawn to the vast world of cloud computing, operating systems, and networking. The challenge of finding innovative solutions outside my comfort zone excites me, pushing me to explore new horizons. Hackathons have become my playground, where I thrive on the adrenaline of competition and the rush of turning ideas into reality under pressure.

              </p>
              {/* <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul> */}
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 max-sm:hidden" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="p-4 border border-n-1/10 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">CloudBound</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Currently, I'm venturing into the realms of cloud computing
                  and DevOps, eager to unravel their mysteries and harness their
                  power to revolutionize the digital landscape.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={cloud}
                  className="w-75% h-75% scale-75 -mt-[2rem] ml-[2rem] max-sm:mt-0 max-sm:ml-0 object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                {/* <VideoBar /> */}
              </div>
            </div>

            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={camera}
                  className="h-full w-full mt-[7rem] object-fill scale-[0.65] ml-[2rem] max-sm:ml-0 max-sm:object-fill max-sm:h-[50vh]"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Creative Persuits.</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Beyond the lines of code, I'm also an artist at heart. Whether it's sketching, playing music, or capturing moments through my lens, I find inspiration in the beauty of the world around me.
                </p>
              </div>

              <PhotoChatMessage />
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
