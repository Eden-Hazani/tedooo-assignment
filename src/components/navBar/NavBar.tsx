import Logo from '../../assets/svg/logo.svg';
import Home from '../../assets/svg/home.svg';
import MessagesTab from '../../assets/svg/messagesTab.svg';
import Bell from '../../assets/svg/bell.svg';
import mockProfile from '../../assets/images/mockProfile.png';
import styles from './styles.module.css'
import SearchBar from '../../utilityComponents/searchBar/SearchBar';


export default function NavBar() {
    return( 
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <img src={Logo} alt={'logo'}/>
                </div>
                <SearchBar/>
            </div>
            <div className={`${styles.navContainer}`}>
                <div className={styles.navItems}>
                    <div className={`${styles.homeItem} ${styles.navItem}`}>
                        <img src={Home} alt={'home'}/>
                        <p style={{color:'#2DB8A1'}}>Home</p>
                    </div>
                </div>
                <div className={styles.navItems}>
                    <div className={styles.navItem}>
                        <img src={MessagesTab} alt={'messagesTab'}/>
                        <p>Messages</p>
                    </div>
                </div>
                <div className={styles.navItems}>
                    <div className={styles.navItem}>
                        <img src={Bell} alt={'bell'}/>
                        <p>Notifications</p>
                    </div>
                </div>
                <div className={styles.navItems}>
                    <div className={styles.navItem}>
                        <img src={mockProfile} alt={'mockProfile'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}