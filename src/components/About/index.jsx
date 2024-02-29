import './style.css'
import icon from '../../assets/elipse.svg'
import React, { useRef, useEffect, useState } from 'react';

const expYear = [
    {
        y: 2020,
        desc: "No ano de 2020, pela curiosidade em desenvolvimento de jogos, resolvi entrar no mundo da programação onde tive o meu primeiro contato com a linguagem Java."
    },
    {
        y: 2021,
        desc: "Já no ano de 2021, mais interessado em aprender sobre o desenvolvimento Web resolvi aprender mais e mais sobre como poderia ajudar outras empresas com programação."
    },
    {
        y: 2022,
        desc: "Ingressei na faculdade de Engenharia da Computação a fim de conseguir oportunidades para por meu conhecimento em prática."
    },
    {
        y: 2023,
        desc: "Resolvi tomar coragem para iniciar o meu empreendimento para conseguir uma renda complementar."
    }   
];

function About() {
    const firstRef = useRef(null);
    const lastRef = useRef(null);
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        function handleScroll() {
            if (firstRef.current && lastRef.current) {
                const firstRect = firstRef.current.getBoundingClientRect();
                const lastRect = lastRef.current.getBoundingClientRect();
                const distance = lastRect.right - firstRect.right;
                setDistance(distance);

                const revealPoint = 150;
                const windowHeight = window.innerHeight;
                const reveal = document.querySelectorAll(".sobre__experiences li");
                reveal.forEach((item, index) => {
                    const revealTop = item.getBoundingClientRect().top;
                    if (revealTop < windowHeight - revealPoint) {
                        item.classList.add("reveal");
                        if (index === 0) {
                            const bar = item.querySelector('div');
                            bar.classList.add("reveal_bar");
                        }
                    }
                });
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [firstRef, lastRef]);

    return (
        <>
            <section id='sobre'>
                <h2>Sobre mim</h2>
                <div className='sobre__carossel'>
                    <ul className='sobre__experiences' style={{ '--larg': `${distance}px` }}>
                        {
                            expYear.map((ex, index) => (
                                <li key={index} style={{ '--delay': `.${(index + 1) * 2}s` }}>
                                    <p className='sobre__title'>{ex.y}</p>
                                    <div ref={index === 0 ? firstRef : index === expYear.length - 1 ? lastRef : null}>
                                        <img src={icon} alt="" />
                                    </div>
                                    <p>
                                        {ex.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}

export default About;
