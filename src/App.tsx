import NavBar from './components/navBar/NavBar';
import Posts from './screens/posts/Posts';
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.container}>
        <NavBar/>
        <Posts/>
    </div>
  );
}

export default App;
