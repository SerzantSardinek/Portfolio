import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Have a question, collaboration idea, or just want to say hi? I’d
            love to hear from you! Feel free to reach out using the form below.
            I’ll get back to you as soon as possible. Looking forward to
            connecting!
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Martin Cechal,
          <br />
          Czech Republic,
          <br />
          Osvobozeni 491/34, <br />
          696 01 Rohatec <br />
          <span>cechal.martin4@gmail.com</span>
        </div>
        <div className="map-wrap">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390.08276769465454!2d17.17881196979058!3d48.87434819119343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47132fe62a0dc259%3A0x26bdf1c7aed529d3!2sOsvobozen%C3%AD%20491%2F34%2C%20696%2001%20Rohatec!5e0!3m2!1scs!2scz!4v1732440790323!5m2!1scs!2scz"
            width="100%"
            height="100%"
            className="map-container"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
