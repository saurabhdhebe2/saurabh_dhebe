import React from 'react';
import shoeCenterImg from '../public/assets/projects/shoeCenter.png';
import imdbImg from '../public/assets/projects/imdb.png';
import googleImg from '../public/assets/projects/google.png';
import sh_portfolio from '../public/assets/projects/sh_portfolio.png';
import amazonImg from '../public/assets/projects/amazon.png';
import productLandingPageImg from '../public/assets/projects/productLandingPageImg.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="ShoeCenter"
            backgroundImg={shoeCenterImg}
            projectUrl="/shoeCenter"
            tech="HTML/CSS"
          />
          <ProjectItem
            title="Product-Landing-Page"
            backgroundImg={productLandingPageImg}
            projectUrl="/productLandingPage"
            tech="HTML/CSS"
          />
          <ProjectItem
            title="IMDB-clone"
            backgroundImg={imdbImg}
            projectUrl="/imdb"
            tech="Next JS"
          />
          <ProjectItem
            title="Google-clone"
            backgroundImg={googleImg}
            projectUrl="/google"
            tech="Next JS"
          />
          <ProjectItem
            title="Amazon-clone"
            backgroundImg={amazonImg}
            projectUrl="/amazon"
            tech="Next JS"
          />
          <ProjectItem
            title="Film-maker portfolio"
            backgroundImg={sh_portfolio}
            projectUrl="/film_maker_portfolio"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
