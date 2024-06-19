import { MdMessage } from "react-icons/md"
import styles from "./Contact.module.css"
import Button from "../Button/Button"

function ContactForm() {
  return (
      <section className={styles.container}>
          <div className={styles.contact_form}>
              <Button text="Via Support Chat" icon={MdMessage}/> 
          </div>
          <div className = {styles.contact_image}></div>
      </section>
  )
}

export default ContactForm