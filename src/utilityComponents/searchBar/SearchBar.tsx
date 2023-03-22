import styles from './styles.module.css'
import SearchIcon from '../../assets/svg/search.svg'

export default function SearchBar(){
    return <div className={styles.container}>
        <img src={SearchIcon} alt={'search'}/>
        <input className={styles.searchBar} type="text" placeholder="Search"/>
    </div>
}