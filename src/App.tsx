
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Cursos from './components/pages/Cursos'
import Contact from './components/pages/Contact'


import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cursos/*" element={<Cursos />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Router> 
  )
}

export default App
