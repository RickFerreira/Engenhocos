import styles from './Algoritmos.module.css'

function Engenharia() {
    return(
        <section className={styles.home_container}>
            <h1 className={styles.titulo}>Algoritmos e programação</h1>
            <p className={styles.descricao}> Essa é uma disciplina base do curso, procure usar os recursos daqui com sabedoria, pois é interessante que você aprenda essa cadeira e não apenas copie os exercícios. Outro fator importante é que se você se destarcar aqui, pode conseguir uma oportunidade de projeto mais cedo.</p>
            <br></br>
            <ul className={styles.list}>
                <li className={styles.item}>
                    Material do professor
                    <ul className={styles.list1}>
                        <li className={styles.item1}>
                            Aula gravada
                        </li>
                        <li className={styles.item1}>
                            PDF
                        </li>
                        <li className={styles.item1}>
                            Prova
                        </li>
                        <li className={styles.item1}>
                            Seminário
                        </li>
                        <li className={styles.item1}>
                            PDF
                        </li>
                        <li className={styles.item1}>
                            Livros
                            <ul className={styles.list2}>
                                <li className={styles.item2}>
                                    Tem na biblioteca:
                                </li>
                                <li className={styles.item2}>
                                    Tem na internet: 
                                </li>
                                <li className={styles.item2}>
                                    Link de compra: 
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className={styles.item}>
                    Material dos alunos
                    <ul className={styles.list1}>
                        <li className={styles.item1}>
                            Video Aula
                        </li>
                        <li className={styles.item1}>
                            Resumo
                            <ul>
                                <li className={styles.item2}>Esse <a href="https://github.com/RickFerreira/AlgoritmosTheHuxleyEmPython">repositorio do git</a> tem um resumo das questões resolvidas e alguns projetos, de python, usando a plataforma do The Huxley, para a disciplian de Algoritmos com o professor Petronio, mas algumas coisas do professor Henrique também.</li>
                            </ul>
                        </li>
                        <li className={styles.item1}>
                            LinkUtel
                            <ul>
                                <li className={styles.item2}>O <a href="https://www.thehuxley.com/">The Huxley</a> é um site para prática de resolução de algoritmos, com mais de 1000 problemas para serem resolvidos em diferentes linguagens de programação, até mesmo direto pela plataforma deles.</li>
                                <li className={styles.item2}>O <a href="https://www.beecrowd.com.br/judge/pt/login">Beecrowd</a> é outra opção de site para resolução de problemas, normalmente mais usado pelos professores, só que é um pouco mais exigente nas correções dos problemas.</li>
                                <li className={styles.item2}>O <a href="https://chat.openai.com/">ChatGPT</a> pode te dar a resposta pra praticamente qualquer questão de algoritmo, mas use-o para te ajudar a aprender a programar, te axiliando a entender o que tem que fazer e não para te dar respotas dos exercícios, lembre-se da importância dessa disciplina.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}
export default Engenharia