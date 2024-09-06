import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import card7 from '../assets/benefits/card-1.svg';


const Benefits = () => {
  return (
    <Section id="projects">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Projects I've worked on."
        />

        <div className="flex flex-wrap overflow-hidden gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="flex justify-between flex-col relative p-5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${card7})`,
              }}
              key={item.id}
            >
              <div className="relative">
                <h5 className="h5 text-xl ml-4 mt-2 mb-4">{item.title}</h5>
              </div>
              <div className="relative z-20 flex flex-col h-[100%] min-h-[22rem] p-[2.4rem]">
                <div className="absolute opacity-0 max-sm:opacity-100 hover:opacity-60 transition-opacity duration-[750ms] ease-in-out top-0 left-0 h-[100%] w-[100%]">
                  <div className="relative inset-0">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-[1rem]"
                      />
                    )}
                  </div>
                </div>
                <div className="">
                  <p className="body-2 mb-6 text-n-3 max-sm:opacity-0">{item.text}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <img
                  src={item.iconUrl}
                  width={48}
                  height={48}
                  alt={item.title}
                />
                <div className="flex align-middle hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
                  <p className="ml-auto mt-1 font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
