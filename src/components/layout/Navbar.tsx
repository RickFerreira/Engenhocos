import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../assets/ImagensLogo/IconeSemFundo.png'
import {FaHome, FaGraduationCap, FaPhoneSquareAlt} from 'react-icons/fa'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/" className={styles.icon}>
                    <img src={logo} width="40" height="40" alt="Icone do Engenhocos"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/"><FaHome className={styles.icon}/>Inicio</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/cursos"><FaGraduationCap className={styles.icon}/>Cursos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact"><FaPhoneSquareAlt className={styles.icon}/>Contatos</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar