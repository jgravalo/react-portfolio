import React from 'react';
import { useEffect, useState } from 'react'

const Projects = () => {
    const [repos, setRepos] = useState([]);
    
      useEffect(() => {
        const getFullData = async () => {
          try {
            const res = await fetch('https://api.github.com/users/jgravalo/repos');
            const data = await res.json();
    
            const gitignore = [
              "jgravalo.github.io",
              "jgravalo",
              "42Cursus",
            ];
    
            // 1. FILTRAR: Aquí eliges qué repositorios quieres. // Ejemplo: Solo repos que no sean forks y que tengan más de 1 estrella (o los que tú quieras)
            const filteredRepos = data.filter(repo =>
              !repo.fork &&
              !gitignore.includes(repo.name)
            );
    
            // 2. OBTENER DETALLES: Buscamos los lenguajes de cada repo filtrado
            const detailedRepos = await Promise.all(
              filteredRepos.map(async (repo) => {
                const langRes = await fetch(repo.languages_url);
                const langsObj = await langRes.json();
    
                return {
                  ...repo,
                  all_languages: Object.keys(langsObj) // Esto te da un array: ["JavaScript", "CSS"]
                };
              })
            );
    
            setRepos(detailedRepos);
          } catch (err) {
            console.error("Error cargando datos de GitHub:", err);
          }
        };
    
        getFullData();
      }, []);
    
    return (
        <>
        <h2>Projects</h2>
        <div id="github-projects" className="projects">
          {repos.map(repo => (
              <div key={repo.id} className="project-card">
              <div>
                <h3>{repo.name}</h3>
                <p>{repo.description || "No description"}</p>
              </div>
              <div>
                <div className="languages">
                  <span style={{ borderColor: 'rainbow' }}>{repo.language}</span>
                </div>
                <div className="project-card-2">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">See on GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </>
    );
};

export default Projects;