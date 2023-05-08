import { Link } from 'react-router-dom'
import styles from './Cursos.module.css'

function Cursos() {
    return(
        <section className={styles.home_container}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/engenharia"><h1>Engenharia de Computação</h1></Link>
                </li>
                <li className={styles.item}>
                    <Link to="/contact"><h1>Telemática</h1></Link>
                </li>
                <li className={styles.item}>
                    <Link to="/cursos"><h1>Matemática</h1></Link>
                </li>
                <li className={styles.item}>
                    <Link to="/cursos"><h1>Física</h1></Link>
                </li>
            </ul>
        </section>
    )
}
export default Cursos