import './style.css'
import Github from '../../assets/Github.svg'
import Figma from '../../assets/Figma.svg'
import LinkedIn from '../../assets/Linkedin.svg'

function Contact() {

    return (
        <>
            <footer>
                <div>
                    <p>Meu contato:</p>
                    <p>(98) 9 92171603</p>
                </div>

                <div>
                    <p>Email:</p>
                    <p>wrnr288@gmail.com</p>
                </div>

                <nav>
                    <a href="https://github.com/wallinsonrocha/">
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/wallinsonrocha/">
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href="#">
                        <img src={Figma} alt="" />
                    </a>
                </nav>
            </footer>
        </>
    )
}

export default Contact