import './contact.css';
import { Modal, Button } from 'react-bootstrap';
import { MdOutlineEmail } from 'react-icons/md';
import { BsSlack } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


export const Contact = () => {

  const form = useRef();
  const [showModal, setShowModal] = useState(false); // État pour afficher/masquer la modale  const sendEmail = (e) => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1yn343x', 'template_qrgycv2', form.current, 'M1rl20eka8ukkYl5_')
      .then(() => {
        setShowModal(true); // Afficher la modale lorsque l'e-mail est envoyé avec succès
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Gérer les erreurs d'envoi d'e-mail ici, si nécessaire
      });
    e.target.reset();
  };

  const handleCloseModal = () => {
    setShowModal(false); // Masquer la modale lorsqu'elle est fermée
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>lauth_jean@live.fr</h5>
            <a href="mailto:lauth_jean@live.fr" target='_blank' rel="noopener">Send a message</a>
          </article>
          <article className="contact__option">
            <BsSlack className='contact__option-icon' />
            <h4>Slack</h4>
            <h5>Jean lauth</h5>
            <a href="https://join.slack.com/t/jeanlauthprivate/shared_invite/zt-20j6hvbn7-Sj4Rmx6xx4oh23uE3TL~_Q" target='_blank' rel="noopener">Meet Me There</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=0766054712" target='_blank' rel="noopener">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

        {/* Modale personnalisée */}
        <Modal show={showModal} onHide={handleCloseModal} className='contact__modal'>
          <Modal.Header closeButton>
            <Modal.Title>Succès</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Votre e-mail a été envoyé avec succès !
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </section>
  )
}

