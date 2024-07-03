import styles from "./css/contact.module.css"
function Contact() {
  return (
    <div className={styles.main_div}>
      <div className={styles.title_block}>
        <h1>Follow us on Instagram</h1>
        <p>follow us to see more about our job</p>
        <div className={styles.feature}></div>
      </div>
      <div className={styles.display_max}>
        <iframe width="900" height="550" src="https://www.instagram.com/_nicoleesp/embed/" frameborder="0"></iframe>
      </div>
      <div className={styles.display_min}>
        <iframe width="300" height="460" src="https://www.instagram.com/p/C1GE6_1AHgf/embed/" frameborder="0"></iframe>
      </div>
    </div> 
)
}

export default Contact;
