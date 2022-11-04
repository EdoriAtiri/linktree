import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import style from './App.module.css'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className={style.app}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
