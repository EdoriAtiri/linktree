import style from './App.module.css'
import LinkCard from './components/LinkCard/LinkCard'
import Footer from './components/Footer/Footer'
import user from './Assets/83.jpg'
import arrow from './Assets/curve_arrow.svg'
import menu from './Assets/menu.svg'
import github from './Assets/github.svg'
import slack from './Assets/slack.svg'

function App() {
  return (
    <div className={style.app}>
      <header className={style.header}>
        <div className={style.user}>
          <figure>
            <img id="profile__img" src={user} alt="" />
          </figure>
          <h1>Edori Atiri</h1>
        </div>
        <button className={style.header_btn}>
          <img src={arrow} className={style.forward_arrow} alt="arrow" />
          <img src={menu} className={style.menu} alt="menu" />
        </button>
      </header>

      <div className={style.card_container}>
        <p id="twitter" className={style.slack_twitter}>
          RiReuben
        </p>
        <p
          id="slack"
          className={style.slack_twitter}
          style={{ display: 'none' }}
        >
          dori
        </p>

        <LinkCard
          title="Zuri Team"
          link="https://training.zuri.team/"
          id="btn__zuri"
        />
        <LinkCard title="Zuri Books" link="http://books.zuri.team" id="books" />
        <LinkCard
          title="Python Books"
          link="https://books.zuri.team/python-for-beginners?ref_id=dori"
          id="book__python"
        />
        <LinkCard
          title="Background Check for Coders"
          link="https://background.zuri.team"
          id="pitch"
        />
        <LinkCard
          title="Design Books"
          link="https://books.zuri.team/design-rules"
          id="book__design"
        />
      </div>

      <div className={style.slack_github}>
        <a href="https://slack.com/">
          <img src={slack} alt="slack" />
        </a>
        <a href="https://github.com/">
          <img src={github} alt="github" />
        </a>
      </div>

      <Footer />
    </div>
  )
}

export default App
