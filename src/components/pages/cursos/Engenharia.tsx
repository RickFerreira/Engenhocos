import { Link } from 'react-router-dom'
import styles from './Engenharia.module.css'

function Engenharia() {
    return(
        <section className={styles.home_container}>
            <h1 className={styles.titulo}>Engenharia</h1>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/Periodo1">1° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Engenharia">2° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Engenharia">3° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Engenharia">4° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Engenharia">5° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Engenharia">6° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Engenharia">7° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Engenharia">8° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Engenharia">9° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Engenharia">10° Período</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Engenharia">Disciplinas Optativas</Link>
                </li>
            </ul>
        </section>
    )
}
export default Engenharia