import { Link } from 'react-router-dom'
import styles from './Periodo1.module.css'

function Engenharia() {
    return(
        <section className={styles.home_container}>
            <h1 className={styles.titulo}>1° Período</h1>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/Algoritmos">Algoritmos e programação</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Periodo1">Inglês Instrumental</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Periodo1">Introdução à Engenharia de Computação</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Periodo1">Laboratório de Algoritmos e Programação</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Periodo1">Pré-Cálculo</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Periodo1">Sistemas Digitais I</Link>
                </li>
            </ul>
        </section>
    )
}
export default Engenharia