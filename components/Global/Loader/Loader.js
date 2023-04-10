import styles from './Loader.module.css'

const Loader = ({ visible }) => {
    return visible && (
        <div className={styles.container}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default Loader