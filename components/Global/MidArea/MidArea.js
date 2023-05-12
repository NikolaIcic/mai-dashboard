import styles from './MidArea.module.css'

const MidArea = ({ children }) => {
    return (
        <div className={styles.midArea}>
            {children}
        </div>
    )
}

export default MidArea