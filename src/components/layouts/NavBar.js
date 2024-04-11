import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './css/navbar.module.css'
import logo from '../../img/Logo.png'

function NavBar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="./">
                    <img className={styles.logo_img} src={logo} alt='Cosy Bear'/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="./">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="./project">Projects</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="./company">Company</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="./contact">Contact</Link>
                    </li>
                </ul>
            </Container>

            
        </nav>
    )
}

export default NavBar