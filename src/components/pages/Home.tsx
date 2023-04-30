import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import logo from '../../assets/ImagensLogo/LogoCinzaSemFundo.png'

function Home() {
  return (
    <section className={styles.home_container}>
      <img src={logo} alt="Icone principal do Engenhocos"/>
      <h1>
        Bem-vindo ao <span>Engenhocos</span>
      </h1>
      <p>Aqui você vai encontrar um acervo criado por estudantes, para facilitar sua vida no curso de Engenharia de Computação do IFPB!!</p>
      <Link to="/cursos" className={styles.botao}>BORA LÁ!!</Link>
    </section>
  )
} 
export default Home