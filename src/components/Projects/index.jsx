import './style.css'
import Card from '../Card'
import p1 from '../../assets/projects/dw.webp'
import p2 from '../../assets/projects/Joana.webp'
import p3 from '../../assets/projects/sp.webp'
import p4 from '../../assets/projects/Texeira.webp'

function Projects() {

    const projectList = [
        {
            img: p1,
            name: "Delicias da Wellen",
            desc: "Projeto desenvolvido no ano de 2021 para homenagear a confeiteira Maranhense Wellen Khrisna.",
            link: "https://www.behance.net/gallery/184323789/Delicias-da-Wellen"
        },
        {
            img: p2,
            name: "Projeto Advocacia",
            desc: "Template desenvolvido para usar como base para o desenvolvimento de Sites para Escritórios.  ",
            link: "https://www.behance.net/gallery/189123659/Joana-Ramos-Advogados"
        },
        {
            img: p3,
            name: "Social Photos",
            desc: "Landing Page desenvolvida para a venda de um curso fictício.",
            link: "https://www.behance.net/gallery/184323427/Social-Photos"
        },
        {
            img: p4,
            name: "Projeto Advocacia 2",
            desc: "Template desenvolvido para usar como base para o desenvolvimento de Sites para Escritórios.",
            link: "https://www.behance.net/gallery/189123467/Franscisco-Texeira-Advogados"
        },
    ];

    return (
        <>
            <section id='projects'>
                <h2>Projetos</h2>
                <Card projects={projectList} />
            </section>
        </>
    )
}

export default Projects