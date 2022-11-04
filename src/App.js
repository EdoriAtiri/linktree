import style from './App.module.css'
import Home from './Pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className={style.app}>
      <Home />
      <Footer />
    </div>
  )
}

export default App
