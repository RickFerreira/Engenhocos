import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Engenhocos</span>
      </h1>
      <p>Aqui você vai encontrar um acervo criado por estudantes, para facilitar sua vida no curso de Engenharia de Computação do IFPB!!</p>
    </section>
  )
} 
export default Home