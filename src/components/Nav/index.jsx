import Github from '../../assets/Github.svg'
import LinkedIn from '../../assets/Linkedin.svg'
import './style.css'

function Nav() {
  return (
    <>
    <header>
      <nav>
        <a href="#projects">Projetos</a>
        <a href="#sobre">Tecnologias</a>
        <a href="#sobre">Sobre mim</a>
      </nav>      

      <nav>
        <a href="https://github.com/wallinsonrocha/">
          <img src={Github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/wallinsonrocha/">
          <img src={LinkedIn} alt="" />
        </a>
      </nav>
    </header>
    </>
  )
}

export default Nav
