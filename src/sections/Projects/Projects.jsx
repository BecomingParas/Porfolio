import React from "react";
import styles from "./ProjectsStyles.module.css";
import reactrouter from "../../assets/react-router.png"
import musicPortfolio from "../../assets/master the art of Music.png"
import ProjectCard from "../../common/ProjectCard";
import todoproject from "../../assets/todo.png"
import frontend from "../../assets/frontend-hora.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
        src={frontend}
        
        link="https://portfolio-demo-snowy.vercel.app/"
        h3="Frontend Hora"
        p="Portfolio Horaa"/>
        <ProjectCard
          src={musicPortfolio }
          link="https://projectnext100.vercel.app/"
          h3="Music Academy"
          p="Master the art of Music"
        />
        <ProjectCard
          src={reactrouter}
          link="https://github.com/parasnever/React-router-crash"
          h3="React Router"
          p="Project of React-router"
        />
        <ProjectCard
          src={todoproject}
          link="https://todo-context-local-zeta.vercel.app/"
          h3="Todo Project"
          p="Todo project by React"
        />
      </div>
    </section>
  );
}

export default Projects;
