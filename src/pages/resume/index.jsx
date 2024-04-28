import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const resume = () => {
  return (
    <>
      <Head>
        <title>Saurabh Dhebe | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Saurabh Dhebe</h2>
          <div className="flex">
            <Link
              href="https://drive.google.com/file/d/17B4zuyf56HxLLfxnHCcD63INex96sSrd/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-sm  rounded-md shadow-lg shadow-gray-400 p-2 mr-5 cursor-pointer hover:scale-110 ease-in duration-300">
                Resume.pdf
              </button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/saurabh-dhebe-611971212"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </Link>
            <Link
              href="https://github.com/saurabhdhebe2"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </Link>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Full-Stack Web Development <span className="px-1">|</span>{' '}
              MERN-Stack Web Development <span className="px-1">|</span>{' '}
              MEAN-Stack Web Development
            </p>
          </div>
          <div className="block sm:hidden">
            <p className="py-2"> Full-Stack Web Development</p>
            <p> MERN-Stack Web Development</p>
            <p> MEAN-Stack Web Development</p>
          </div>
        </div>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>TypeScript
            <span className="px-2">|</span>NodeJs
            <span className="px-2">|</span>ExpressJs
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>MySQL
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> RESTAPI
          </p>
        </div>
      </div>
    </>
  );
};

export default resume;
