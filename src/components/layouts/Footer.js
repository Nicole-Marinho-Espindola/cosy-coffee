import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './css/footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
            </ul>
            <p><span>Cosy Bear</span> &copy; 2024</p>
        </footer>
)

}

export default Footer;
