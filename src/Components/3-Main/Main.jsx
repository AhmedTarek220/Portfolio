import { useState } from "react";
import "./Main.css";
import { AnimatePresence, motion } from "framer-motion";
import { link } from "framer-motion/client";


function Main() {
  const projects = [
    { title: "Karia – A Simple and Modern E-Commerce Platform", image: "Karia.png", category: "React" , link:"https://karia.vercel.app/" , subtitle:"Karia is a clean and modern e-commerce project built to showcase products in a simple, user-friendly " , github:"https://github.com/AhmedTarek220/ReactJs-Eccomerce"},
    { title: "MovieTP – Movie Search App with Real-Time Trending Data", image: "Movies.png", category: "React" , link:"https://movie-tp.vercel.app/" , subtitle:"MovieTP is a movie search app that fetches data from an API to display trending and top-rated films and series in a clean, user-friendly layout" , github:"https://github.com/AhmedTarek220/Movies" },
    { title: "Prayer For Salah Time", image: "Prayer.jpeg", category: "React" , link:"https://prayer-sigma.vercel.app/" , subtitle:"An Resposive Page For Salah Time Using An External Api With A Clean And Modern Code" , github:"https://github.com/AhmedTarek220/ReactJs-Prayer" },
    { title: "kasper LandingPgae", image: "Kasper.jpeg", category: "HTML & CSS" , link:"https://kasper-landing.vercel.app/" , subtitle:"A responsive landing page built using HTML and CSS, showcasing a clean and modern design with a focus on user experience." , github:"https://github.com/AhmedTarek220/HTML-CSS/tree/main/HTML%26CSS/LandingPage"},
    { title: "Leon LandingPage", image: "Leon.jpeg", category: "HTML & CSS" , link:"https://leon-landing.vercel.app/" , subtitle:"A responsive landing page built using HTML and CSS, showcasing a clean and modern design with a focus on user experience." , github:"https://github.com/AhmedTarek220/HTML-CSS/tree/main/LeonPage"},
    { title: "Animated Clock", image: "Clock.jpeg", category: "JavaScript" , link:"https://digital-clockzt.vercel.app/" , subtitle:"A digital clock built using JavaScript, HTML, and CSS, featuring a clean design and smooth animations for a modern look." , github:"https://github.com/AhmedTarek220/JS-Projects/tree/main/Digital%20Clock"},
    { title: "XO Game", image: "XO.jpeg", category: "JavaScript" , link:"https://xo-game-mu.vercel.app/", subtitle:"A simple XO game built using JavaScript, HTML, and CSS, featuring With A Modern Js Code." , github:"https://github.com/AhmedTarek220/JS-Projects/tree/main/XO%20Game"},
    { title: "RollDice Game", image: "RollDice.jpeg", category: "JavaScript"  , link:"https://roll-dicezt.vercel.app/", subtitle:"A simple roll dice game built using JavaScript, HTML, and CSS,With A Modern Clean Code" , github:"https://github.com/AhmedTarek220/JS-Projects/tree/main/RollDice"},
  ];

  const categories = ["All Projects", "HTML & CSS", "JavaScript", "React"];
  const [active, setActive] = useState(0);

  const filteredProjects =
    active === 0
      ? projects
      : projects.filter((project) => project.category.toLowerCase() === categories[active].toLowerCase());

  return (
    <main className="flex">
      <section className="left-sec flex">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={active === index ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </section>
      <section className="right-sec">
        <AnimatePresence mode="async">
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.image + index} 
              initial={{ transform:'scale(0.4)'}}
              animate={{ transform:'scale(1)' }}
              transition={{ type:"spring" ,damping:8 , stiffness:50 }}
              className="card"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <div className="box">
                <h3 className="title">{project.title}</h3>
                <p className="subtitle">
                  {project.subtitle ? project.subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatibus."}
                </p>
                <div className="links flex">
                  <div className="icons">
                    <a href={project.link} target="_blank">
                      <i className="fas fa-link"></i>
                    </a>
                    <a href={project.github} target="_blank">  
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <a href={project.link} target="_blank" className="more">
                    More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              </a>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}
export default Main;
