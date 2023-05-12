import styles from './Sidebar.module.css';

const Sidebar = ({ children }) => {
    return (
        <div className={styles.sideBar}>
            {/* <div className={styles.arrowButton} /> */}
            {children}
        </div>
    )
}

export default Sidebar