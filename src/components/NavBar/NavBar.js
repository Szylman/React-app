import styles from "./NavBar.module.scss";
import Container from "../Container/Container";



const NavBar = () => {
    return(
        <nav>
            <Container >
                <div className={styles.nav_wrapper}>
                    <span className="fa fa-tasks" />
                    <ul className={styles.nav_list}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/favorite">Favorite</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}
export default NavBar;