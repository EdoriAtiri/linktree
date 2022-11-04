import React from 'react'
import style from './Contact.module.css'

function Contact() {
  return (
    <div className={style.contact}>
      <div className={style.container}>
        <header className={style.header}>
          <h1>Contact Message</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </header>

        <form className={style.form}>
          <div className={style.form_control}>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>

          <div className={style.form_control}>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>

          <div className={`${style.form_control} ${style.email}`}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="yourname@email.com" />
          </div>

          <div className={`${style.form_control} ${style.message}`}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>{' '}
          </div>

          <div className={style.form_control}>
            <p>
              You agree to providing your data to Edori Atiri who may contact
              you.
            </p>

            <input type="checkbox" name="" id="terms" />
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
