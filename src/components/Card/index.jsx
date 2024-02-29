import './card.css'

function Projects({projects}) {       

    return (
        <>
            <ul>
                {
                    projects.map((p, i)=>(
                        <li className='projects__card' key={i}>
                            <img src={p.img} alt={`Projeto ${p.id}`} />
                            <h3>{p.name}</h3>
                            <p>{p.desc}</p>
                            <a className='link_btn' target="_blank" href={p.link}>Clique aqui</a>
                        </li>
                    ))
                }                
            </ul>
        </>
    )
}

export default Projects