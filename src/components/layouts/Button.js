import styles from './css/button.module.css'

function Button(){
    return(
        <button className={styles.btn}><a href='../pages/NewProject.js'>New Event</a></button>
    )
}

export default Button