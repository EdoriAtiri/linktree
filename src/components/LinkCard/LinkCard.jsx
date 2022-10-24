import style from './LinkCard.module.css'

function LinkCard({ title, link, id }) {
  return (
    <a
      id={id}
      className={style.card}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </a>
  )
}

export default LinkCard
