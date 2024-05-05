import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../../public/assets/about.jpg';

const About = () => {
  return (
    <div id="about" className="w-full  p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hey there! I&apos;m a developer who loves building mobile-responsive
            UI applications and ensuring they play nice with APIs and various
            backend technologies. My forte lies in crafting sleek interfaces
            using HTML, CSS, JavaScript, and React, all geared towards providing
            users with the smoothest experience, regardless of the device
            they&apos;re on.
          </p>
          <br />
          <p className="py-2 text-gray-600">
            I&apos;m all about learning new stuff. There are countless ways to
            tackle a problem, right? While I&apos;m pretty comfy with HTML, CSS,
            JavaScript, and React, I&apos;m also quick to pick up new tech
            stacks. In my view, staying adaptable is key as project needs
            evolve.
          </p>
          <br />
          <p className="py-2 text-gray-600">
            In 2024, I plunged into the world of artificial intelligence. The
            possibilities with LLM models and other AI tech? Mind-blowing!
            I&apos;m fascinated by exploring AI and its applications. I truly
            believe that being a top-notch developer isn&apos;t about sticking
            to one language or framework; it&apos;s about using the right tools
            for each unique challenge.
          </p>
          <br />
          <p className="py-2 text-gray-600">
            And hey, when it comes to stacks, I&apos;m no stranger to MERN
            (MongoDB, Express.js, React, Node.js) or MEAN (MongoDB, Express.js,
            Angular, Node.js). Whether it&apos;s frontend, backend, or the whole
            enchilada, I&apos;m ready to tackle it!
          </p>
          <br />

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
