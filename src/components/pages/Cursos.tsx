import { Link } from 'react-router-dom'
import styles from './Cursos.module.css'

function Contact() {
    return(
        <section className={styles.home_container}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    Engenharia de Computação
                    <ul className={styles.list1}>
                        <li className={styles.item1}>
                            1° Período
                            <ul className={styles.list2}>
                                <li className={styles.item2}>
                                    Introdução a Engenharia de Computação
                                </li>
                                <li className={styles.item2}>
                                    Algorítmos    
                                </li>
                                <li className={styles.item2}>
                                    Medição eletro eletronica
                                </li>
                                <li className={styles.item2}>
                                    Sistemas digitais 1
                                </li>
                                <li className={styles.item2}>
                                    Inglês instrumental
                                </li>
                            </ul>
                        </li>
                        <li className={styles.item1}>
                            2° Período 
                        </li>
                        <li className={styles.item1}>
                            3° Período 
                        </li>
                        <li className={styles.item1}>
                            4° Período 
                        </li>
                        <li className={styles.item1}>
                            5° Período 
                        </li>
                        <li className={styles.item1}>
                            6° Período 
                        </li>
                        <li className={styles.item1}>
                            7° Período 
                        </li>
                        <li className={styles.item1}>
                            8° Período 
                        </li>
                        <li className={styles.item1}>
                            9° Período 
                        </li>
                        <li className={styles.item1}>
                            10° Período 
                        </li>
                        <li className={styles.item1}>
                            Disciplinas optativas
                        </li>

                    </ul>
                </li>
                <li className={styles.item}>
                    Telemática
                </li>
                <li className={styles.item}>
                    Matemática
                </li>
                <li className={styles.item}>
                    Física
                </li>
            </ul>
        </section>
    )
}
export default Contact