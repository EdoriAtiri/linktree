import { useState } from 'react'
import style from './Contact.module.css'

function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    terms: false,
  })

  const { first_name, last_name, email, message, terms } = formData

  const onChange = (e) => {
    let boolean = null

    if (e.target.value === 'false') {
      boolean = true
    }

    if (e.target.value === 'true') {
      boolean = false
    }

    if (e.target.type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [e.target.id]: boolean ?? e.target.value,
      }))
    }

    if (e.target.type !== 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }))
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className={style.contact}>
      <div className={style.container}>
        <header className={style.header}>
          <h1>Contact Message</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </header>

        <form className={style.form} onSubmit={onSubmit}>
          <div className={style.form_control}>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              value={first_name}
              placeholder="Enter your first name"
              onChange={onChange}
            />
          </div>

          <div className={style.form_control}>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              value={last_name}
              placeholder="Enter your last name"
              onChange={onChange}
            />
          </div>

          <div className={`${style.form_control} ${style.email}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="yourname@email.com"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className={`${style.form_control} ${style.message}`}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              placeholder="Send me a message and I'll reply you as soon as possible..."
              onChange={onChange}
            ></textarea>
          </div>

          <div className={style.form_control}>
            <p>
              You agree to providing your data to Edori Atiri who may contact
              you.
            </p>

            <input
              type="checkbox"
              name=""
              id="terms"
              value={terms}
              checked={terms}
              onChange={onChange}
            />
          </div>

          <button type="submit" id="btn__submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
