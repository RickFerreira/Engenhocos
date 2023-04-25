import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../assets/ImagensLogo/LogoBrancaSemFundo.png'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/" >
                    <img src={logo} width="200" height="200" alt="HomeWork"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/cursos">Cursos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contatos</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar