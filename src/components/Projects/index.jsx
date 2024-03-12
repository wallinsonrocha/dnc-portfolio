import './style.css'
import React, { useState } from 'react';
import p1 from '../../assets/projects/dw.webp'
import p2 from '../../assets/projects/Joana.webp'
import p3 from '../../assets/projects/sp.webp'
import p4 from '../../assets/projects/Texeira.webp'

import bg1 from '../../assets/projects/mockup-adv.png'
import bg2 from '../../assets/projects/mockup-raissa.png'
import bg3 from '../../assets/projects/mockup-wellen.png'

const Projects = () => {
    const [position, setPosition] = useState(0);
    const [deg, setDeg] = useState(0);
  
    const projectList = [
        {
            img: p1,
            name: "Delicias da Wellen",
            desc: "Projeto desenvolvido no ano de 2021 para homenagear a confeiteira Maranhense Wellen Khrisna.",
            link: "https://www.behance.net/gallery/184323789/Delicias-da-Wellen",
            bg: bg3
        },
        {
            img: p2,
            name: "Projeto Advocacia",
            desc: "Template desenvolvido para usar como base para o desenvolvimento de Sites para Escritórios.  ",
            link: "https://www.behance.net/gallery/189123659/Joana-Ramos-Advogados",
            bg: bg1
        },
        {
            img: p3,
            name: "Social Photos",
            desc: "Landing Page desenvolvida para a venda de um curso fictício.",
            link: "https://www.behance.net/gallery/184323427/Social-Photos",
            bg: bg2
        },
        {
            img: p4,
            name: "Projeto Advocacia 2",
            desc: "Template desenvolvido para usar como base para o desenvolvimento de Sites para Escritórios.",
            link: "https://www.behance.net/gallery/189123467/Franscisco-Texeira-Advogados",
            bg: bg1
        },
        {
            img: p1,
            name: "Delicias da Wellen",
            desc: "Projeto desenvolvido no ano de 2021 para homenagear a confeiteira Maranhense Wellen Khrisna.",
            link: "https://www.behance.net/gallery/184323789/Delicias-da-Wellen",
            bg: bg3
        },
        {
            img: p2,
            name: "Projeto Advocacia",
            desc: "Template desenvolvido para usar como base para o desenvolvimento de Sites para Escritórios.  ",
            link: "https://www.behance.net/gallery/189123659/Joana-Ramos-Advogados",
            bg: bg1
        },
        {
            img: p3,
            name: "Social Photos",
            desc: "Landing Page desenvolvida para a venda de um curso fictício.",
            link: "https://www.behance.net/gallery/184323427/Social-Photos",
            bg: bg2
        },
        {
            img: p4,
            name: "Projeto Advocacia 2",
            desc: "Template desenvolvido para usar como base para o desenvolvimento de Sites para Escritórios.",
            link: "https://www.behance.net/gallery/189123467/Franscisco-Texeira-Advogados",
            bg: bg1
        },
    ];
  
    const rotate = (pst) => {
      let newDeg = deg;
      if (position === 0 && pst === 7) {
        newDeg += 45;
      } else if (position === 7 && pst === 0) {
        newDeg -= 45;
      } else if (pst > position) {
        newDeg -= 45;
      } else if (pst < position) {
        newDeg += 45;
      }
      setDeg(newDeg);
      setPosition(pst);
    };
  
    const calcularCoordenadas = (i) => {
        // Calcular a porcentagem com base em "i"
        const porcentagem = (i * 100) / 8;

        // Converter a porcentagem em um ângulo entre 0 e 360 graus
        const angulo = (porcentagem / 100) * 360;

        // Converter o ângulo em coordenadas x e y
        const radianos = ((angulo + 90) * Math.PI) / 180;
        const x = 50 + Math.cos(radianos) * 50;
        const y = 50 - Math.sin(radianos) * 50;

        return { x, y };
    }
  
    return (
      <section id="projects">
        <div id="projects-area">
          {projectList.map((content, i) => (
            <div key={i} className={`port ${position === i ? 'port-active' : ''}`} style={{ backgroundImage: `url(${content.bg})` }}>
              <img src={content.img} alt={content.name} />
              <div className="port-content">
                <h2>{content.name}</h2>
                <p>{content.desc}</p>
                <a className="port-link" target="_blank" href={content.link}>Ver site</a>
              </div>
            </div>
          ))}
        </div>
        <div id="circle-area-port">
          <div id="circle-port" style={{ '--deg': `rotate(${deg}deg)` }}>
            {projectList.map((content, i) => (
              <div key={i} onClick={() => rotate(i)} className={`port ${position === i ? 'port-active' : ''}`} style={{ '--top': `${calcularCoordenadas(i).y}%`, '--rgt': `${calcularCoordenadas(i).x}%`, '--degObj': `${-deg}deg`, backgroundImage: `url(${content.img})` }}></div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;