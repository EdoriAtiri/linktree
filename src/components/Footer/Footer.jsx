import style from './Footer.module.css'
import zuri from '../../Assets/zuri.svg'
import ingressive from '../../Assets/ingressive.svg'

function Footer() {
  return (
    <div className={style.footer}>
      <a href="https://training.zuri.team/">
        <img src={zuri} alt="zuri" />
      </a>
      <p>HNG Internship 9 Frontend Task</p>
      <a href="https://ingressive.org/">
        <img src={ingressive} alt="ingressive" />
      </a>
    </div>
  )
}

export default Footer
