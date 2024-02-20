import React from 'react'

const Contact = () => {
  return (
    <>
        <section class="contact" id="contact">
        <h3>Contact Me</h3>

        <form id="contact-form" action="#" method="post">
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" id="first-name" name="first-name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" id="last-name" name="last-name" required />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
            </div>
            <button type="submit" className="btn">Send Message</button>
        </form>
    </section>
    </>
  )
}

export default Contact