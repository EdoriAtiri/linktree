import React from 'react'
import style from './Contact.module.css'

function Contact() {
  return (
    <div className={style.contact}>
      <form className={style.form}>
        <div className={style.form_control}>
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" />
        </div>

        <div className={style.form_control}>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" />
        </div>

        <div className={style.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div className={style.form_control}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>{' '}
        </div>

        <div className={style.form_control}>
          <label htmlFor="terms">
            You agree to providing your data to Edori Atiri who may contact you.
          </label>
          <input type="checkbox" name="" id="terms" />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
